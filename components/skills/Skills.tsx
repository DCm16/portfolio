"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/shared/SectionWrapper";
import { SKILLS } from "@/constants";

function SkillCard({ skill, delay }: { skill: (typeof SKILLS)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: "0 0 24px rgba(88,101,242,0.18)" }}
      className="bg-[#313338] border border-white/[0.06] rounded-xl p-5 cursor-default hover:border-[#5865f2]/45 transition-all"
    >
      <span className="text-[1.6rem] block mb-3">{skill.icon}</span>
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-[14px] font-semibold text-white">{skill.name}</span>
        <span className="text-[12px] text-[#5865f2] font-mono font-semibold">{skill.percentage}%</span>
      </div>
      <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#5865f2,#7289da)" }}
        />
      </div>
    </motion.div>
  );
}

const tags = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "GitHub", "Figma", "PostgreSQL", "REST APIs"];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#1e1f22]">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          tag="// skills & stack"
          title="What I Know"
          subtitle="Technologies and tools I use to craft modern, scalable applications."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.07} />
          ))}
        </div>

        {/* Tag cloud */}
        <FadeIn delay={0.4} className="flex flex-wrap gap-2 mt-10">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.06 }}
              className="bg-[#5865f2]/12 border border-[#5865f2]/25 text-[#5865f2] text-[12px] font-medium px-3 py-1.5 rounded-full font-mono cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
