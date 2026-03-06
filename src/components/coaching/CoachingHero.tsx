"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function CoachingHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 bg-primary text-secondary overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full border-[100px] border-accent/20 blur-3xl"
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-8"
                >
                    Master Communication.<br />
                    Strengthen Leadership.<br />
                    <span className="text-accent">Lead With Clarity.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-secondary/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    <strong className="font-semibold text-secondary">BINT KAMAL SOLACE LTD</strong> provides structured communication coaching and leadership capacity training for professionals, executives, and organizations ready to grow with clarity and credibility.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                >
                    <motion.a
                        href="#apply"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-accent text-primary px-8 py-4 rounded-sm font-semibold text-lg transition-colors hover:bg-white inline-flex items-center justify-center cursor-pointer"
                    >
                        Book a Coaching Session
                    </motion.a>
                    <motion.a
                        href="#programs"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-sm font-medium text-lg text-secondary border border-secondary/30 transition-colors hover:bg-secondary/10 inline-flex items-center justify-center cursor-pointer"
                    >
                        Explore Training Programs
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex items-center justify-center gap-3 text-secondary/60 text-sm font-medium"
                >
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <p>Trusted by professionals, leaders, and organizations committed to excellence.</p>
                </motion.div>
            </div>
        </section>
    );
}
