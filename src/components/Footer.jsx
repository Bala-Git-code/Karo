import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Facebook, Youtube, Globe, Rocket, ArrowRight } from "lucide-react";

const socialLinks = [
  { label: "Website", href: "https://karostartup.com", Icon: Globe, color: "#F97316" },
  { label: "Instagram", href: "https://www.instagram.com/karo_startup_/", Icon: Instagram, color: "#E1306C" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/karo-startup/", Icon: Linkedin, color: "#0A66C2" },
  { label: "X (Twitter)", href: "https://x.com/karo_startup", Icon: Twitter, color: "#ffffff" },
  { label: "Facebook", href: "https://www.facebook.com/karostartup", Icon: Facebook, color: "#1877F2" },
  { label: "YouTube", href: "https://www.youtube.com/@karostartup/videos", Icon: Youtube, color: "#FF0000" },
];

const footerLinks = {
  Platform: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Who Can Apply", href: "#apply" },
    { label: "Investor Network", href: "#investors" },
    { label: "Featured Startups", href: "#startups" },
    { label: "Apply to Pitch", href: "#" },
  ],
  Company: [
    { label: "About KaroStartup", href: "https://karostartup.com" },
    { label: "Our Story", href: "#" },
    { label: "Media Kit", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Founder Guides", href: "#" },
    { label: "Pitch Deck Tips", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#1F1F1F", color: "#a3a3a3" }}>
      {/* Top accent line */}
      <div
        className="h-[2px] w-full opacity-90"
        style={{ background: "linear-gradient(90deg, transparent, #F97316, #FB923C, transparent)" }}
      />

      <div className="section-container" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="flex flex-col lg:flex-row justify-between gap-y-12 gap-x-12 lg:gap-x-20 mb-14">
          {/* Brand Col */}
          <div className="lg:max-w-sm">
            <a href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F97316, #FB923C)", boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
              >
                <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-heading font-extrabold text-white text-[1.5rem] leading-none tracking-tight">
                  Karo<span style={{ color: "#F97316" }}>Pitch</span>
                </div>
                <div className="text-[11px] text-white/40 tracking-[0.15em] uppercase font-bold mt-1.5">
                  by KaroStartup
                </div>
              </div>
            </a>

            <p className="text-white/50 text-[1rem] leading-relaxed mb-8 max-w-sm">
              India's premier startup pitch platform — connecting ambitious founders from Bharat with investors who believe in the next big thing.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center transition-all duration-200 group"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.background = `${color}15`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-x-12 xl:gap-x-16 max-w-2xl lg:ml-auto">
            {Object.entries(footerLinks).map(([section, items]) => (
              <div key={section}>
                <h4 className="font-heading font-extrabold text-white/90 text-[0.9375rem] mb-6 tracking-tight">
                  {section}
                </h4>
                <ul className="space-y-3.5">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-white/45 text-[0.9375rem] hover:text-white/90 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                      >
                        <span>{label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/40 text-xs sm:text-sm text-center md:text-left">
            © 2024 Karo Pitch by KaroStartup. All rights reserved.{" "}
            <span className="text-white/40 hidden sm:inline">Made with ❤️ for Bharat's founders.</span>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/35 hover:text-white/70 text-sm transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-white/35 hover:text-white/70 text-sm transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
