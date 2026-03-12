import { motion } from "framer-motion";
import { Instagram, Globe } from "lucide-react";

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const milestones = [
  { year: "2019", label: "Founded", desc: "KaroStartup launched with a mission to share founder stories from across India." },
  { year: "2021", label: "10K Community", desc: "Grew to 10,000+ founders across India through authentic storytelling." },
  { year: "2023", label: "100K Milestone", desc: "Reached 100K+ community — one of India's largest startup platforms." },
  { year: "2024", label: "Karo Pitch", desc: "Launched Karo Pitch to unlock funding for Bharat's most promising founders." },
];

export function AboutKaroStartup() {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full gradient-orb" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1), transparent 60%)" }} />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <div className="section-badge mb-6">
              <span className="dot" />
              The Parent Platform
            </div>
            
            <h2 className="font-heading font-extrabold text-[#1F1F1F] mb-6" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", lineHeight: 1.15 }}>
              About <span className="gradient-text">KaroStartup</span>
            </h2>
            
            <div className="space-y-4 mb-10">
              <p className="text-[#1F1F1F]/60 leading-relaxed" style={{ fontSize: "1.125rem" }}>
                KaroStartup is one of India's largest startup storytelling platforms. Over the last 5 years, we've shared thousands of founder journeys — from college dorms to Series A boardrooms.
              </p>
              <p className="text-[#1F1F1F]/60 leading-relaxed" style={{ fontSize: "1.125rem" }}>
                With 100,000+ founders in our community, KaroStartup has built India's most trusted ecosystem for early-stage builders. Karo Pitch is our next chapter — transforming a storyteller into a funding gateway.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.instagram.com/karo_startup_/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.05)", color: "#1F1F1F" }}
              >
                <Instagram size={18} strokeWidth={2.5} className="text-[#E1306C]" />
                Instagram
              </motion.a>
              <motion.a
                href="https://karostartup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Globe size={18} strokeWidth={2.5} />
                Visit Website
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <div className="relative pl-6 lg:pl-10 py-6">
            <div
              className="absolute left-[24px] lg:left-[40px] top-8 bottom-8 w-[3px] rounded-full"
              style={{ background: "linear-gradient(180deg, #F97316, #FB923C)", opacity: 0.8, transform: "translateX(-50%)" }}
            />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="relative mb-10 last:mb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-[22px] w-[20px] h-[20px] rounded-full z-10"
                  style={{ background: "#F97316", border: "4px solid #F2EBDC", boxShadow: "0 0 0 6px rgba(249,115,22,0.18)", transform: "translate(-50%, -50%)" }}
                />
                <div className="card-base ml-8 cursor-default !p-6">
                  <div className="flex items-center gap-3.5 mb-3">
                    <span
                      className="font-heading font-extrabold text-[13px] px-3 py-1 rounded-[8px] uppercase tracking-wide"
                      style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}
                    >
                      {m.year}
                    </span>
                    <span className="font-heading font-extrabold text-[#1F1F1F] text-[1.125rem]">{m.label}</span>
                  </div>
                  <p className="text-[#1F1F1F]/60 text-[0.9375rem] leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
