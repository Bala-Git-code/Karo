import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "D2C Brand",
  "Consumer Startup",
  "MSME",
  "SaaS",
  "Manufacturing",
  "AgriTech",
  "HealthTech",
  "EdTech",
  "FinTech",
  "Other",
];

const INITIAL_FORM = {
  founderName: "",
  startupName: "",
  category: "",
  city: "",
  description: "",
  raiseTarget: "",
  pitchDeck: null,
};

const STEPS = [
  { id: 1, label: "Founder", icon: "👤" },
  { id: 2, label: "Startup", icon: "🚀" },
  { id: 3, label: "Pitch", icon: "🎯" },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    transition: { duration: 0.22, ease: "easeIn" },
  }),
};

function InputField({ label, required, children, hint }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1 text-sm font-semibold text-slate-700" style={{ fontFamily: "var(--font-body, inherit)" }}>
        {label}
        {required && <span className="text-rose-500 text-xs">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-400 font-body">{hint}</p>}
    </div>
  );
}

export function ApplicationModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (file) => {
    if (file) setForm((f) => ({ ...f, pitchDeck: file }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    setLoading(false);
    setStep(1);
    setDirection(1);
    onClose();
  };

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 3));
  };

  const goPrev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const isStep1Valid = form.founderName.trim() && form.city.trim();
  const isStep2Valid = form.startupName.trim() && form.category;
  const isStep3Valid = form.description.trim().length >= 20;

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 outline-none text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 bg-white/80";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl"
            style={{ background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)" }}
          >
            {/* Decorative top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)" }}
            />

            {/* Background orb */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
            />

            {/* Header */}
            <div className="px-7 pt-8 pb-5 relative">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                    >
                      K
                    </div>
                    <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase">Karo Pitch</span>
                  </div>
                  <h2 className="font-black text-slate-900 text-2xl tracking-tight">Apply to Pitch</h2>
                  <p className="text-slate-400 text-sm mt-0.5">Tell us your startup story in 3 simple steps</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleClose}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors mt-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Step indicator — only show if not submitted */}
              {!submitted && (
                <div className="flex items-center gap-2 mt-5">
                  {STEPS.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-2 flex-1">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{
                            scale: step === s.id ? 1 : 0.9,
                            backgroundColor: step > s.id ? "#6366f1" : step === s.id ? "#6366f1" : "#e2e8f0",
                          }}
                          transition={{ duration: 0.25 }}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ color: step >= s.id ? "#fff" : "#94a3b8" }}
                        >
                          {step > s.id ? (
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            s.id
                          )}
                        </motion.div>
                        <span
                          className="text-xs font-semibold hidden sm:block"
                          style={{ color: step >= s.id ? "#6366f1" : "#94a3b8" }}
                        >
                          {s.label}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="flex-1 h-0.5 mx-1 rounded-full overflow-hidden bg-slate-200">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
                            animate={{ width: step > s.id ? "100%" : "0%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="mx-7 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* Body */}
            <div className="px-7 py-6 max-h-[65vh] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              <AnimatePresence mode="wait" custom={direction}>
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center py-6"
                  >
                    {/* Success animation ring */}
                    <div className="relative w-24 h-24 mx-auto mb-5">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 rounded-full"
                        style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.3, 1] }}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center text-4xl"
                      >
                        🎉
                      </motion.div>
                      {/* Pulse rings */}
                      {[0, 1].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-full border-2 border-indigo-400"
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: 1.8 + i * 0.4, opacity: 0 }}
                          transition={{ delay: 0.3 + i * 0.2, duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
                        />
                      ))}
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-black text-slate-900 text-xl mb-2"
                    >
                      Application Received! 🚀
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-slate-500 text-sm leading-relaxed mb-5"
                    >
                      Thank you, <strong className="text-slate-700">{form.founderName || "Founder"}</strong>! We've received your
                      application for <strong className="text-indigo-600">{form.startupName || "your startup"}</strong>. Our team
                      will review it within <strong className="text-slate-700">7 business days</strong>.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="rounded-2xl p-4 mb-5 text-left space-y-2"
                      style={{ background: "linear-gradient(135deg, #f0f0ff, #faf5ff)" }}
                    >
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3">What Happens Next</div>
                      {[
                        { icon: "📋", step: "Application review by our team" },
                        { icon: "📧", step: "Shortlist notification via email" },
                        { icon: "🎤", step: "Pitch coaching session booked" },
                        { icon: "💰", step: "Live pitch to investors" },
                      ].map(({ icon, step: s }, i) => (
                        <motion.div
                          key={s}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-xl bg-white shadow-sm border border-indigo-100 flex items-center justify-center text-base flex-shrink-0">
                            {icon}
                          </div>
                          <span className="text-slate-600 text-sm">{s}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(99,102,241,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClose}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="w-full py-3 rounded-2xl text-white font-bold text-sm transition-all"
                      style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
                    >
                      Awesome, Close! ✨
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${step}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {step === 1 && (
                      <div className="space-y-4">
                        <InputField label="Your Full Name" required hint="The founder leading this startup">
                          <input
                            type="text"
                            name="founderName"
                            value={form.founderName}
                            onChange={handleChange}
                            placeholder="e.g. Priya Sharma"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="City" required hint="Where is your startup based?">
                          <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="e.g. Bengaluru, Mumbai, Indore"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="Target Raise Amount" hint="How much are you looking to raise?">
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
                            <input
                              type="text"
                              name="raiseTarget"
                              value={form.raiseTarget}
                              onChange={handleChange}
                              placeholder="e.g. 1 Crore / $500K"
                              className={`${inputClass} pl-8`}
                            />
                          </div>
                        </InputField>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <InputField label="Startup Name" required hint="The official name of your venture">
                          <input
                            type="text"
                            name="startupName"
                            value={form.startupName}
                            onChange={handleChange}
                            placeholder="e.g. GreenHarvest"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="Category" required hint="Which sector best describes your startup?">
                          <div className="relative">
                            <select
                              name="category"
                              value={form.category}
                              onChange={handleChange}
                              className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                            >
                              <option value="">Select a category…</option>
                              {categories.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                            <svg
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </InputField>

                        {/* Category quick-picks */}
                        <div className="flex flex-wrap gap-2">
                          {["D2C Brand", "SaaS", "AgriTech", "FinTech"].map((c) => (
                            <button
                              key={c}
                              type="button"
                              onClick={() => setForm((f) => ({ ...f, category: c }))}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 ${
                                form.category === c
                                  ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                  : "border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600"
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <InputField
                          label="Short Description"
                          required
                          hint={`${form.description.trim().split(/\s+/).filter(Boolean).length}/200 words`}
                        >
                          <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={4}
                            placeholder="What does your startup do and why does it matter? The problem you solve, your solution, and why now…"
                            className={`${inputClass} resize-none leading-relaxed`}
                          />
                        </InputField>

                        {/* Pitch Deck upload */}
                        <InputField label="Upload Pitch Deck">
                          <motion.div
                            onClick={() => fileRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={handleDrop}
                            animate={{
                              borderColor: dragOver ? "#6366f1" : form.pitchDeck ? "#6366f1" : "#e2e8f0",
                              backgroundColor: dragOver ? "#eef2ff" : form.pitchDeck ? "#f0f0ff" : "#fafafa",
                            }}
                            transition={{ duration: 0.2 }}
                            className="w-full px-4 py-5 rounded-xl border-2 border-dashed cursor-pointer text-center relative group transition-all"
                          >
                            {form.pitchDeck ? (
                              <div className="flex items-center gap-3 justify-center">
                                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">📄</div>
                                <div className="text-left">
                                  <div className="text-sm font-semibold text-indigo-700 truncate max-w-[180px]">
                                    {form.pitchDeck.name}
                                  </div>
                                  <div className="text-xs text-slate-400">
                                    {(form.pitchDeck.size / 1024).toFixed(0)} KB
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); setForm((f) => ({ ...f, pitchDeck: null })); }}
                                  className="ml-auto w-6 h-6 rounded-full bg-slate-200 hover:bg-red-100 hover:text-red-500 flex items-center justify-center text-slate-500 transition-colors"
                                >
                                  ×
                                </button>
                              </div>
                            ) : (
                              <div>
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">📎</div>
                                <div className="text-sm text-slate-500">
                                  <span className="font-semibold text-indigo-600">Click to upload</span> or drag & drop
                                </div>
                                <div className="text-xs text-slate-400 mt-1">PDF or PPT — max 20MB</div>
                              </div>
                            )}
                            <input
                              ref={fileRef}
                              type="file"
                              accept=".pdf,.ppt,.pptx"
                              onChange={(e) => handleFile(e.target.files[0])}
                              className="hidden"
                            />
                          </motion.div>
                        </InputField>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {!submitted && (
              <div className="px-7 pb-7 pt-3 space-y-3">
                <div className="flex gap-3">
                  {step > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={goPrev}
                      className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-all"
                    >
                      ← Back
                    </motion.button>
                  )}
                  {step < 3 ? (
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(99,102,241,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={goNext}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      className="flex-1 py-3 rounded-2xl text-white font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
                    >
                      Continue →
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={!loading ? { scale: 1.02, boxShadow: "0 8px 30px rgba(99,102,241,0.35)" } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading || !isStep3Valid}
                      className="flex-1 py-3 rounded-2xl text-white font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.svg
                            className="w-4 h-4 text-white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </motion.svg>
                          Submitting…
                        </span>
                      ) : (
                        "Submit Application 🚀"
                      )}
                    </motion.button>
                  )}
                </div>
                <p className="text-center text-slate-400 text-xs">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-indigo-500 hover:underline">
                    Terms of Service
                  </a>
                  . Your data is safe with us. 🔒
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
