"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const WEB3FORMS_KEY = data?.web3forms_key ?? "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const r = await res.json();
      setStatus(r.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "rgba(16, 185, 129, 0.025)",
    border: "none",
    borderBottom: `1.5px solid ${focused === field ? "#10b981" : "rgba(16, 185, 129, 0.12)"}`,
    color: "#ecfdf5",
    fontSize: "15px",
    padding: "15px 12px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "0 4px 20px rgba(16, 185, 129, 0.08)" : "none",
    fontFamily: "inherit",
    borderRadius: "4px 4px 0 0",
    boxSizing: "border-box",
  });

  return (
    <section id="contact" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.06)",
    }}>
      <style>{`
        .contact-submit-btn {
          display: inline-flex; align-items: center; gap: 12px; cursor: pointer;
          padding: 15px 42px; border: none;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #030d05; font-size: 11px; font-weight: 900;
          letter-spacing: 0.25em; text-transform: uppercase;
          transition: all 0.4s ease;
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          box-shadow: 0 8px 28px rgba(16, 185, 129, 0.2);
        }
        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(16, 185, 129, 0.38);
          filter: brightness(1.07);
        }
        .contact-submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .social-icon-btn {
          width: 46px; height: 46px; border-radius: 4px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          background: rgba(16, 185, 129, 0.04);
          display: flex; align-items: center; justify-content: center;
          color: rgba(16,185,129,0.65); transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-icon-btn:hover {
          background: #10b981; color: #030d05;
          border-color: #10b981;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(16,185,129,0.25);
        }
        ::placeholder { color: rgba(16, 185, 129, 0.22); font-size: 14px; }
        textarea { resize: none; }
        .plt-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        @media (max-width: 767px) {
          .plt-contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%",
        width: "550px", height: "550px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="plt-contact-grid">

          {/* Left column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.2rem" }}>
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "11px", fontWeight: 700, color: "#10b981", letterSpacing: "0.2em", opacity: 0.7,
              }}>[ 07 ]</span>
              <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 900,
              color: "#ecfdf5", lineHeight: 0.9,
              margin: "0 0 2rem", letterSpacing: "-0.04em",
            }}>
              Let's<br /><span style={{ color: "#10b981" }}>Connect.</span>
            </h2>
            <p style={{
              fontSize: "17px", color: "rgba(236, 253, 245, 0.55)",
              lineHeight: 1.8, maxWidth: "420px", fontWeight: 300,
            }}>
              Have a project in mind or want to discuss opportunities? My inbox is always open — I typically respond within 24 hours.
            </p>

            {data?.email && (
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "2.5rem" }}>
                <FaEnvelope style={{ color: "#10b981" }} />
                <a href={`mailto:${data.email}`} style={{ color: "#a7f3d0", textDecoration: "none", fontSize: "15px" }}>
                  {data.email}
                </a>
              </div>
            )}

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px", marginTop: "2.5rem" }}>
              {data?.github && (
                <a href={data.github} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <FaGithub size={20} />
                </a>
              )}
              {data?.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <FaLinkedin size={20} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Form card — only shown when web3forms key is configured */}
          {WEB3FORMS_KEY && <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              padding: "3.5rem",
              borderRadius: "4px",
              border: "1px solid rgba(16, 185, 129, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{
                  width: "72px", height: "72px",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: "4px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 2rem",
                }}>
                  <FaCheck style={{ color: "#10b981", fontSize: "1.8rem" }} />
                </div>
                <h3 style={{ color: "#ecfdf5", fontSize: "22px", fontWeight: 700, marginBottom: "1rem" }}>
                  Message Sent!
                </h3>
                <p style={{
                  fontFamily: "'Courier New', monospace",
                  color: "rgba(16, 185, 129, 0.6)", fontSize: "13px",
                }}>
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <input
                    type="text" placeholder="Your Name" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <input
                    type="email" placeholder="Email Address" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
                <div>
                  <textarea
                    rows={5} placeholder="Your Message" required
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={inputStyle("message")}
                  />
                </div>
                <button type="submit" disabled={status === "sending"} className="contact-submit-btn">
                  {status === "sending" ? "Sending…" : <>Send Message <FaPaperPlane size={11} /></>}
                </button>
                {status === "error" && (
                  <p style={{
                    fontFamily: "'Courier New', monospace",
                    color: "#ef4444", fontSize: "12px", textAlign: "center",
                  }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>}
        </div>
      </div>
    </section>
  );
}
