"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  const items = data?.education;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="education" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.06)",
    }}>
      <style>{`
        .edu-card {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 3rem;
          padding: 3rem 0;
          border-bottom: 1px solid rgba(16, 185, 129, 0.07);
          position: relative;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .edu-card:last-child { border-bottom: none; }
        .edu-card::before {
          content: '';
          position: absolute; left: -24px; top: 0;
          width: 2px; height: 0;
          background: linear-gradient(180deg, #10b981, transparent);
          transition: height 0.5s ease;
          border-radius: 2px;
        }
        .edu-card:hover::before { height: 100%; }
        .edu-card:hover { transform: translateX(12px); }
        @media(max-width:768px) {
          .edu-card { grid-template-columns: 1fr; gap: 1rem; }
          .edu-card:hover { transform: translateY(-4px); }
        }
      `}</style>

      {/* Ghost watermark */}
      <div style={{
        position: "absolute", top: "1rem", right: "2rem",
        fontFamily: "'Courier New', monospace",
        fontSize: "200px", fontWeight: 900, lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1px rgba(16, 185, 129, 0.04)",
        pointerEvents: "none", userSelect: "none",
      }}>02</div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.2rem" }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px", fontWeight: 700, color: "#10b981",
              letterSpacing: "0.2em", opacity: 0.7,
            }}>[ 02 ]</span>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "#ecfdf5", margin: 0,
          }}>
            Education<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </motion.div>

        <div>
          {items.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="edu-card">
                {/* Period */}
                <div>
                  <div style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    borderRadius: "3px",
                    color: "#10b981",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                  }}>
                    {edu.period || edu.year || edu.graduationYear || edu.years || "PRESENT"}
                  </div>
                  {edu.location && (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px", color: "rgba(236,253,245,0.35)", fontSize: "12px" }}>
                      <FaMapMarkerAlt style={{ color: "rgba(16,185,129,0.4)", fontSize: "10px" }} /> {edu.location}
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.6)" }} />
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "9px", fontWeight: 700,
                      color: "rgba(16, 185, 129, 0.4)", textTransform: "uppercase", letterSpacing: "0.12em",
                    }}>Completed</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <FaGraduationCap style={{ color: "#10b981", fontSize: "1.2rem", flexShrink: 0 }} />
                    <h3 style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 700, color: "#f0fff4", margin: 0,
                      letterSpacing: "-0.02em",
                    }}>
                      {edu.degree || edu.field || edu.qualification || edu.program}
                    </h3>
                  </div>

                  <p style={{
                    fontSize: "14px", fontWeight: 600,
                    color: "rgba(16, 185, 129, 0.75)",
                    marginBottom: "12px", letterSpacing: "0.02em",
                  }}>
                    {edu.institution || edu.school || edu.university}
                  </p>

                  {edu.description && (
                    <p style={{
                      fontSize: "14px", color: "rgba(236, 253, 245, 0.48)",
                      lineHeight: 1.75, margin: "0 0 1rem", fontWeight: 300,
                    }}>
                      {edu.description}
                    </p>
                  )}

                  {(edu.gpa || edu.grade || edu.result) && (
                    <div style={{
                      marginTop: "0.5rem", marginBottom: "1rem", display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "5px 14px", borderRadius: "3px",
                      background: "rgba(16, 185, 129, 0.07)",
                      border: "1px solid rgba(16, 185, 129, 0.15)",
                    }}>
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "11px", color: "#a7f3d0", fontWeight: 700,
                      }}>GPA / Grade: {edu.gpa || edu.grade || edu.result}</span>
                    </div>
                  )}

                  {Array.isArray(edu.achievements) && edu.achievements.filter(Boolean).length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "0.5rem" }}>
                      {edu.achievements.filter(Boolean).map((a, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(236,253,245,0.5)", lineHeight: 1.7, fontWeight: 300 }}>
                          <FaGraduationCap style={{ color: "rgba(16,185,129,0.5)", fontSize: "9px", marginTop: "5px", flexShrink: 0 }} />
                          {a}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
