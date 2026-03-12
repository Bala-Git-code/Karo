import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users } from "lucide-react";

// Standard unified scroll reveal animation
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

export function HeroSection({ onApplyClick }) {
  return (
    <section className="bg-primary relative min-h-screen flex items-center overflow-hidden !pt-28 !pb-20">
      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-16 w-[520px] h-[520px] rounded-full gradient-orb"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-40 right-0 w-[480px] h-[480px] rounded-full gradient-orb"
          style={{ background: "radial-gradient(circle, rgba(255,159,69,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left Content ── */}
          <motion.div variants={stagger} initial="initial" animate="animate" className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <div className="section-badge">
                <span className="dot"></span>
                Now Open — 2024 Cohort Applications
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-extrabold text-[#1F1F1F] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
            >
              Pitch Your Startup to{" "}
              <span className="gradient-text">India's Top Investors</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-[540px] mx-auto lg:mx-0"
              style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "rgba(31,31,31,0.65)" }}
            >
              Karo Pitch connects ambitious founders from Bharat with investors ready to back India's next breakout opportunity. From Tier-2 cities to funded startups.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={onApplyClick} className="btn-primary">
                <Rocket size={18} strokeWidth={2.5} />
                Apply to Pitch
              </button>
              <a href="#startups" className="btn-secondary">
                Explore Startups
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex items-center gap-8 mt-14 justify-center lg:justify-start flex-wrap">
              {[
                { Icon: Users, value: "5000+", label: "Founder Stories", color: "#F97316" },
                { Icon: Users, value: "100K+", label: "Community", color: "#FB923C" },
                { Icon: TrendingUp, value: "₹50Cr+", label: "Target", color: "#22c55e" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: `${stat.color}15` }}>
                    <stat.Icon size={18} style={{ color: stat.color }} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-[#1F1F1F] text-lg leading-none">{stat.value}</div>
                    <div className="text-[#1F1F1F]/50 text-xs mt-1 font-semibold tracking-wide uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Dashboard Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:block relative"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            {/* Main dashboard card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015, boxShadow: "0 32px 64px rgba(0,0,0,0.12), 0 0 0 2px rgba(249,115,22,0.1)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="card-base !p-8 !cursor-default overflow-hidden"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.06)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="font-heading font-extrabold text-[#1F1F1F] text-xl leading-tight">Live Pitch Session</div>
                  <div className="text-[#1F1F1F]/45 text-sm mt-1">March 2024 Cohort</div>
                </div>
                <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border" style={{ background: "rgba(34,197,94,0.08)", color: "#16a34a", borderColor: "rgba(34,197,94,0.15)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Now
                </span>
              </div>

              {/* Rows */}
              <div className="space-y-2">
                {[
                  { name: "GreenHarvest", tag: "AgriTech", raise: "₹2Cr", progress: 78, color: "#22c55e" },
                  { name: "Urban Threads", tag: "D2C Fashion", raise: "₹1.5Cr", progress: 55, color: "#F97316" },
                  { name: "BuildMate", tag: "Construction", raise: "₹3Cr", progress: 90, color: "#4F46E5" },
                ].map((s, i) => (
                  <motion.div key={s.name} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="flex items-center gap-4 px-4 py-3 rounded-[14px] hover:bg-[#F2EBDC]/50 transition-colors">
                    <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0" style={{ background: `linear-gradient(135deg, ${s.color}dd, ${s.color})` }}>
                      {s.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading font-bold text-[#1F1F1F] text-[15px]">{s.name}</span>
                        <span className="font-bold text-[13px] ml-2" style={{ color: s.color }}>{s.raise}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 rounded-full bg-[#E9DFC8]/40 overflow-hidden">
                          <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${s.color}bb, ${s.color})` }} initial={{ width: 0 }} animate={{ width: `${s.progress}%` }} transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: "easeOut" }} />
                        </div>
                        <span className="text-[#1F1F1F]/40 text-xs font-medium w-7 text-right">{s.progress}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="flex -space-x-2.5">
                  {["#F97316", "#FB923C", "#4F46E5", "#22c55e"].map((color, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm" style={{ background: color }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#E9DFC8] flex items-center justify-center text-[#1F1F1F]/50 text-[10px] font-bold shadow-sm">
                    +12
                  </div>
                </div>
                <span className="text-[#1F1F1F]/45 text-[13px] font-medium">16 investors watching</span>
              </div>
            </motion.div>

            {/* Floating badge — Next Pitch (top-right, outside card) */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.06, boxShadow: "0 20px 40px rgba(0,0,0,0.12), 0 0 0 2px rgba(249,115,22,0.15)" }}
              style={{
                position: "absolute",
                top: "16px",
                right: "-24px",
                background: "#FFF9F2",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "default",
                zIndex: 10,
                overflow: "hidden",
              }}
            >
              {/* Top accent strip */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #F97316, #FB923C)" }} />
              <div className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(249,115,22,0.1)" }}>
                <Rocket size={16} className="text-[#F97316]" />
              </div>
              <div>
                <div className="font-heading font-bold text-[#1F1F1F] text-[14px] leading-tight">Next Pitch</div>
                <div className="text-[#1F1F1F]/45 text-[12px] mt-0.5 font-medium">in 2 days</div>
              </div>
            </motion.div>

            {/* Floating badge — ₹2.3Cr Raised (bottom-left, outside card) */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
              whileHover={{ y: 4, scale: 1.06, boxShadow: "0 20px 40px rgba(0,0,0,0.12), 0 0 0 2px rgba(249,115,22,0.15)" }}
              style={{
                position: "absolute",
                bottom: "16px",
                left: "-24px",
                background: "#FFF9F2",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "default",
                zIndex: 10,
                overflow: "hidden",
              }}
            >
              {/* Top accent strip */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #F97316, #FB923C)" }} />
              <div className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.1)" }}>
                <TrendingUp size={16} className="text-green-500" />
              </div>
              <div>
                <div className="font-heading font-bold text-green-600 text-[14px] leading-tight">₹2.3Cr Raised</div>
                <div className="text-[#1F1F1F]/45 text-[12px] mt-0.5 font-medium">this month</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
