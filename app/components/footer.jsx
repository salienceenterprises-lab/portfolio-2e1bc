"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub size={15} />,   href: data?.github,   label: "GitHub" },
    { icon: <FaLinkedin size={15} />, href: data?.linkedin, label: "LinkedIn" },
    { icon: <FaEnvelope size={15} />, href: data?.email ? `mailto:${data.email}` : null, label: "Email" },
    { icon: <FaGlobe size={15} />,    href: data?.website,  label: "Website" },
  ].filter((s) => s.href);

  const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#020b04",
      padding: "5rem 2rem 3rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.1)",
    }}>
      <style>{`
        .footer-nav-link {
          color: rgba(236, 253, 245, 0.35);
          text-decoration: none;
          font-size: 10px; font-weight: 800;
          letter-spacing: 0.28em; text-transform: uppercase;
          transition: all 0.3s ease; cursor: pointer; background: none; border: none;
        }
        .footer-nav-link:hover {
          color: #10b981;
          text-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
        }
        .footer-social {
          width: 40px; height: 40px; border-radius: 4px;
          border: 1px solid rgba(16, 185, 129, 0.15);
          background: rgba(16, 185, 129, 0.03);
          display: flex; align-items: center; justify-content: center;
          color: rgba(16, 185, 129, 0.55);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          text-decoration: none;
        }
        .footer-social:hover {
          border-color: #10b981; color: #030d05;
          background: #10b981;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
        }
      `}</style>

      {/* Gradient top border glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.6), rgba(52,211,153,0.4), transparent)",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: "3rem", marginBottom: "4rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{ fontFamily: "'Courier New', monospace", color: "#10b981", fontSize: "13px" }}>{"</"}</span>
              <span style={{
                fontWeight: 900, fontSize: "20px",
                letterSpacing: "-0.03em", color: "#ecfdf5", textTransform: "uppercase",
              }}>
                {data?.name?.split(" ")[0] || "PORTFOLIO"}
                <span style={{ color: "#10b981" }}>.</span>
              </span>
              <span style={{ fontFamily: "'Courier New', monospace", color: "#10b981", fontSize: "13px" }}>{">"}</span>
            </div>
            <p style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.3em", color: "rgba(16,185,129,0.45)",
              margin: 0, textTransform: "uppercase",
            }}>
              {data?.title || "Software Engineer"}
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "1.8rem" }}>
            {navLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="footer-nav-link">
                {l}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display: "flex", gap: "10px" }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.12), transparent)",
          marginBottom: "2rem",
        }} />

        {/* Bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem", opacity: 0.4,
        }}>
          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px", color: "#ecfdf5", margin: 0, letterSpacing: "0.12em",
          }}>
            © {year} {data?.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#ecfdf5", letterSpacing: "0.12em" }}>
              Built with
            </span>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px", fontWeight: 900, color: "#10b981",
              padding: "2px 8px",
              background: "rgba(16, 185, 129, 0.1)",
              borderRadius: "3px",
            }}>
              NEXT.JS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
