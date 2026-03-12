import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Factory, Code2, Cpu, Leaf } from "lucide-react";

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const categories = [
  { Icon: ShoppingBag, label: "D2C Brands", desc: "Consumer brands selling direct to customers, building loyal communities.", color: "#F97316" },
  { Icon: Smartphone, label: "Consumer Tech", desc: "Apps, platforms, and products built for the modern Indian consumer.", color: "#4F46E5" },
  { Icon: Factory, label: "MSMEs", desc: "Small and medium enterprises ready to scale with the right capital.", color: "#f59e0b" },
  { Icon: Code2, label: "SaaS Startups", desc: "B2B software businesses solving real enterprise and SMB pain points.", color: "#06b6d4" },
  { Icon: Cpu, label: "Manufacturing", desc: "Modern manufacturers building for domestic and global markets.", color: "#64748b" },
  { Icon: Leaf, label: "Bharat Startups", desc: "Founders solving education, agri, health, and jobs in Tier-2/3 India.", color: "#22c55e" },
];

function CategoryCard({ Icon, label, desc, color, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={revealVariants}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
        style={{
          background: "#FFF9F2",
          borderRadius: "18px",
          border: "1px solid rgba(0,0,0,0.05)",
          padding: "24px",
          position: "relative",
          overflow: "hidden",
          cursor: "default",
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.15), 0 0 0 2px rgba(249,115,22,0.12)"
            : "0 12px 30px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.25s ease",
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
            background: `linear-gradient(90deg, ${color}, #FB923C)`,
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.25s ease",
          }}
        />

        {/* Icon container — brightens on hover */}
        <div
          className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-6"
          style={{
            background: hovered ? `${color}28` : `${color}15`,
            transition: "background 0.25s ease",
          }}
        >
          <Icon size={24} style={{ color }} strokeWidth={2.5} />
        </div>

        <h3 className="font-heading font-extrabold text-[#1F1F1F] text-[1.125rem] mb-2.5">{label}</h3>
        <p className="text-[#1F1F1F]/60 text-[0.9375rem] leading-relaxed">{desc}</p>
      </motion.div>
    </motion.div>
  );
}

export function WhoCanApply() {
  return (
    <section id="apply" className="bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full gradient-orb" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1), transparent 60%)" }} />

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
            Eligibility
          </div>
          <h2>
            Who Can <span className="gradient-text">Apply?</span>
          </h2>
          <p>Karo Pitch is open to founders across all stages and sectors — if you're building something real, we want to hear from you.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ Icon, label, desc, color }, i) => (
            <CategoryCard key={label} Icon={Icon} label={label} desc={desc} color={color} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-medium mt-14 text-[#1F1F1F]/50 text-[15px]"
        >
          Don't see your category?{" "}
          <span className="text-[#F97316] cursor-pointer hover:underline transition-all">Apply anyway →</span>
        </motion.p>
      </div>
    </section>
  );
}
