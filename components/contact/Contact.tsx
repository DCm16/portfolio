"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/shared/SectionWrapper";
import { CONTACT_INFO } from "@/constants";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-[#2b2d31]">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          tag="// contact"
          title="Let's Build Together"
          subtitle="Have a project in mind? Send a message — I respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <FadeIn>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] text-[#b5bac1] font-semibold font-mono tracking-wider mb-1.5 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="John Smith"
                  className="w-full bg-[#1e1f22] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#80848e] outline-none focus:border-[#5865f2]/50 focus:ring-2 focus:ring-[#5865f2]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#b5bac1] font-semibold font-mono tracking-wider mb-1.5 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="hello@example.com"
                  className="w-full bg-[#1e1f22] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#80848e] outline-none focus:border-[#5865f2]/50 focus:ring-2 focus:ring-[#5865f2]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#b5bac1] font-semibold font-mono tracking-wider mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-[#1e1f22] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#80848e] outline-none focus:border-[#5865f2]/50 focus:ring-2 focus:ring-[#5865f2]/10 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(88,101,242,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold py-3 px-6 rounded-lg text-[14px] transition-colors"
              >
                <Send size={16} /> Send Message
              </motion.button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-[13px] text-[#23a55a] font-mono font-semibold"
                >
                  ✅ Message sent! I&apos;ll reply soon.
                </motion.div>
              )}
            </form>
          </FadeIn>

          {/* Contact info */}
          <FadeIn delay={0.2} className="flex flex-col gap-3">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3.5 p-4 bg-[#313338] border border-white/[0.06] rounded-xl hover:border-[#5865f2]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#5865f2]/12 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[11px] text-[#80848e] uppercase tracking-wider font-mono">
                    {item.label}
                  </div>
                  <div className="text-[14px] text-white font-medium mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social pills */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: MessageSquare, label: "Discord" },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ y: -1 }}
                  className="inline-flex items-center gap-2 bg-[#313338] border border-white/[0.08] hover:border-[#5865f2]/40 hover:bg-[#5865f2]/08 text-[#b5bac1] hover:text-white px-4 py-2 rounded-full text-[13px] font-medium transition-all"
                >
                  <Icon size={15} /> {label}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
