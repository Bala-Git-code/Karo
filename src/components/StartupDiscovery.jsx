import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

function useScrollReveal() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (inView) controls.start("animate");
  }, [inView, controls]);
  return { ref, controls };
}

// Standard unified scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const filters = ["All", "D2C", "SaaS", "MSME", "AgriTech", "Manufacturing", "HealthTech"];

const discoveryStartups = [
  { name: "GreenHarvest", tags: ["AgriTech"], city: "Nashik", stage: "Seed", icon: "🌾", raise: "₹2Cr" },
  { name: "Urban Threads", tags: ["D2C"], city: "Jaipur", stage: "Pre-Seed", icon: "👗", raise: "₹1.5Cr" },
  { name: "BuildMate", tags: ["Manufacturing", "MSME"], city: "Surat", stage: "Seed", icon: "🏗️", raise: "₹3Cr" },
  { name: "MediReach", tags: ["HealthTech"], city: "Patna", stage: "Series A", icon: "🏥", raise: "₹4Cr" },
  { name: "KrishiAI", tags: ["AgriTech", "SaaS"], city: "Indore", stage: "Seed", icon: "🤖", raise: "₹2.5Cr" },
  { name: "ShopLocal", tags: ["SaaS", "MSME"], city: "Coimbatore", stage: "Series A", icon: "🏪", raise: "₹5Cr" },
  { name: "FabriX", tags: ["Manufacturing", "D2C"], city: "Ludhiana", stage: "Pre-Seed", icon: "🧵", raise: "₹1Cr" },
  { name: "EduBharat", tags: ["SaaS"], city: "Varanasi", stage: "Seed", icon: "📚", raise: "₹1.8Cr" },
  { name: "ZeroWaste", tags: ["D2C", "Manufacturing"], city: "Pune", stage: "Pre-Seed", icon: "♻️", raise: "₹80L" },
];

export function StartupDiscovery() {
  const { ref } = useScrollReveal();
  const [active, setActive] = useState("All");
  const [prevFilter, setPrevFilter] = useState("All");
  const [key, setKey] = useState(0); 

  const filtered =
    active === "All"
      ? discoveryStartups
      : discoveryStartups.filter((s) => s.tags.includes(active));

  const handleFilter = (f) => {
    if (f === active) return;
    setPrevFilter(active);
    setActive(f);
    setKey((k) => k + 1);
  };

  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full gradient-orb" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06), transparent 60%)" }} />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealVariants}
          className="section-header"
        >
          <div className="section-badge">
            <span className="dot" />
            Startup Discovery
          </div>
          <h2>
            Discover <span className="gradient-text">Promising Startups</span>
          </h2>
          <p>Browse startups by category. Investor? Mentor? Collaborator? Find your next bet here.</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="flex flex-wrap gap-2.5 justify-center mb-10"
        >
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <motion.button
                key={f}
                onClick={() => handleFilter(f)}
                whileTap={{ scale: 0.95 }}
                className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
                style={{
                  color: isActive ? "#fff" : "#1F1F1F",
                  background: isActive ? undefined : "rgba(255,255,255,0.8)",
                  border: isActive ? "1px solid transparent" : "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                      boxShadow: "0 4px 16px rgba(249,115,22,0.3)",
                    }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid - key forces clean remount on filter change */}
        <motion.div
          key={key}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="card-base group cursor-pointer !p-5 relative"
            >
              <div className="flex items-center gap-3 mb-4 pl-2 pt-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[1.25rem] flex-shrink-0 shadow-sm"
                  style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(255,159,69,0.2))" }}
                >
                  {s.icon}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="font-heading font-extrabold text-[#1F1F1F] text-[1.0625rem] truncate group-hover:text-[#F97316] transition-colors mb-0.5">
                    {s.name}
                  </div>
                  <div className="text-[#1F1F1F]/45 text-[12px] flex items-center gap-1 font-medium">
                    <span>📍</span> {s.city}
                  </div>
                </div>

                <div className="text-right flex-shrink-0 pr-2">
                  <div className="font-heading font-extrabold text-[#F97316] text-[1rem] mb-1">{s.raise}</div>
                  <span className="text-[11px] font-bold tracking-wide px-2 py-1 rounded-md bg-[#E9DFC8]/40 text-[#1F1F1F]/80 uppercase">
                    {s.stage}
                  </span>
                </div>
              </div>

              <div className="h-px w-full mb-4" style={{ background: "rgba(0,0,0,0.05)" }} />

              <div className="flex flex-wrap gap-2 pl-2 pb-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-[6px]"
                    style={{ background: "rgba(249,115,22,0.08)", color: "#F97316" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-4">🔍</div>
              <div className="text-[#1F1F1F] font-heading font-extrabold text-xl mb-2">No startups found in this category yet.</div>
              <div className="text-[#1F1F1F]/50 text-[15px]">Check back soon as more startups join!</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
