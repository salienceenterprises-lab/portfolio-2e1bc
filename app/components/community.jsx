"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  const items = data?.community || data?.volunteering || data?.involvement;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="community" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.06)",
    }}>
      <style>{`
        .community-card {
          position: relative;
          padding: 2.8rem;
          background: rgba(16, 185, 129, 0.015);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 4px;
          transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }
        .community-card::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.12), transparent 65%);
          opacity: 0; transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .community-card:hover {
          transform: translateY(-7px);
          border-color: rgba(16, 185, 129, 0.35);
          background: rgba(16, 185, 129, 0.04);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45), 0 0 20px rgba(16, 185, 129, 0.06);
        }
        .community-card:hover::after { opacity: 1; }
        .community-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: #10b981; font-size: 11px; font-weight: 800;
          letter-spacing: 0.2em; text-decoration: none;
          text-transform: uppercase; margin-top: 1.2rem;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
        }
        .community-link:hover { gap: 13px; text-shadow: 0 0 10px rgba(16,185,129,0.5); }
      `}</style>

      {/* Ghost watermark */}
      <div style={{
        position: "absolute", top: "1rem", right: "2rem",
        fontFamily: "'Courier New', monospace",
        fontSize: "200px", fontWeight: 900, lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1px rgba(16, 185, 129, 0.04)",
        pointerEvents: "none", userSelect: "none",
      }}>06</div>

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
            }}>[ 06 ]</span>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "#ecfdf5", margin: 0,
          }}>
            Community<span style={{ color: "#10b981" }}>.</span>
          </h2>
          <p style={{
            fontFamily: "'Courier New', monospace",
            color: "rgba(16, 185, 129, 0.5)", fontSize: "11px",
            fontWeight: 600, letterSpacing: "0.35em", marginTop: "1rem",
            textTransform: "uppercase",
          }}>
            Contributions &amp; Involvement
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="community-card">
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", marginBottom: "1.4rem",
                }}>
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "10px", fontWeight: 800,
                    padding: "3px 12px", borderRadius: "3px",
                    background: "rgba(16, 185, 129, 0.08)",
                    color: "#10b981",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>
                    {item.role || item.position || item.title || item.type || "Contributor"}
                  </span>
                  {(item.duration || item.period || item.year || item.date) && (
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "11px", color: "rgba(16, 185, 129, 0.3)",
                    }}>
                      {item.duration || item.period || item.year || item.date}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: "19px", fontWeight: 700, color: "#f0fff4",
                  margin: "0 0 10px", letterSpacing: "-0.01em",
                }}>
                  {item.organization || item.name || item.title}
                </h3>

                {(item.description || item.impact) && (
                  <p style={{
                    fontSize: "14px", color: "rgba(236, 253, 245, 0.52)",
                    lineHeight: 1.75, margin: 0, fontWeight: 300,
                  }}>
                    {item.description || item.impact}
                  </p>
                )}

                {(item.link || item.url || item.website) && (
                  <a href={item.link || item.url || item.website} target="_blank" rel="noopener noreferrer" className="community-link">
                    View More <FaExternalLinkAlt style={{ fontSize: "9px" }} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
