"use client";

import { motion } from "framer-motion";

const programs = [
    "Communication Mastery",
    "Leadership Development",
    "Professional Growth Training",
    "Certification Programs"
];

export function Programs() {
    return (
        <section id="programs" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                            Structured Programs for Lasting Impact.
                        </h2>
                        <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                            Move beyond inspiration. Our upcoming training programs are rigorous, framework-driven, and designed to install the competencies required for high-level professional execution.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(11, 61, 46, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary text-secondary px-8 py-4 rounded-sm font-medium text-lg transition-all"
                        >
                            Apply for Training
                        </motion.button>
                    </div>

                    <div className="space-y-4">
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-secondary/30 border border-secondary p-6 rounded-sm flex items-center justify-between group cursor-pointer hover:bg-white hover:border-accent hover:shadow-md transition-all"
                            >
                                <span className="font-medium text-lg text-primary group-hover:text-accent transition-colors">
                                    {program}
                                </span>
                                <span className="text-sm font-semibold text-charcoal/50 group-hover:text-accent uppercase tracking-widest transition-colors">
                                    Upcoming
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
