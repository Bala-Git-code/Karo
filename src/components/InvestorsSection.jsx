import { motion } from "framer-motion";
import { Briefcase, TrendingUp, DollarSign, Hexagon, Component, Layers, Flame, Mountain, Activity, Triangle, Sparkles, Gem, Compass } from "lucide-react";

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const investors = [
  { name: "Nexus VP", Icon: Hexagon, color: "#F97316" },
  { name: "Blume Ventures", Icon: Component, color: "#4F46E5" },
  { name: "Fireside Ventures", Icon: Flame, color: "#22c55e" },
  { name: "Sequoia India", Icon: Mountain, color: "#f59e0b" },
  { name: "Accel Partners", Icon: Activity, color: "#ef4444" },
  { name: "Matrix Partners", Icon: Layers, color: "#06b6d4" },
  { name: "3one4 Capital", Icon: Triangle, color: "#FB923C" },
  { name: "Lightspeed India", Icon: Sparkles, color: "#ec4899" },
  { name: "Elevation Capital", Icon: Gem, color: "#10b981" },
  { name: "Kalaari Capital", Icon: Compass, color: "#f97316" },
];

const allInvestors = [...investors, ...investors];

const stats = [
  { Icon: Briefcase, value: "50+", label: "Active Investors", color: "#F97316" },
  { Icon: DollarSign, value: "₹200Cr+", label: "Capital Deployed", color: "#4F46E5" },
  { Icon: TrendingUp, value: "15+", label: "Deal Closures", color: "#22c55e" },
];

export function InvestorsSection() {
  return (
    <section id="investors" className="bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full gradient-orb" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1), transparent 60%)" }} />

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
            Investor Network
          </div>
          <h2>
            Meet Investors Looking for the{" "}
            <span className="gradient-text">Next Big Startup</span>
          </h2>
          <p>Karo Pitch connects you with top VCs, angels, and family offices actively writing cheques for India's next generation of startups.</p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden mb-24 py-6 group">
          {/* Fading transparent edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#F2EBDC] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#F2EBDC] to-transparent pointer-events-none" />

          {/* Marquee Track — pauses on hover for better interaction */}
          <div className="marquee-track animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: "35s" }}>
            {allInvestors.map((inv, i) => {
              const IconComp = inv.Icon;
              return (
                <motion.div
                  key={`${inv.name}-${i}`}
                  whileHover={{ y: -8, scale: 1.08 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col items-center gap-4 mx-8 cursor-default"
                >
                  <div
                    className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-md transition-shadow hover:shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${inv.color}dd, ${inv.color})` }}
                  >
                    <IconComp size={32} color="#ffffff" strokeWidth={2} />
                  </div>
                  <span className="text-[14px] text-[#1F1F1F]/70 whitespace-nowrap font-semibold tracking-wide">{inv.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map(({ Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="text-center"
            >
              <div
                className="w-12 h-12 rounded-[12px] mx-auto mb-4 flex items-center justify-center transition-transform hover:scale-110 duration-200"
                style={{ background: `${color}15` }}
              >
                <Icon size={22} style={{ color }} strokeWidth={2.5} />
              </div>
              <div className="font-heading font-extrabold text-[#1F1F1F] text-[2rem] sm:text-[2.5rem] leading-none mb-2">{value}</div>
              <div className="text-[#1F1F1F]/50 text-[15px] font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
