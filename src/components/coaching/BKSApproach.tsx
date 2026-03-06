"use client";

import { motion } from "framer-motion";

export function BKSApproach() {
    const pillars = [
        { title: "Clarity", desc: "Understanding how you communicate, think, and lead." },
        { title: "Competence", desc: "Developing the practical skills required to lead effectively." },
        { title: "Credibility", desc: "Building the professional presence that earns trust and influence." },
    ];

    const steps = [
        { num: "01", name: "Discovery", text: "We assess your communication style, leadership challenges, and growth goals." },
        { num: "02", name: "Strategy", text: "We design a structured coaching plan aligned with your professional objectives." },
        { num: "03", name: "Development", text: "Through guided coaching sessions, frameworks, and practice, you build the competencies required to lead effectively." },
        { num: "04", name: "Integration", text: "You apply new communication and leadership skills in real-world professional settings." },
    ];

    return (
        <>
            <section className="py-24 md:py-32 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                        A Structured Approach to Professional Development
                    </h2>
                    <p className="text-lg text-charcoal/80 mb-16 max-w-2xl mx-auto">
                        Most development programs focus on inspiration. We focus on systems and transformation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-10 border border-secondary text-left rounded-sm transition-shadow hover:shadow-xl"
                            >
                                <h3 className="font-display text-3xl font-bold text-accent mb-4">
                                    {pillar.title}
                                </h3>
                                <p className="text-charcoal/70 leading-relaxed font-light text-sm max-w-[250px]">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="inline-block border-b border-accent pb-2">
                        <p className="font-display font-medium text-xl md:text-2xl text-primary italic">
                            "The result is not temporary motivation. The result is lasting professional capacity."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-primary text-secondary">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">How Our Coaching Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group p-6 border-l border-white/10 hover:border-accent transition-colors">
                                <div className="text-6xl font-display font-bold text-accent/20 mb-6 group-hover:text-accent/40 transition-colors">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                                    Step {step.num} — <span className="text-accent">{step.name}</span>
                                </h3>
                                <p className="text-secondary/70 leading-relaxed font-light pt-2">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
