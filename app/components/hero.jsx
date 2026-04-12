"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const hasPhoto = !!data?.heroImageBase64;
  const nameParts = data?.name?.split(" ") || ["Developer", "Portfolio"];
  const firstName = nameParts[0];
  const restName = nameParts.slice(1).join(" ");
  const resumeLink = data?.resumeBase64;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh",
      background: "#030d05",
      display: "flex", alignItems: "center",
      overflow: "hidden",
    }}>
      <style>{`
        .plt-hero-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 4rem; align-items: center; width: 100%; }
        .plt-hero-photo { justify-self: center; position: relative; }
        @media (max-width: 767px) {
          .plt-hero-grid { grid-template-columns: 1fr !important; }
          .plt-hero-photo { display: none !important; }
        }
        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 12px; cursor: pointer;
          padding: 16px 40px; border: none;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #030d05; font-size: 11px; font-weight: 900;
          letter-spacing: 0.3em; text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.28);
          text-decoration: none;
        }
        .hero-cta-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(16, 185, 129, 0.45);
          filter: brightness(1.08);
        }
        .hero-cta-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          background: none; border: 1px solid rgba(16, 185, 129, 0.28);
          color: #a7f3d0; font-size: 11px; font-weight: 700;
          padding: 14px 28px; border-radius: 3px;
          letter-spacing: 0.25em; text-transform: uppercase;
          transition: all 0.3s ease; text-decoration: none; cursor: pointer;
        }
        .hero-cta-secondary:hover {
          background: rgba(16, 185, 129, 0.07);
          border-color: #10b981; color: #ecfdf5;
          box-shadow: 0 0 24px rgba(16, 185, 129, 0.12);
        }
      `}</style>

      {/* Dot-grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `radial-gradient(rgba(16,185,129,0.15) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />

      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "0%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Corner accent lines */}
      <div style={{ position: "absolute", top: "80px", left: "2rem", width: "60px", height: "1px", background: "rgba(16,185,129,0.3)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "80px", left: "2rem", width: "1px", height: "60px", background: "rgba(16,185,129,0.3)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "80px", right: "2rem", width: "60px", height: "1px", background: "rgba(16,185,129,0.15)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "80px", right: "2rem", width: "1px", height: "60px", background: "rgba(16,185,129,0.15)", zIndex: 1 }} />

      <div
        className={hasPhoto ? "plt-hero-grid" : undefined}
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", zIndex: 10,
          display: hasPhoto ? undefined : "flex", flexDirection: hasPhoto ? undefined : "column" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Status badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem" }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%", background: "#10b981",
              boxShadow: "0 0 8px rgba(16,185,129,0.6)",
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px", color: "rgba(16,185,129,0.65)",
              letterSpacing: "0.18em", textTransform: "uppercase",
            }}>
              {data?.title || "Software Engineer"} — Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1 style={{ margin: "0 0 2.5rem", lineHeight: 0.86 }}>
            <span style={{
              display: "block",
              fontSize: "clamp(4.5rem, 11vw, 10rem)",
              fontWeight: 900, color: "#ecfdf5",
              letterSpacing: "-0.05em", textTransform: "uppercase",
              textShadow: "0 0 100px rgba(16,185,129,0.12)",
            }}>
              {firstName}
            </span>
            {restName && (
              <span style={{
                display: "block",
                fontSize: "clamp(4.5rem, 11vw, 10rem)",
                fontWeight: 900, color: "transparent",
                WebkitTextStroke: "1.5px rgba(16, 185, 129, 0.45)",
                letterSpacing: "-0.05em", textTransform: "uppercase",
                marginTop: "0.15rem",
              }}>
                {restName}
              </span>
            )}
          </h1>

          {/* Bio excerpt */}
          <p style={{
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            color: "rgba(236, 253, 245, 0.48)",
            maxWidth: "520px", lineHeight: 1.85, marginBottom: "3.5rem", fontWeight: 300,
            borderLeft: "2px solid rgba(16,185,129,0.35)",
            paddingLeft: "1.5rem",
          }}>
            {data?.sloganHeroSection || (data?.bio ? data.bio.slice(0, 160) + "…" : "Building elegant solutions at the intersection of design and engineering.")}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <button onClick={() => scrollTo("contact")} className="hero-cta-primary">
              Get In Touch <FaEnvelope size={11} />
            </button>
            {resumeLink && (
              <a href={resumeLink} download="Resume" target="_blank" rel="noreferrer" className="hero-cta-secondary">
                Resume <FaDownload size={11} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Profile photo */}
        {hasPhoto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="plt-hero-photo"
          >
            {/* Outer decorative rings */}
            <div style={{
              position: "absolute", inset: "-20px", borderRadius: "50%",
              border: "1px solid rgba(16,185,129,0.15)",
            }} />
            <div style={{
              position: "absolute", inset: "-40px", borderRadius: "50%",
              border: "1px dashed rgba(16,185,129,0.07)",
            }} />
            {/* Photo circle */}
            <div style={{
              width: "clamp(240px, 25vw, 360px)", height: "clamp(240px, 25vw, 360px)",
              backgroundImage: `url(${data.heroImageBase64})`,
              backgroundSize: "cover", backgroundPosition: "center top",
              borderRadius: "50%",
              border: "1.5px solid rgba(16, 185, 129, 0.3)",
              boxShadow: "0 0 40px rgba(16,185,129,0.1)",
            }} />
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
          cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        }}
        onClick={() => scrollTo("about")}
      >
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "9px", color: "rgba(16,185,129,0.35)", letterSpacing: "0.35em",
        }}>SCROLL</span>
        <FaArrowDown size={13} style={{ color: "rgba(16, 185, 129, 0.35)" }} />
      </div>
    </section>
  );
}
