import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ClipboardList, CheckSquare, Mic2, TrendingUp } from "lucide-react";
import { useEffect } from "react";

// Standard unified scroll reveal
function useScrollReveal() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => { if (inView) controls.start("animate"); }, [inView, controls]);
  return { ref, controls };
}

const steps = [
  {
    num: "01", Icon: ClipboardList,
    title: "Apply with Your Pitch",
    desc: "Fill out our application form and submit your pitch deck. Tell your story.",
    accentColor: "#F97316", numColor: "rgba(249,115,22,0.1)",
  },
  {
    num: "02", Icon: CheckSquare,
    title: "Get Shortlisted",
    desc: "Our expert team reviews every application to find promising founders.",
    accentColor: "#FB923C", numColor: "rgba(255,159,69,0.1)",
  },
  {
    num: "03", Icon: Mic2,
    title: "Pitch Live",
    desc: "Present your startup in a curated session to a panel of angels & VCs.",
    accentColor: "#4F46E5", numColor: "rgba(79,70,229,0.1)",
  },
  {
    num: "04", Icon: TrendingUp,
    title: "Raise Funding",
    desc: "Close your round, unlock mentorship, and accelerate growth.",
    accentColor: "#22c55e", numColor: "rgba(34,197,94,0.1)",
  },
];

export function HowItWorks() {
  const { ref, controls } = useScrollReveal();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full gradient-orb" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 60%)" }} />

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <div className="section-badge">
            <span className="dot" />
            The Process
          </div>
          <h2>
            How Karo Pitch <span className="gradient-text">Works</span>
          </h2>
          <p>From application to funded — four simple steps built for ambitious founders ready to scale their businesses.</p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connector lines — desktop only */}
          <div className="hidden lg:flex absolute top-[3.75rem] left-0 right-0 items-center pointer-events-none px-[12.5%] z-0">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={{ initial: { scaleX: 0, originX: "left" }, animate: { scaleX: 1, transition: { delay: i * 0.1 + 0.4, duration: 0.5 } } }}
                className="flex-1 h-px mx-4 bg-[#F97316]"
                style={{ opacity: 0.2 }}
              />
            ))}
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={{ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } } }}
              className="card-base group relative overflow-visible z-10"
            >
              {/* Background Step Num */}
              <div className="absolute top-4 right-6 font-black text-6xl leading-none select-none transition-transform duration-300 group-hover:scale-105" style={{ color: step.numColor }}>
                {step.num}
              </div>

              {/* Hover Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, ${step.accentColor}, transparent)` }} />

              {/* Icon */}
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-6" style={{ background: step.numColor }}>
                <step.Icon size={24} style={{ color: step.accentColor }} strokeWidth={2.5} />
              </div>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full font-bold mb-4 bg-white" style={{ border: `1px solid ${step.accentColor}40`, color: step.accentColor, fontSize: "0.6875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Step {step.num}
              </div>

              <h3 className="font-heading font-extrabold text-[#1F1F1F] text-[1.125rem] mb-2">{step.title}</h3>
              <p className="text-[#1F1F1F]/60 text-[0.9375rem] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center font-medium mt-16 text-[#1F1F1F]/50 text-[15px]"
        >
          Ready to start?{" "}
          <span className="text-[#F97316] cursor-pointer hover:underline transition-all">
            Apply now — join 50+ startups pitching this season →
          </span>
        </motion.p>
      </div>
    </section>
  );
}
