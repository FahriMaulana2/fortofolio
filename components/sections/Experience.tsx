"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { educationData } from "@/data/education";
import { journeyData } from "@/data/journey";
import { SectionHead } from "@/components/ui/SectionHead";

type TabId = "education" | "journey";

export function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("education");
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const tabListRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLButtonElement>(null);
  const jouRef = useRef<HTMLButtonElement>(null);

  const tabs: { id: TabId; label: string; ref: React.RefObject<HTMLButtonElement | null> }[] = [
    { id: "education", label: "Education", ref: eduRef },
    { id: "journey", label: "Journey", ref: jouRef },
  ];

  const movePill = useCallback(() => {
    const activeRef = activeTab === "education" ? eduRef : jouRef;
    const btn = activeRef.current;
    const container = tabListRef.current;
    if (!btn || !container) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setPillStyle({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  }, [activeTab]);

  useEffect(() => { movePill(); }, [movePill]);

  useEffect(() => {
    const ro = new ResizeObserver(movePill);
    if (tabListRef.current) ro.observe(tabListRef.current);
    return () => ro.disconnect();
  }, [movePill]);

  const handleKeyDown = (e: React.KeyboardEvent, currentTab: TabId) => {
    const allIds: TabId[] = ["education", "journey"];
    const currentIndex = allIds.indexOf(currentTab);
    let nextIndex = -1;
    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % allIds.length;
    else if (e.key === "ArrowLeft") nextIndex = (currentIndex - 1 + allIds.length) % allIds.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = allIds.length - 1;
    if (nextIndex !== -1) {
      e.preventDefault();
      const nextId = allIds[nextIndex];
      setActiveTab(nextId);
      const nextRef = nextId === "education" ? eduRef : jouRef;
      nextRef.current?.focus();
    }
  };

  return (
    <section className="s band" id="experience">
      <div className="wrap">
        <SectionHead
          title="Experience & education"
          description="Where I studied and how my skills have grown."
        />

        {/* Tab switcher */}
        <div className="exp-tabs-wrap">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Experience tabs"
            className="exp-tablist"
          >
            {/* Sliding pill */}
            <div
              className="exp-tab-pill"
              aria-hidden="true"
              style={{
                transform: `translateX(${pillStyle.left}px)`,
                width: `${pillStyle.width}px`,
              }}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={tab.ref}
                role="tab"
                id={`exp-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`exp-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`exp-tab-btn${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels – stable height container */}
        <div className="exp-panels">
          {/* Education panel */}
          <div
            id="exp-panel-education"
            role="tabpanel"
            aria-labelledby="exp-tab-education"
            className={`exp-panel${activeTab === "education" ? " active" : ""}`}
            tabIndex={0}
          >
            <div className="education-timeline">
              {educationData.items.map((item) => {
                const isInProgress = item.status === "in-progress";
                return (
                  <div key={item.id} className={`education-row${isInProgress ? " in-progress" : ""}`}>
                    <div className="education-period">
                      <span>{item.period}</span>
                      {isInProgress && (
                        <span className="education-status-tag">In progress</span>
                      )}
                    </div>
                    <div className="education-node" aria-hidden="true" />
                    <div className={`education-card${isInProgress ? " now" : ""}`}>
                      <div className="education-card-header">
                        <h3>{item.institution}</h3>
                        <span className="education-level">{item.level}</span>
                      </div>
                      <p className="education-program">{item.program}</p>
                      {item.description && (
                        <p className="education-desc">{item.description}</p>
                      )}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="tags" style={{ marginTop: "16px", marginBottom: 0 }}>
                          {item.highlights.slice(0, 3).map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                      {item.certificateUrl && (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn ghost"
                          style={{ marginTop: "16px", fontSize: "0.8rem", padding: "6px 14px", gap: "6px" }}
                          aria-label={`View ${item.institution} ${item.program} certificate (opens in new tab)`}
                        >
                          View certificate
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M2.5 1.5H10.5V9.5M10.5 1.5L1.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Journey panel */}
          <div
            id="exp-panel-journey"
            role="tabpanel"
            aria-labelledby="exp-tab-journey"
            className={`exp-panel${activeTab === "journey" ? " active" : ""}`}
            tabIndex={0}
          >
            <div className="time">
              {journeyData.items.map((item) => (
                <div key={item.year} className={item.isNow ? "now" : undefined}>
                  <small>{item.year}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
