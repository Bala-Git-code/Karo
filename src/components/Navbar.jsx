import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Menu, X } from "lucide-react";

export function Navbar({ onApplyClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Investors", href: "#investors" },
    { label: "Startups", href: "#startups" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-sm border-b border-[rgba(249,115,22,0.1)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "rgba(242,235,220,0.97)", backdropFilter: "blur(16px)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #F97316, #FB923C)", boxShadow: "0 0 12px rgba(249,115,22,0.35)" }}
            >
              <Rocket size={17} className="text-white" strokeWidth={2.5} />
            </motion.div>
            <div className="leading-tight">
              <div className="font-heading font-extrabold text-[#1F1F1F] text-base">
                Karo<span style={{ color: "#F97316" }}>Pitch</span>
              </div>
              <div className="text-[9px] text-[#1F1F1F]/40 tracking-[0.12em] uppercase -mt-0.5">
                by KaroStartup
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1F1F1F]/70 hover:text-brand-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full bg-brand-primary group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#investors"
              className="text-sm font-medium text-[#1F1F1F]/60 hover:text-brand-primary transition-colors"
            >
              For Investors
            </a>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onApplyClick}
              className="px-5 py-2.5 rounded-xl text-white text-sm font-bold shadow-md transition-all"
              style={{ background: "linear-gradient(135deg, #F97316, #FB923C)" }}
            >
              Apply to Pitch →
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#1F1F1F]/60 hover:bg-brand-primary/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t px-4 py-5 space-y-1"
            style={{ backgroundColor: "rgba(242,235,220,0.98)", borderColor: "rgba(249,115,22,0.12)" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-[#1F1F1F]/70 hover:text-brand-primary hover:bg-brand-primary/8 transition-all"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => { setMobileOpen(false); onApplyClick(); }}
                className="w-full py-3 rounded-xl text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #F97316, #FB923C)" }}
              >
                Apply to Pitch →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
