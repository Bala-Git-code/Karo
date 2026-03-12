import { motion } from "framer-motion";
import { Rocket, Mail, ShieldCheck, Zap, Target } from "lucide-react";

const trustItems = [
  { Icon: ShieldCheck, text: "Secure & Confidential" },
  { Icon: Zap, text: "Quick Review — 7 Days" },
  { Icon: Target, text: "Matched with Right Investors" },
];

export function CTASection({ onApplyClick }) {
  return (
    <section className="bg-secondary relative overflow-hidden">
      {/* Mesh overlay */}
      <div className="absolute inset-0 hero-grid-bg opacity-[0.08] pointer-events-none" />

      <div className="section-container relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge mx-auto">
            <span className="dot" />
            Applications Now Open
          </div>

          <h2
            className="font-heading font-extrabold text-[#1F1F1F] mb-6 mt-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            Ready to Pitch Your Startup?
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto mb-12" style={{ fontSize: "1.125rem" }}>
            Join hundreds of founders who've already taken the leap. Your next investor could be one pitch away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onApplyClick} className="btn-primary">
              <Rocket size={18} strokeWidth={2.5} />
              Apply Now
            </button>
            <a href="mailto:partner@karopitch.com" className="btn-secondary">
              <Mail size={18} strokeWidth={2.5} />
              Partner With Us
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {trustItems.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-[#1F1F1F]">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(249, 115, 22, 0.1)" }}
                >
                  <Icon size={16} className="text-[#F97316]" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
