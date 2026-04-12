"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  const items = data?.projects;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="projects" style={{
      background: "#030d05",
      padding: "8rem 2rem",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(16, 185, 129, 0.06)",
    }}>
      <style>{`
        .proj-card {
          position: relative;
          padding: 2.8rem;
          background: #030d05;
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 4px;
          display: flex; flex-direction: column; height: 100%;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
          cursor: default;
        }
        .proj-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(180deg, #10b981, #34d399, transparent);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.45s ease;
        }
        .proj-card:hover {
          background: rgba(16, 185, 129, 0.025);
          border-color: rgba(16, 185, 129, 0.28);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(16,185,129,0.05);
        }
        .proj-card:hover::before { transform: scaleY(1); }
        .proj-link {
          color: rgba(167, 243, 208, 0.28);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
        }
        .proj-link:hover {
          color: #10b981;
          filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.5));
          transform: scale(1.15);
        }
        .proj-tech-tag {
          font-family: 'Courier New', monospace;
          font-size: 10px; font-weight: 700;
          padding: 3px 11px; border-radius: 3px;
          border: 1px solid rgba(16, 185, 129, 0.1);
          color: rgba(16, 185, 129, 0.55);
          background: rgba(16, 185, 129, 0.04);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .proj-card:hover .proj-tech-tag {
          border-color: rgba(16, 185, 129, 0.28);
          color: #a7f3d0;
          background: rgba(16, 185, 129, 0.08);
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
      }}>04</div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.2rem" }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px", fontWeight: 700, color: "#10b981", letterSpacing: "0.2em", opacity: 0.7,
            }}>[ 04 ]</span>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "#ecfdf5", margin: 0,
          }}>
            Projects<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}>
          {items.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              style={{ height: "100%" }}
            >
              {(() => {
                const githubUrl = proj.github || proj.githubUrl || proj.repo || "";
                const liveUrl   = proj.demo || proj.live || proj.url || proj.link || proj.liveUrl || "";
                const image     = proj.imageBase64 || proj.image || "";
                const stack     = Array.isArray(proj.stack)        ? proj.stack
                                : Array.isArray(proj.tags)          ? proj.tags
                                : Array.isArray(proj.technologies)  ? proj.technologies
                                : Array.isArray(proj.tech)          ? proj.tech : [];
                return (
                  <div className="proj-card">
                    {/* Header row */}
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", marginBottom: "1.8rem",
                    }}>
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "11px", fontWeight: 700,
                        color: "rgba(16, 185, 129, 0.28)",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div style={{ display: "flex", gap: "14px" }}>
                        {githubUrl && (
                          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
                            <FaGithub size={17} />
                          </a>
                        )}
                        {liveUrl && (
                          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
                            <FaExternalLinkAlt size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project image */}
                    {image && (
                      <div style={{
                        width: "100%", height: "180px", marginBottom: "1.5rem",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover", backgroundPosition: "center",
                        borderRadius: "3px",
                        border: "1px solid rgba(16,185,129,0.1)",
                      }} />
                    )}

                    <h3 style={{
                      fontSize: "20px", fontWeight: 700, color: "#f0fff4",
                      margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.15,
                    }}>
                      {proj.title || proj.name || "Untitled Project"}
                    </h3>

                    <p style={{
                      fontSize: "14px", color: "rgba(236, 253, 245, 0.48)",
                      lineHeight: 1.8, margin: 0, flex: 1, fontWeight: 300,
                    }}>
                      {proj.description}
                    </p>

                    {stack.length > 0 && (
                      <div style={{
                        display: "flex", flexWrap: "wrap", gap: "7px",
                        marginTop: "1.8rem", paddingTop: "1.4rem",
                        borderTop: "1px solid rgba(16, 185, 129, 0.07)",
                      }}>
                        {stack.filter(Boolean).map((t, j) => (
                          <span key={j} className="proj-tech-tag">
                            {typeof t === "string" ? t : t?.name || String(t)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
