"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryTab {
  id: string; // 'all' | 'website' | 'design'
  label: string;
  count: number;
}

interface ProjectTabsProps {
  categories: CategoryTab[];
  activeCategory: string;
}

export function ProjectTabs({ categories, activeCategory }: ProjectTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; ready: boolean }>({
    left: 0,
    width: 0,
    ready: false,
  });

  const updatePill = useCallback(() => {
    const activeIndex = categories.findIndex((c) => c.id === activeCategory);
    const activeBtn = tabRefs.current[activeIndex >= 0 ? activeIndex : 0];
    const container = containerRef.current;
    if (!activeBtn || !container) return;

    const contRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    if (btnRect.width > 0) {
      setPillStyle({
        left: btnRect.left - contRect.left,
        width: btnRect.width,
        ready: true,
      });
    }
  }, [activeCategory, categories]);

  useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    if (document.fonts?.ready) {
      document.fonts.ready.then(updatePill);
    }
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  const handleSelect = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    const query = params.toString();
    router.push(query ? `/projects?${query}` : "/projects", { scroll: false });
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let targetIndex = -1;
    if (e.key === "ArrowRight") {
      targetIndex = (index + 1) % categories.length;
    } else if (e.key === "ArrowLeft") {
      targetIndex = (index - 1 + categories.length) % categories.length;
    } else if (e.key === "Home") {
      targetIndex = 0;
    } else if (e.key === "End") {
      targetIndex = categories.length - 1;
    }

    if (targetIndex !== -1) {
      e.preventDefault();
      const nextCategory = categories[targetIndex];
      handleSelect(nextCategory.id);
      tabRefs.current[targetIndex]?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Project categories"
      className="project-tabs-list"
    >
      {/* Sliding Pill */}
      <div
        className="project-tab-pill"
        style={{
          transform: `translateX(${pillStyle.left}px)`,
          width: `${pillStyle.width}px`,
          opacity: pillStyle.ready ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {categories.map((cat, index) => {
        const isSelected = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            aria-selected={isSelected}
            aria-controls="projects-content-panel"
            id={`tab-${cat.id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => handleSelect(cat.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tab-pill ${isSelected ? "active" : ""}`}
            type="button"
          >
            <span>{cat.label}</span>
            <span className="tab-count">{cat.count}</span>
          </button>
        );
      })}
    </div>
  );
}

