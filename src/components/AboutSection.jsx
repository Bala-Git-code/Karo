import { motion } from "framer-motion";
import { Target, Globe2, Handshake, CheckCircle } from "lucide-react";

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const pillars = [
  { Icon: Target, title: "Curated Opportunities", desc: "Every pitch is carefully matched to the right investor appetite and stage — no cold outreach.", color: "#F97316", bg: "rgba(249,115,22,0.08)" },
  { Icon: Globe2, title: "Bharat-First", desc: "We champion founders from Tier-2 and Tier-3 cities solving real India problems that deserve capital.", color: "#4F46E5", bg: "rgba(79,70,229,0.08)" },
  { Icon: Handshake, title: "Trusted Network", desc: "Backed by KaroStartup's 5-year community of 100K+ founders, mentors, and ecosystem builders.", color: "#22c55e", bg: "rgba(34,197,94,0.08)" },
];

const missionPoints = [
  "Founders across Bharat lack investor access",
  "Many promising businesses go unnoticed",
  "Karo Pitch connects founders with investors",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full gradient-orb" style={{ background: "radial-gradient(circle at 20% 30%, rgba(249,115,22,0.1), transparent 60%)" }} />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left Content ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <div className="section-badge">
              <span className="dot"></span>
              Our Mission
            </div>
            
            <h2 className="font-heading font-extrabold text-[#1F1F1F] mb-6" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", lineHeight: 1.15 }}>
              Bridging the Gap Between{" "}
              <span className="gradient-text">Founders & Funding</span>
            </h2>
            
            <p className="mb-8" style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "rgba(31,31,31,0.65)" }}>
              Many founders across Tier-2 and Tier-3 cities in India are building incredibly strong businesses — but they lack access to the right funding opportunities. Karo Pitch bridges this gap.
            </p>

            {/* Mission bullets */}
            <div className="space-y-4 mb-10">
              {missionPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(249,115,22,0.12)" }}>
                    <CheckCircle size={14} className="text-[#F97316]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#1F1F1F] text-[15px] font-semibold">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.5)" }}>
              <div className="w-[4px] h-10 rounded-full" style={{ background: "linear-gradient(to bottom, #F97316, #FB923C)" }} />
              <span className="text-[#1F1F1F]/60 text-[15px] italic font-medium">"Every founder from Bharat deserves a seat at the table."</span>
            </div>
          </motion.div>

          {/* ── Right — Unified Cards ── */}
          <div className="space-y-5">
            {pillars.map(({ Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-base flex gap-5 items-start !p-6" /* standard class applied */
              >
                <div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                  <Icon size={22} style={{ color }} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#1F1F1F] text-[1.125rem] mb-2">{title}</h3>
                  <p className="text-[#1F1F1F]/60 text-[15px] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
