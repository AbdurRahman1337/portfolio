"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { soundFx } from "@/lib/sound";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import confetti from "canvas-confetti";
import {
  Mail,
  Copy,
  Check,
  Send,
  FileDown,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Application (React)",
    message: "",
  });

  const emailLink = socialLinks.find((l) => l.name === "Email")?.url || `mailto:${personalInfo.email}`;
  const resumeLink = socialLinks.find((l) => l.name === "Resume")?.url || "#";
  const linkedinLink = socialLinks.find((l) => l.name === "LinkedIn")?.url || "#";
  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "#";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    soundFx.playSuccess();
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#6366f1", "#a855f7", "#38bdf8"],
      });
    } catch {
      // Confetti fallback
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");
    setErrorMessage("");
    soundFx.playClick(900);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStatus("sent");
        soundFx.playSuccess();
        try {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#6366f1", "#a855f7", "#10b981"],
          });
        } catch {}
      } else {
        setFormStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please email me directly.");
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Network error occurred. Please contact me directly via email.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200 bg-radial-gradient-contact overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Bio CTA, Direct Links (lg:col-span-6) */}
          <MotionReveal direction="left" className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                09 / Get in Touch
              </span>
              <div className="h-px w-8 bg-indigo-500/40" />
            </div>

            <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              Let&apos;s build something thoughtful.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-lg font-normal">
              Whether it&apos;s a web application, mobile product, or a frontend engineering challenge, I&apos;m interested in building fast, reliable, and production-quality software.
            </p>

            {/* Email Copy Card with Avatar */}
            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300 shadow-xl max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-indigo-400/50 shadow-md">
                  <Image
                    src="/images/profile/abdurrahman-avatar.png"
                    alt="Abdurrahman"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block leading-tight">
                    DIRECT INBOX • ABDURRAHMAN
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    ● Available for select roles & projects
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
                <span className="font-mono text-sm sm:text-base text-zinc-200 dark:text-zinc-200 light:text-zinc-900 font-medium truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-medium transition-colors"
                  aria-label="Copy email address to clipboard"
                  data-cursor="talk"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={emailLink}
                data-cursor="talk"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-medium text-indigo-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Email Me Directly</span>
                <ArrowUpRight className="w-3 h-3 text-indigo-400" />
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </MotionReveal>

          {/* Right Column: Interactive Contact Inquiry Form (lg:col-span-6) */}
          <MotionReveal direction="right" className="lg:col-span-6">
            <SpotlightCard enableTilt={true} className="p-6 sm:p-8 shadow-2xl relative">
              {formStatus === "sent" ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                    Message Delivered
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm">
                    Thank you for reaching out! Abdurrahman will get back to you shortly. You can also connect directly at {personalInfo.email}.
                  </p>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      setFormStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Web Application (React)",
                        message: "",
                      });
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Send a Message
                    </span>
                    <span className="text-[11px] font-mono text-indigo-400">
                      Abdurrahman • TechNext
                    </span>
                  </div>

                  {formStatus === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-zinc-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-zinc-400 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs font-mono text-zinc-400 mb-1"
                    >
                      Interest / Project Type
                    </label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f0f14] dark:bg-[#0f0f14] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    >
                      <option value="Web Application (React)">
                        Web Application (React)
                      </option>
                      <option value="Mobile App (React Native)">
                        Mobile App (React Native & Expo)
                      </option>
                      <option value="Full Frontend Implementation">
                        Full Frontend Implementation
                      </option>
                      <option value="Full-time / Contract Role">
                        Professional Opportunity / Role
                      </option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-zinc-400 mb-1"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your software project, timeline, or inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={formStatus === "submitting"}
                    className="w-full justify-center shadow-lg shadow-indigo-600/25"
                    data-cursor="talk"
                  >
                    {formStatus === "submitting" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </SpotlightCard>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
