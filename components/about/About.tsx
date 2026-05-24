"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/shared/SectionWrapper";
import { useEffect, useState } from "react";

const aboutCards = [
  { icon: "🚀", title: "What I Do", text: "I build full-stack web applications from the ground up — clean architecture, fast performance, pixel-perfect UI. Specializing in React, Next.js, and Node.js ecosystems." },
  { icon: "🎯", title: "My Approach", text: "Great software lives at the intersection of engineering discipline and design sensibility. Every project gets my full creative and technical focus." },
  { icon: "🌱", title: "Always Learning", text: "Currently deep-diving into AI/ML integration, edge computing, and smarter developer tooling. The web never stops evolving — neither do I." },
  { icon: "🤝", title: "Open to Work", text: "Available for freelance projects, startup collaborations, and full-time remote roles. Let's build something remarkable together." },
];

const infoRows = [
  { icon: "🎓", label: "Education", value: "BSc Computer Science" },
  { icon: "📍", label: "Location", value: "Remote Worldwide" },
  { icon: "📅", label: "Experience", value: "3+ Years Professional" },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
  return (
    <SectionWrapper id="about" className="bg-[#2b2d31]">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          tag="// about me"
          title="Who I Am"
          subtitle="A passionate full-stack developer with a love for building elegant digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left – Discord card + info */}
          <div className="flex flex-col gap-4">
            {/* Discord profile card */}
            <FadeIn delay={0.1}>
              <div className="bg-[#313338] border border-white/[0.06] rounded-2xl overflow-hidden">
                <div className="h-20" style={{ background: "linear-gradient(135deg,#5865f2,#eb459e,#23a55a)" }} />
                <div className="px-4 pb-4 pt-10 relative">
                  <div
                    className="absolute -top-9 left-4 w-16 h-16 rounded-full border-4 border-[#313338] flex items-center justify-center text-3xl"
                    style={{ background: "linear-gradient(135deg,#5865f2,#7289da)" }}
                  >
                    🧑‍💻
                  </div>
                  <div className="font-bold text-[17px]">AlexDev#0001</div>
                  <div className="text-[13px] text-[#b5bac1] font-mono">alex.developer</div>
                  <div className="h-px bg-white/[0.06] my-3" />
                  <span className="inline-flex items-center gap-1.5 bg-[#5865f2]/12 border border-[#5865f2]/25 text-[#5865f2] text-[12px] font-semibold px-2.5 py-0.5 rounded">
                    ● Full-Stack Developer
                  </span>
                  <p className="text-[12px] text-[#b5bac1] mt-3 leading-relaxed">
                    Building the future, one commit at a time. Open source enthusiast. Coffee-driven. Based in the digital realm.
                  </p>
                </div>
              </div>
            </FadeIn>

            {infoRows.map((row, i) => (
              <FadeIn key={row.label} delay={0.2 + i * 0.1}>
                <div className="flex items-center gap-3 px-4 py-3.5 bg-[#313338] border border-white/[0.06] rounded-xl hover:border-[#5865f2]/30 transition-colors">
                  <span className="text-xl">{row.icon}</span>
                  <div>
                    <div className="text-[11px] text-[#80848e] uppercase tracking-wider font-mono">
                      {row.label}
                    </div>
                    <div className="text-[14px] text-white font-medium mt-0.5">{row.value}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right – About cards */}
          <div className="flex flex-col gap-4">
            {aboutCards.map((card, i) => (
              <FadeIn key={card.title} delay={0.1 + i * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="p-5 bg-[#313338] border border-white/[0.06] rounded-xl hover:border-[#5865f2]/35 transition-all cursor-default"
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h4 className="text-[14px] font-semibold text-white mb-1.5">{card.title}</h4>
                  <p className="text-[13px] text-[#b5bac1] leading-relaxed">{card.text}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
