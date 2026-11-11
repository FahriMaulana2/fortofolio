"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client-side validation
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setErrorMessage("Please enter your message.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <form id="f" onSubmit={handleSubmit}>
      {/* Hidden honeypot field for bot spam detection */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website-url">Do not fill this field</label>
        <input
          id="website-url"
          name="website_url"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label>
        Your name
        <input
          type="text"
          required
          placeholder="e.g. Maya Chen"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
        />
      </label>

      <label>
        Email address
        <input
          type="email"
          required
          placeholder="e.g. maya@studio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
      </label>

      <label>
        Message
        <textarea
          rows={4}
          required
          placeholder="Tell me about your idea, timeline, and goals."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "loading"}
        />
      </label>

      <button className="btn" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p
          id="ok"
          role="status"
          style={{ display: "block", color: "#ffe0b0", fontSize: "0.92rem" }}
        >
          Message sent. Thanks, I&apos;ll reply soon.
        </p>
      )}

      {status === "error" && errorMessage && (
        <p
          role="alert"
          style={{ display: "block", color: "#ffb4a2", fontSize: "0.92rem" }}
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
