"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const SECTION_IDS = ["home", "about", "skills", "projects", "experience", "contact"];

// Safe isomorphic layout effect that avoids SSR warnings
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// ── Theme store with useSyncExternalStore ──────────────────
type Theme = "dark" | "light";

let themeListeners: Array<() => void> = [];

function notifyThemeChange() {
  themeListeners.forEach((l) => l());
}

function subscribeTheme(callback: () => void) {
  themeListeners.push(callback);
  window.addEventListener("storage", callback);
  return () => {
    themeListeners = themeListeners.filter((l) => l !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage may be blocked
  }
  return null;
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = getStoredTheme();
  if (stored) return stored;
  return "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // ignore
  }
}

// ── SVG icons ──────────────────────────────────────────────
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Fixed initial value on server and client to avoid hydration mismatch
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillReady, setPillReady] = useState(false);

  // Wrapper ref contains both the pill and the links
  const listRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Sync theme with external store without hydration mismatch or cascading renders
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const toggleTheme = useCallback(() => {
    const current = getThemeSnapshot();
    const next: Theme = current === "dark" ? "light" : "dark";
    applyTheme(next);
    notifyThemeChange();
  }, []);

  const activeNavSection = pathname.startsWith("/projects") ? "projects" : activeSection;

  // ── Scroll position check ───────────────────────────────
  const checkScrollState = useCallback(() => {
    if (!isHomePage) return false;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Bottom of page: force contact
    if (scrollY + windowHeight >= docHeight - 30) {
      setActiveSection("contact");
      return true;
    }

    // Top of page: force home
    if (scrollY < 80) {
      setActiveSection("home");
      return true;
    }

    return false;
  }, [isHomePage]);

  // ── Scroll handler ───────────────────────────────────────
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      checkScrollState();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, checkScrollState]);

  // ── IntersectionObserver for sections & initial scroll check ─
  useEffect(() => {
    if (!isHomePage) return;

    // Run check once on mount (after layout) for middle-of-page reload
    const frameId = requestAnimationFrame(() => {
      if (!checkScrollState()) {
        const viewportMiddle = window.scrollY + window.innerHeight * 0.45;
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id) || (id === "home" ? document.querySelector("header.hero") : null);
          if (el) {
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = top + rect.height;
            if (viewportMiddle >= top && viewportMiddle <= bottom) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    });

    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, boolean>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id) || (id === "home" ? document.querySelector("header.hero") : null);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.isIntersecting);

          // Top and bottom boundaries take priority
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          if (scrollY < 80) {
            setActiveSection("home");
            return;
          }
          if (scrollY + windowHeight >= docHeight - 30) {
            setActiveSection("contact");
            return;
          }

          const first = SECTION_IDS.find((sid) => visible.get(sid));
          if (first) {
            setActiveSection(first);
          }
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      cancelAnimationFrame(frameId);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHomePage, checkScrollState]);

  // ── Sliding pill: measure active link using getBoundingClientRect ──
  const movePill = useCallback(() => {
    if (!listRef.current || !pillRef.current) return;

    const activeLink = listRef.current.querySelector<HTMLElement>(
      `[data-section="${activeNavSection}"]`
    );
    if (!activeLink) return;

    const listRect = listRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    if (linkRect.width === 0 && listRect.width === 0) return;

    const x = linkRect.left - listRect.left;
    const w = linkRect.width;

    pillRef.current.style.transform = `translateX(${x}px)`;
    pillRef.current.style.width = `${w}px`;

    setPillReady(true);
  }, [activeNavSection]);

  // Measure in useLayoutEffect, and re-measure on theme, route, and activeSection changes
  useIsomorphicLayoutEffect(() => {
    movePill();
  }, [movePill, theme, pathname]);

  // Re-measure on window resize (ResizeObserver on wrapper) and document.fonts.ready
  useEffect(() => {
    if (!listRef.current) return;
    const ro = new ResizeObserver(() => {
      movePill();
    });
    ro.observe(listRef.current);

    window.addEventListener("resize", movePill);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        movePill();
      });
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", movePill);
    };
  }, [movePill]);

  // ── Mobile menu close handlers ───────────────────────────
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [mobileMenuOpen]);

  // ── Scroll to top handler (logo and Home link) ───────────
  const scrollToTop = useCallback(
    (e?: React.MouseEvent) => {
      if (isHomePage) {
        if (e) e.preventDefault();
        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        if (typeof window !== "undefined" && window.history) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        setActiveSection("home");
        setMobileMenuOpen(false);
      } else {
        setMobileMenuOpen(false);
      }
    },
    [isHomePage]
  );

  const getHref = (href: string) =>
    !isHomePage && href.startsWith("#") ? `/${href}` : href;

  return (
    <div className="nav-fixed-wrap" role="region" aria-label="Main navigation">
      <nav ref={navRef} className="nav-capsule">

        {/* Logo */}
        <Link
          href="/"
          className="nav-logo"
          onClick={scrollToTop}
          aria-label="Fahri Maulana, back to top"
        >
          FM<span className="nav-logo-dot" aria-hidden="true">.</span>
        </Link>

        {/* Desktop links + sliding pill */}
        <div className="nav-links-wrap">
          <div ref={listRef} className="nav-links-inner relative flex items-center">
            {/* Sliding pill */}
            <div
              className={`nav-pill${pillReady ? " is-ready" : ""}`}
              ref={pillRef}
              aria-hidden="true"
            />

            <ul className="flex items-center">
              {siteConfig.navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeNavSection === sectionId;
                const isHomeItem = sectionId === "home";
                return (
                  <li key={item.href}>
                    <a
                      href={isHomeItem ? "/" : getHref(item.href)}
                      data-section={sectionId}
                      className={`nav-link${isActive ? " active" : ""}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={(e) => {
                        if (isHomeItem && isHomePage) {
                          scrollToTop(e);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right controls */}
        <div className="nav-controls">
          {/* Theme toggle */}
          <button
            type="button"
            className="nav-theme-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={theme === "dark"}
            suppressHydrationWarning
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="nav-hamburger"
            id="nav-hamburger-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-dropdown"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              aria-hidden="true">
              {mobileMenuOpen ? (
                <>
                  <line x1="5" y1="5" x2="15" y2="15" />
                  <line x1="5" y1="15" x2="15" y2="5" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-dropdown"
            className="nav-dropdown"
            role="menu"
            aria-labelledby="nav-hamburger-btn"
          >
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeNavSection === sectionId;
              const isHomeItem = sectionId === "home";
              return (
                <a
                  key={item.href}
                  href={isHomeItem ? "/" : getHref(item.href)}
                  className={`nav-dropdown-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  role="menuitem"
                  onClick={(e) => {
                    if (isHomeItem && isHomePage) {
                      scrollToTop(e);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}
