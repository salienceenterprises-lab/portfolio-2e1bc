"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  if (!data) return null;

  const infoRows = [
    { label: "Location", value: data.location, icon: <FaMapMarkerAlt />, link: null },
    { label: "Email", value: data.email, icon: <FaEnvelope />, link: `mailto:${data.email}` },
    { label: "GitHub", value: data.github ? "@" + data.github.split("/").pop() : null, icon: <FaGithub />, link: data.github },
    { label: "LinkedIn", value: data.linkedin ? "LinkedIn" : null, icon: <FaLinkedin />, link: data.linkedin },
    { label: "Website", value: data.website, icon: <FaGlobe />, link: data.website },
  ].filter((r) => r.value);

  return (
    <section id="about" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .about-info-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 10px;
          border-bottom: 1px solid rgba(16, 185, 129, 0.07);
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .about-info-row:last-child { border-bottom: none; }
        .about-info-row:hover {
          background: rgba(16, 185, 129, 0.04);
          padding-left: 18px;
          border-bottom-color: rgba(16, 185, 129, 0.2);
        }
        .skill-chip {
          display: inline-block;
          padding: 5px 14px;
          font-size: 11px; font-weight: 600;
          border-radius: 3px;
          border: 1px solid rgba(16, 185, 129, 0.18);
          color: rgba(167, 243, 208, 0.75);
          background: rgba(16, 185, 129, 0.05);
          transition: all 0.3s ease;
          cursor: default;
          letter-spacing: 0.05em;
          font-family: 'Courier New', monospace;
        }
        .skill-chip:hover {
          background: rgba(16, 185, 129, 0.12);
          border-color: #10b981;
          color: #ecfdf5;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(16,185,129,0.15);
        }
        .plt-about-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 5rem; }
        @media (max-width: 767px) {
          .plt-about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>

      {/* Grid background subtle */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(16,185,129,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "5%", right: "8%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.2rem" }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px", fontWeight: 700, color: "#10b981",
              letterSpacing: "0.2em", opacity: 0.7,
            }}>[ 01 ]</span>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 900, color: "#ecfdf5",
            margin: 0, lineHeight: 0.9, letterSpacing: "-0.04em",
          }}>
            About<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </motion.div>

        <div className="plt-about-grid">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", lineHeight: 1.8,
              color: "rgba(236, 253, 245, 0.72)", fontWeight: 300,
              marginBottom: "4rem",
            }}>
              {data.bio}
            </p>

            {data.skills?.length > 0 && (() => {
              const flatSkills = data.skills.flatMap((s) =>
                typeof s === "object" && s !== null && (s.items || s.skills)
                  ? (s.items || s.skills)
                  : [s]
              ).filter(Boolean).slice(0, 12);
              return flatSkills.length > 0 && (
                <div>
                  <h4 style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "10px", fontWeight: 800, color: "rgba(16,185,129,0.6)",
                    letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1.5rem",
                  }}>
                    // Core Technologies
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {flatSkills.map((skill, i) => (
                      <motion.span key={i} className="skill-chip" whileHover={{ scale: 1.04 }}>
                        {typeof skill === "string" ? skill : skill?.name || String(skill)}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.015)",
              padding: "2.5rem",
              borderRadius: "4px",
              border: "1px solid rgba(16, 185, 129, 0.12)",
              backdropFilter: "blur(8px)",
              height: "fit-content",
            }}
          >
            <h4 style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px", fontWeight: 700,
              color: "rgba(16,185,129,0.55)", letterSpacing: "0.3em",
              textTransform: "uppercase", marginBottom: "2rem",
            }}>
              // Connect
            </h4>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {infoRows.map((row, i) => (
                <div key={i} className="about-info-row">
                  <div style={{ color: "#10b981", fontSize: "1rem", flexShrink: 0 }}>{row.icon}</div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "9px", fontWeight: 700,
                      color: "rgba(16, 185, 129, 0.45)", textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}>{row.label}</span>
                    {row.link ? (
                      <a href={row.link} target="_blank" rel="noopener noreferrer"
                        style={{ color: "#ecfdf5", textDecoration: "none", fontSize: "13px", fontWeight: 500 }}>
                        {row.value}
                      </a>
                    ) : (
                      <span style={{ color: "#ecfdf5", fontSize: "13px", fontWeight: 500 }}>{row.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
