import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Rocket, MapPin } from "lucide-react";

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

const stats = [
  { Icon: BookOpen, label: "Founder Stories", end: 5000, suffix: "+", iconColor: "#F97316" },
  { Icon: Users, label: "Founders Backed", end: 100000, suffix: "+", iconColor: "#F97316" },
  { Icon: Rocket, label: "Startups Featured", end: 1000, suffix: "+", iconColor: "#F97316" },
  { Icon: MapPin, label: "Cities Covered", end: 200, suffix: "+", iconColor: "#F97316" },
];

export function StatsSection() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg opacity-[0.08] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="section-header"
        >
          <h2>India's Startup Momentum</h2>
          <p>Powering the next generation of Indian entrepreneurs — from metros to Bharat.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ Icon, label, end, suffix, iconColor }, i) => (
            <motion.div
              key={label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={revealVariants}
              className="card-base text-center cursor-default"
            >
              <div
                className="w-12 h-12 rounded-[14px] mx-auto mb-5 flex items-center justify-center transition-transform hover:scale-110 duration-200"
                style={{ background: "rgba(249, 115, 22, 0.1)" }}
              >
                <Icon size={24} style={{ color: iconColor }} strokeWidth={2.5} />
              </div>
              <div className="font-heading font-extrabold text-[#1F1F1F] text-[2rem] sm:text-[2.5rem] mb-2 leading-none">
                <CountUp end={end} suffix={suffix} />
              </div>
              <div className="text-[#6B7280] text-[15px] font-medium tracking-wide uppercase">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
