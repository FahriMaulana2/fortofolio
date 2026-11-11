import React from "react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>{siteConfig.footer.copyright}</span>
        <a href="#top">{siteConfig.footer.backToTopLabel}</a>
      </div>
    </footer>
  );
}
