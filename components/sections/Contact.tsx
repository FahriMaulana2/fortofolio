import React from "react";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="cta-grid">
        <div>
          <h2>{siteConfig.contact.heading}</h2>
          <p>{siteConfig.contact.lead}</p>
          <ul className="info">
            {siteConfig.contact.items.map((item) => (
              <li key={item.label}>
                <small>{item.label}</small>
                {item.isLink && item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="links">
            {siteConfig.contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
