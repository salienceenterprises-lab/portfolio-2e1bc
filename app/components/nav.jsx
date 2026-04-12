"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!data) return null;

  const resumeSource = data.resumeBase64 || data.resume || data.resumeUrl;

  const allNavLinks = [
    { label: "About",      href: "#about",      key: "about" },
    { label: "Education",  href: "#education",  key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects",   href: "#projects",   key: "projects" },
    { label: "Skills",     href: "#skills",     key: "skills" },
    { label: "Community",  href: "#community",  key: "community" },
    { label: "Contact",    href: "#contact",    key: "email" },
  ];

  const activeLinks = allNavLinks.filter((link) => {
    if (link.label === "About") return true;
    const d = data?.[link.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sectionIds = activeLinks.map((l) => l.href.replace("#", ""));
      const sorted = sectionIds
        .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Infinity }))
        .filter((s) => s.top !== Infinity)
        .sort((a, b) => a.top - b.top);
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].top - 130) {
          setActiveSection(sorted[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLinks]);

  const go = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <>
    <style>{`
      .plt-nav-desktop { display: flex; align-items: center; gap: 4px; }
      .plt-nav-mobile-btn { display: none; background: none; border: none; color: #10b981; cursor: pointer; padding: 8px; }
      @media (max-width: 767px) {
        .plt-nav-desktop { display: none !important; }
        .plt-nav-mobile-btn { display: block !important; }
      }
    `}</style>
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        background: scrolled ? "rgba(3, 13, 5, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(16, 185, 129, 0.12)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "0 2rem",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#hero" onClick={(e) => go(e, "#hero")} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "13px", fontWeight: 700,
            color: "#10b981", letterSpacing: "0.05em",
          }}>{"</"}</span>
          <span style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "0.3em", color: "#ecfdf5", textTransform: "uppercase" }}>
            {data.name?.split(" ")[0] || "PORTFOLIO"}
          </span>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "13px", fontWeight: 700,
            color: "#10b981", letterSpacing: "0.05em",
          }}>{">"}</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="plt-nav-desktop">
          {activeLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                style={{
                  position: "relative", padding: "10px 14px", textDecoration: "none",
                  fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: isActive ? "#10b981" : "rgba(236, 253, 245, 0.35)",
                  transition: "color 0.3s ease",
                }}>
                {link.label}
                {isActive && (
                  <motion.div layoutId="nav-indicator"
                    style={{
                      position: "absolute", bottom: "2px", left: "14px", right: "14px", height: "1.5px",
                      background: "#10b981",
                      boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)",
                      borderRadius: "10px",
                    }} />
                )}
              </a>
            );
          })}

          {resumeSource && (
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
              download="Resume.pdf"
              style={{
                marginLeft: "16px", display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "9px 22px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: "3px",
                color: "#10b981", fontSize: "10px", fontWeight: 800,
                letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
                transition: "all 0.3s ease",
              }}>
              <FaDownload size={9} /> Resume
            </motion.a>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="plt-nav-mobile-btn"
          style={{ background: "none", border: "none", color: "#10b981", cursor: "pointer", padding: "8px" }}>
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(3, 13, 5, 0.97)",
              padding: "1.5rem 2rem 2rem",
              borderBottom: "1px solid rgba(16, 185, 129, 0.1)",
              display: "flex", flexDirection: "column", gap: "1.2rem",
              overflow: "hidden",
            }}>
            {activeLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                style={{
                  textDecoration: "none", fontSize: "11px", fontWeight: 800,
                  letterSpacing: "0.3em", textTransform: "uppercase",
                  color: activeSection === link.href.replace("#", "") ? "#10b981" : "rgba(236,253,245,0.5)",
                }}>
                {link.label}
              </a>
            ))}
            {resumeSource && (
              <a
                href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
                download
                style={{ color: "#10b981", fontWeight: 900, textDecoration: "none", fontSize: "11px", display: "flex", alignItems: "center", gap: "8px", marginTop: "0.5rem" }}>
                <FaDownload size={10} /> Download Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}
