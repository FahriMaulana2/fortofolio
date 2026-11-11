"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export interface HeroCardProps {
  src?: string;
  alt?: string;
  name?: string;
  role?: string;
  projects?: Array<{
    id: string;
    title: string;
    shortTitle?: string;
    image?: string | { src: string; alt: string };
    gradient?: { c1: string; c2: string };
  }>;
}

export function HeroCard({
  src = "/images/portrait.jpeg",
  alt = "Fahri Maulana – Web Developer",
  name = "Fahri Maulana",
  role = "Full-stack developer",
  projects = [],
}: HeroCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Expanded/fanned state triggered by hover on desktop or tap on mobile
  const isFanned = isHovered || isTapped;

  // Primary project for Back Card 1
  const project = projects[0] || {
    shortTitle: "OMAH VECTOR",
    title: "OMAH VECTOR Studio",
    image: "/images/omah-vector.png",
  };
  const projectImgSrc =
    typeof project.image === "object" ? project.image?.src : project.image;

  // Lightweight SVG noise data URI for subtle tactile paper grain (opacity 5%)
  const paperNoise = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E`;

  // Washi tape serrated teeth clip-path
  const washiClipPath =
    "polygon(0% 0%, 4px 10%, 0% 20%, 4px 30%, 0% 40%, 4px 50%, 0% 60%, 4px 70%, 0% 80%, 4px 90%, 0% 100%, 100% 100%, calc(100% - 4px) 90%, 100% 80%, calc(100% - 4px) 70%, 100% 60%, calc(100% - 4px) 50%, 100% 40%, calc(100% - 4px) 30%, 100% 20%, calc(100% - 4px) 10%, 100% 0%)";

  return (
    <motion.div
      className="hero-card-stack select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsTapped((prev) => !prev)}
      role="region"
      aria-label="Fahri Maulana interactive Polaroid portrait stack"
      animate={
        shouldReduceMotion || isFanned
          ? { y: 0 }
          : { y: [-3.5, 3.5, -3.5] }
      }
      transition={
        shouldReduceMotion || isFanned
          ? { duration: 0 }
          : { repeat: Infinity, duration: 4.8, ease: "easeInOut" }
      }
    >
      {/* ── CARD 2: TECH SPECIFICATION (Back Left) ─────────────────── */}
      <motion.div
        className="hero-back-card hero-tech-card"
        initial={
          shouldReduceMotion
            ? { opacity: 1, rotate: -8.5, x: -14, y: 6 }
            : { opacity: 0, scale: 0.92, rotate: -2, x: 0, y: 20 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1, rotate: -8.5, x: -14, y: 6 }
            : {
                opacity: 1,
                scale: 1,
                rotate: isFanned ? -14.5 : -8.5,
                x: isFanned ? -28 : -14,
                y: isFanned ? -6 : 6,
              }
        }
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 24,
          delay: shouldReduceMotion ? 0 : 0.15,
        }}
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[6px]"
          style={{
            backgroundImage: `url("${paperNoise}")`,
            opacity: 0.05,
            mixBlendMode: "multiply",
          }}
        />

        {/* Card header */}
        <div className="flex items-center justify-between border-b border-[#c9b79c]/40 pb-2 mb-3">
          <span className="font-mono text-[9.5px] font-bold tracking-widest text-[#7a5c3e] uppercase">
            SPEC // CORE STACK
          </span>
          <span className="font-mono text-[9px] text-[#9c8266]">VER 2026</span>
        </div>

        {/* Stack items */}
        <div className="space-y-1.5 text-left">
          <div className="tech-badge-row">
            <span className="tech-badge-title">Laravel 12</span>
            <span className="tech-badge-desc">PHP &amp; Livewire</span>
          </div>
          <div className="tech-badge-row">
            <span className="tech-badge-title">Next.js 16</span>
            <span className="tech-badge-desc">React 19 &amp; TypeScript</span>
          </div>
          <div className="tech-badge-row">
            <span className="tech-badge-title">Tailwind CSS</span>
            <span className="tech-badge-desc">Design System</span>
          </div>
          <div className="tech-badge-row">
            <span className="tech-badge-title">MySQL &amp; API</span>
            <span className="tech-badge-desc">Architecture</span>
          </div>
        </div>

        {/* Handwritten note at bottom */}
        <div className="mt-3 pt-2 border-t border-[#c9b79c]/30 text-left">
          <p
            className={`${caveat.className} text-[15px] font-medium text-[#4a2e16] leading-none`}
          >
            Clean architecture &amp; solid systems ☕
          </p>
        </div>
      </motion.div>

      {/* ── CARD 1: PROJECT SHOWCASE (Back Right) ──────────────────── */}
      <motion.div
        className="hero-back-card hero-proj-card"
        initial={
          shouldReduceMotion
            ? { opacity: 1, rotate: 6, x: 14, y: 8 }
            : { opacity: 0, scale: 0.92, rotate: 1, x: 0, y: 20 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1, rotate: 6, x: 14, y: 8 }
            : {
                opacity: 1,
                scale: 1,
                rotate: isFanned ? 12.5 : 6,
                x: isFanned ? 30 : 14,
                y: isFanned ? -6 : 8,
              }
        }
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 24,
          delay: shouldReduceMotion ? 0 : 0.25,
        }}
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[6px]"
          style={{
            backgroundImage: `url("${paperNoise}")`,
            opacity: 0.05,
            mixBlendMode: "multiply",
          }}
        />

        {/* Project Image Area */}
        <div className="hero-proj-img-wrap">
          {projectImgSrc ? (
            <Image
              src={projectImgSrc}
              alt={project.title || "Featured Project"}
              fill
              sizes="(max-width: 860px) 70vw, 30vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#c2652a] to-[#3a1a0b] flex items-center justify-center text-white/80 font-mono text-xs">
              Project Preview
            </div>
          )}
          {/* Inner shadow overlay */}
          <div className="hero-photo-inner-shadow" />
        </div>

        {/* Handwritten caption */}
        <div className="pt-2.5 pb-1 text-left">
          <p
            className={`${caveat.className} text-[17px] font-semibold text-[#2a1708] leading-tight truncate`}
          >
            ✦ {project.shortTitle || project.title || "Featured Project"}
          </p>
          <span className="font-mono text-[9px] tracking-wider text-[#7a6148] block mt-0.5">
            CLIENT WORK // Q3 2026
          </span>
        </div>
      </motion.div>

      {/* ── CARD UTAMA: POLAROID PORTRAIT ─────────────────────────── */}
      <motion.div
        className="hero-main-card"
        initial={
          shouldReduceMotion
            ? { opacity: 1, y: 0, rotate: -3.5, scale: 1 }
            : { opacity: 0, y: -36, rotate: -3.5, scale: 0.95 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1, y: 0, rotate: -3.5, scale: 1 }
            : {
                opacity: 1,
                y: isHovered ? -10 : 0,
                rotate: isHovered ? -1.2 : -3.5,
                scale: isHovered ? 1.02 : 1,
              }
        }
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
          delay: shouldReduceMotion ? 0 : 0.35,
        }}
      >
        {/* ── WASHI TAPE BERGERIGI (Top Center) ────────────────────── */}
        <div
          className="hero-washi-tape"
          style={{ clipPath: washiClipPath }}
          aria-hidden="true"
        />

        {/* Paper texture overlay (5% opacity) */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[6px]"
          style={{
            backgroundImage: `url("${paperNoise}")`,
            opacity: 0.05,
            mixBlendMode: "multiply",
          }}
        />

        {/* ── PHOTO AREA ─────────────────────────────────────────── */}
        <div className="hero-photo-frame">
          {src && !imgError ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(max-width: 860px) 80vw, 36vw"
              className="hero-photo-img"
              style={{
                objectPosition: "center 20%",
                filter: "saturate(0.85) sepia(0.12) contrast(1.05)",
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="hero-photo-placeholder" aria-hidden="true">
              FM
            </div>
          )}

          {/* Vignette layer */}
          <div className="hero-photo-vignette" aria-hidden="true" />

          {/* Subtle grain overlay on photo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("${paperNoise}")`,
              opacity: 0.08,
              mixBlendMode: "overlay",
            }}
            aria-hidden="true"
          />

          {/* Inner shadow overlay */}
          <div className="hero-photo-inner-shadow" aria-hidden="true" />

          {/* ── STIKER "LARAVEL 12" (Bottom-right of photo) ───────── */}
          <div className="hero-laravel-sticker" aria-hidden="true">
            <span className="hero-laravel-gem">◆</span>
            <span className="hero-laravel-text">Laravel 12</span>
          </div>
        </div>

        {/* ── CAP MELINGKAR "AVAILABLE Q3 2026" (SVG textPath) ─────── */}
        <motion.div
          className="hero-circular-stamp"
          initial={
            shouldReduceMotion
              ? { opacity: 0.92, scale: 1, rotate: 14 }
              : { opacity: 0, scale: 2.2, rotate: 28 }
          }
          animate={{ opacity: 0.92, scale: 1, rotate: 14 }}
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 20,
            delay: shouldReduceMotion ? 0 : 0.75,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="stampCirclePath"
                d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              />
            </defs>

            {/* Distressed circular borders */}
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#be3827"
              strokeWidth="1.8"
              strokeDasharray="96, 3"
              opacity="0.85"
            />
            <circle
              cx="50"
              cy="50"
              r="43"
              fill="none"
              stroke="#be3827"
              strokeWidth="0.8"
              opacity="0.65"
            />
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="none"
              stroke="#be3827"
              strokeWidth="1.2"
              opacity="0.8"
            />

            {/* Circular text on path */}
            <text
              fill="#be3827"
              fontSize="7.6"
              fontWeight="800"
              letterSpacing="1.8"
              fontFamily="sans-serif"
            >
              <textPath href="#stampCirclePath" startOffset="50%" textAnchor="middle">
                AVAILABLE Q3 2026 • READY TO BUILD •
              </textPath>
            </text>

            {/* Center mark */}
            <text
              x="50"
              y="48"
              textAnchor="middle"
              fill="#be3827"
              fontSize="12"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              Q3
            </text>
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fill="#be3827"
              fontSize="6"
              fontWeight="700"
              letterSpacing="1"
              fontFamily="sans-serif"
            >
              ★ 2026 ★
            </text>
          </svg>
        </motion.div>

        {/* ── BOTTOM CAPTION STRIP ─────────────────────────────────── */}
        <div className="hero-caption-strip">
          {/* Header row: Number + Pulsing status dot */}
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#8c7355] uppercase">
              No. 01 // ID
            </span>
            <div className="flex items-center gap-1.5" title="Available for projects">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8913a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8913a]" />
              </span>
              <span className="font-mono text-[9px] font-semibold text-[#8c7355] uppercase tracking-wider">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Name in handwritten Caveat font */}
          <div className="flex items-baseline justify-between mt-0.5">
            <h2
              className={`${caveat.className} text-[27px] font-bold text-[#2a1708] leading-none tracking-tight`}
            >
              {name}
            </h2>
            <span className="text-[#a08569] text-xs font-serif italic">’26</span>
          </div>

          {/* Role in site font */}
          <p className="text-[14px] text-[#6b5640] font-normal leading-tight mt-1 text-left">
            {role}
          </p>
        </div>
      </motion.div>

      {/* Mobile tap indicator pill */}
      <div className="hero-tap-hint md:hidden" aria-hidden="true">
        {isTapped ? "Tap untuk merapatkan kartu" : "Tap kartu untuk melihat detail"}
      </div>
    </motion.div>
  );
}
