import { Github, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1f22] border-t border-white/[0.06] py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5 font-bold text-[16px]">
            <div className="w-7 h-7 rounded-full bg-[#5865f2] flex items-center justify-center text-[11px] font-bold text-white font-mono">
              AD
            </div>
            Alex.dev
          </div>

          {/* Quick links */}
          <div className="flex gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#b5bac1] hover:text-white text-[13px] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-2.5">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-white/[0.08] rounded-lg bg-[#2b2d31] text-[#80848e] hover:text-[#5865f2] hover:border-[#5865f2]/40 flex items-center justify-center transition-all"
                aria-label="Social link"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.06] text-center text-[12px] text-[#80848e]">
          © {new Date().getFullYear()} Alex Developer. Built with ❤️ using Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
