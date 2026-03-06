"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Authority() {
    const focuses = [
        "Strategic communication",
        "Leadership capacity development",
        "Personal clarity and confidence",
        "Executive-level presence"
    ];

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                            Professional Growth Requires Structure — <br />
                            <span className="text-accent italic font-medium">Not Motivation.</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary/10 rounded-full mb-8" />
                        <p className="text-xl font-medium text-charcoal/90 mb-6">
                            This is not motivational speaking. This is professional transformation through structured development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg text-charcoal/80 leading-relaxed font-light"
                    >
                        <p>
                            Many professionals struggle not because they lack intelligence or ambition, but because they lack structured guidance in communication, leadership, and personal development.
                        </p>
                        <p className="pb-4">
                            At <strong className="font-semibold text-primary">BINT KAMAL SOLACE LTD</strong>, we provide coaching and training designed to strengthen the skills that determine long-term professional impact. Our programs focus on:
                        </p>

                        <ul className="space-y-4 pt-2">
                            {focuses.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 bg-secondary/20 p-4 rounded-sm border border-secondary/50">
                                    <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                                    <span className="font-medium text-primary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
