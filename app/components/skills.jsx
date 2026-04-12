"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSkills({ data }) {
  const skills = data?.skills;
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  // Normalize: category objects ({ category, items/skills }) OR flat strings
  const groups = (() => {
    if (
      typeof skills[0] === "object" && skills[0] !== null &&
      (skills[0].items || skills[0].category || skills[0].skills || skills[0].name)
    ) {
      return skills
        .map((g) => ({
          category: g.category || g.name || "Skills",
          items: Array.isArray(g.items) ? g.items : Array.isArray(g.skills) ? g.skills : [],
        }))
        .filter((g) => g.items.length > 0);
    }
    return null; // flat array
  })();
  const hasCategories = groups && groups.length > 0;

  return (
    <section id="skills" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.06)",
    }}>
      <style>{`
        .skill-pill {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 9px 20px;
          border: 1px solid rgba(16, 185, 129, 0.14);
          color: rgba(236, 253, 245, 0.48);
          font-family: 'Courier New', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          background: rgba(16, 185, 129, 0.02);
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: default; border-radius: 3px;
          text-transform: uppercase;
        }
        .skill-pill::before {
          content: '';
          width: 5px; height: 5px;
          background: rgba(16, 185, 129, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .skill-pill:hover {
          border-color: #10b981;
          color: #ecfdf5;
          background: rgba(16, 185, 129, 0.09);
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.3), 0 0 12px rgba(16, 185, 129, 0.15);
        }
        .skill-pill:hover::before {
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          transform: scale(1.4);
        }
        .skill-cat-row {
          padding: 2.5rem 0;
          border-bottom: 1px solid rgba(16, 185, 129, 0.07);
        }
        .skill-cat-row:last-child { border-bottom: none; }
        .plt-skills-row { display: grid; grid-template-columns: 200px 1fr; gap: 2rem; align-items: start; }
        @media (max-width: 767px) {
          .plt-skills-row { grid-template-columns: 1fr !important; }
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
      }}>05</div>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "5%",
        width: "450px", height: "450px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.2rem" }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px", fontWeight: 700, color: "#10b981", letterSpacing: "0.2em", opacity: 0.7,
            }}>[ 05 ]</span>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "#ecfdf5", margin: 0,
          }}>
            Skills<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </motion.div>

        {hasCategories ? (
          <div>
            {groups.map((group, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="skill-cat-row"
              >
                <div className="plt-skills-row">
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "11px", fontWeight: 800,
                      letterSpacing: "0.25em", color: "#10b981", textTransform: "uppercase",
                    }}>{group.category}</span>
                    <div style={{ width: "24px", height: "1.5px", background: "rgba(16,185,129,0.25)", marginTop: "10px" }} />
                    <div style={{ fontSize: "10px", color: "rgba(16,185,129,0.3)", marginTop: "6px", fontFamily: "'Courier New', monospace" }}>
                      {group.items.length} skill{group.items.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {group.items.filter(Boolean).map((skill, i) => (
                      <span key={i} className="skill-pill">
                        {typeof skill === "string" ? skill : skill?.name || String(skill)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {skills.filter(Boolean).map((skill, i) => (
                <span key={i} className="skill-pill">
                  {typeof skill === "string" ? skill : skill?.name || String(skill)}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
