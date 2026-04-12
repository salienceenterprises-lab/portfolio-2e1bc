"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  const items = data?.experience;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="experience" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.06)",
    }}>
      <style>{`
        .exp-card {
          position: relative;
          padding: 3rem;
          background: rgba(16, 185, 129, 0.015);
          border: 1px solid rgba(16, 185, 129, 0.09);
          border-radius: 4px;
          transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }
        .exp-card::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #10b981, #34d399, transparent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s ease;
        }
        .exp-card:hover { border-color: rgba(16, 185, 129, 0.25); background: rgba(16, 185, 129, 0.04); transform: scale(1.005); box-shadow: 0 24px 60px rgba(0,0,0,0.4); }
        .exp-card:hover::after { transform: scaleX(1); }
        .exp-num {
          position: absolute; top: -16px; right: 16px;
          font-size: 9rem; font-weight: 900; line-height: 1;
          color: rgba(16, 185, 129, 0.03);
          pointer-events: none;
          font-family: 'Courier New', monospace;
          transition: 0.4s ease;
        }
        .exp-card:hover .exp-num { color: rgba(16, 185, 129, 0.07); transform: translateY(12px); }
        .tech-tag {
          font-family: 'Courier New', monospace;
          font-size: 10px; font-weight: 700;
          padding: 3px 11px; border-radius: 3px;
          background: rgba(16, 185, 129, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.12);
          color: rgba(16, 185, 129, 0.6);
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }
        .exp-card:hover .tech-tag { border-color: rgba(16, 185, 129, 0.3); color: #a7f3d0; }
        .resp-item { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: rgba(236, 253, 245, 0.65); line-height: 1.7; }
      `}</style>

      {/* Ghost watermark */}
      <div style={{
        position: "absolute", top: "1rem", right: "2rem",
        fontFamily: "'Courier New', monospace",
        fontSize: "200px", fontWeight: 900, lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1px rgba(16, 185, 129, 0.04)",
        pointerEvents: "none", userSelect: "none",
      }}>03</div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.2rem" }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px", fontWeight: 700, color: "#10b981", letterSpacing: "0.2em", opacity: 0.7,
            }}>[ 03 ]</span>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 900,
            color: "#ecfdf5", margin: 0, letterSpacing: "-0.04em",
          }}>
            Experience<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="exp-card">
                <div className="exp-num">{String(i + 1).padStart(2, "0")}</div>

                {/* Card header */}
                <div style={{
                  display: "flex", flexWrap: "wrap",
                  justifyContent: "space-between", alignItems: "flex-start",
                  gap: "1.5rem", marginBottom: "1.8rem",
                }}>
                  <div>
                    <h3 style={{
                      fontSize: "22px", fontWeight: 800, color: "#f0fff4",
                      marginBottom: "8px", letterSpacing: "-0.02em",
                    }}>
                      {exp.role || exp.title || exp.position}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "6px",
                        background: "rgba(16, 185, 129, 0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <FaBriefcase style={{ color: "#10b981", fontSize: "11px" }} />
                      </div>
                      <span style={{ fontSize: "15px", fontWeight: 600, color: "rgba(16, 185, 129, 0.75)" }}>
                        {exp.company || exp.employer || exp.organization}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px", flexShrink: 0 }}>
                    <div style={{
                      padding: "6px 18px", borderRadius: "3px",
                      background: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                      color: "#10b981",
                      fontFamily: "'Courier New', monospace",
                      fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                    }}>
                      {exp.period || exp.duration || exp.years || exp.startDate}
                    </div>
                    {exp.location && (
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "rgba(236,253,245,0.3)" }}>
                        <FaMapMarkerAlt style={{ fontSize: "9px", color: "rgba(16,185,129,0.4)" }} /> {exp.location}
                      </div>
                    )}
                  </div>
                </div>

                {exp.description && (
                  <p style={{
                    fontSize: "15px", color: "rgba(236, 253, 245, 0.5)",
                    lineHeight: 1.8, marginBottom: "1.8rem", maxWidth: "820px", fontWeight: 300,
                  }}>
                    {exp.description}
                  </p>
                )}

                {(() => {
                  const bullets = Array.isArray(exp.highlights)      ? exp.highlights
                                : Array.isArray(exp.responsibilities) ? exp.responsibilities
                                : Array.isArray(exp.bullets)          ? exp.bullets : null;
                  return bullets && bullets.filter(Boolean).length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2rem" }}>
                      {bullets.filter(Boolean).map((item, j) => (
                        <div key={j} className="resp-item">
                          <FaChevronRight style={{ color: "#10b981", fontSize: "9px", marginTop: "6px", flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  );
                })()}

                {(() => {
                  const stack = Array.isArray(exp.stack)       ? exp.stack
                              : Array.isArray(exp.tags)         ? exp.tags
                              : Array.isArray(exp.technologies) ? exp.technologies
                              : Array.isArray(exp.tech)         ? exp.tech : [];
                  return stack.length > 0 && (
                    <div style={{
                      display: "flex", flexWrap: "wrap", gap: "8px",
                      paddingTop: "1.8rem",
                      borderTop: "1px solid rgba(16, 185, 129, 0.08)",
                    }}>
                      {stack.filter(Boolean).map((t, j) => (
                        <span key={j} className="tech-tag">
                          {typeof t === "string" ? t : t?.name || String(t)}
                        </span>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
