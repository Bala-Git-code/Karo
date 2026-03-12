import { useState } from "react";
import { motion } from "framer-motion";

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const startups = [
  { name: "GreenHarvest", category: "AgriTech", catColor: "#16a34a", desc: "Connecting farmers directly to consumers — cutting middlemen and increasing farmer income by 40%.", raise: "₹2Cr", stage: "Seed", stageColor: "#F97316", founder: "Ravi Kumar", city: "Nashik" },
  { name: "Urban Threads", category: "D2C Fashion", catColor: "#be185d", desc: "Premium ethnic-meets-modern fashion brand designed for confident, millennial India.", raise: "₹1.5Cr", stage: "Pre-Seed", stageColor: "#1F1F1F", founder: "Priya Sharma", city: "Jaipur" },
  { name: "BuildMate", category: "Construction", catColor: "#b45309", desc: "B2B marketplace for construction supplies — reducing procurement time by 60% for contractors.", raise: "₹3Cr", stage: "Seed", stageColor: "#F97316", founder: "Arjun Patel", city: "Surat" },
  { name: "MediReach", category: "HealthTech", catColor: "#0369a1", desc: "Telemedicine platform serving rural India — making specialist doctors accessible in Tier-3 towns.", raise: "₹4Cr", stage: "Series A", stageColor: "#16a34a", founder: "Dr. Anjali Singh", city: "Patna" },
  { name: "KrishiAI", category: "AgriTech", catColor: "#16a34a", desc: "AI-powered crop advisory helping 250k+ farmers optimize yield with multilingual support.", raise: "₹2.5Cr", stage: "Seed", stageColor: "#F97316", founder: "Suresh Verma", city: "Indore" },
  { name: "ShopLocal", category: "SaaS / MSME", catColor: "#5b21b6", desc: "Digital commerce OS for 50M Indian kirana stores — inventory, billing, credit, and loyalty in one app.", raise: "₹5Cr", stage: "Series A", stageColor: "#16a34a", founder: "Kavya Menon", city: "Coimbatore" },
];

function StartupCard({ s, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    /* Perspective wrapper enables true 3D depth for child transforms */
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={revealVariants}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{
          y: -10,
          scale: 1.02,
          rotateX: 2,
          rotateY: -2,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        style={{
          background: "#FFF9F2",
          borderRadius: "18px",
          border: "1px solid rgba(0,0,0,0.05)",
          padding: "24px",
          position: "relative",
          overflow: "hidden",
          cursor: "default",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? "0 25px 50px rgba(0,0,0,0.18), 0 0 0 2px rgba(249,115,22,0.15)"
            : "0 12px 30px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Top accent strip — brightens on hover */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #F97316, #FB923C)",
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Header row */}
        <div className="flex items-start gap-4 mb-5 pl-2">
          <div
            className="w-12 h-12 rounded-[12px] flex items-center justify-center text-white font-heading font-bold text-[1.125rem] flex-shrink-0 shadow-sm"
            style={{ background: `linear-gradient(135deg, ${s.catColor}dd, ${s.catColor})` }}
          >
            {s.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-heading font-extrabold text-[#1F1F1F] text-[1.0625rem] tracking-tight leading-snug mb-1.5">{s.name}</div>
            <span
              className="inline-block text-[11px] font-bold px-2 py-1 rounded-md uppercase tracking-wide"
              style={{ background: `${s.catColor}15`, color: s.catColor }}
            >
              {s.category}
            </span>
          </div>
          <div className="text-right flex-shrink-0">
            {/* Funding amount — scales up slightly on hover */}
            <div
              className="font-heading font-extrabold mb-1"
              style={{
                color: "#F97316",
                fontSize: hovered ? "1.15rem" : "1.0625rem",
                transition: "font-size 0.25s ease",
              }}
            >
              {s.raise}
            </div>
            <span
              className="text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded-md bg-[#F2EBDC]/50"
              style={{ color: s.stageColor }}
            >
              {s.stage}
            </span>
          </div>
        </div>

        <p className="text-[#1F1F1F]/60 text-[0.9375rem] leading-relaxed mb-6 pl-2">{s.desc}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 pl-2" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
              style={{ background: "linear-gradient(135deg, #F97316, #FB923C)" }}
            >
              {s.founder[0]}
            </div>
            <span className="text-[#1F1F1F]/50 text-[13px] font-medium">{s.founder}</span>
          </div>
          <span className="text-[#1F1F1F]/40 text-[13px] font-medium">📍 {s.city}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedStartups() {
  return (
    <section id="startups" className="bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full gradient-orb" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08), transparent 60%)" }} />

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealVariants}
          className="section-header"
        >
          <div className="section-badge">
            <span className="dot" />
            Portfolio
          </div>
          <h2>
            Featured <span className="gradient-text">Startups</span>
          </h2>
          <p>Meet the bold founders building India's future — from paddy fields to conference rooms.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((s, i) => (
            <StartupCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
