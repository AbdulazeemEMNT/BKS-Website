"use client";

import { motion } from "framer-motion";

export function ApplicationForm() {
    return (
        <>
            <section id="apply" className="py-24 md:py-32 bg-white relative">

                {/* Abstract background gradient */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                            Ready to Strengthen Your <span className="text-accent">Communication</span> and <span className="text-accent">Leadership</span> Capacity?
                        </h2>
                        <p className="text-lg text-charcoal/80 mb-12 max-w-lg leading-relaxed font-light">
                            Whether you are an individual professional or an organization, structured coaching can transform how you lead and communicate.
                        </p>

                        <div className="p-8 bg-secondary/30 border border-secondary rounded-sm">
                            <h3 className="font-display text-2xl font-semibold text-primary mb-4">Leadership Starts With Communication</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed mb-6 font-light">
                                Professional influence is built on the ability to communicate ideas clearly, lead conversations effectively, and inspire confidence in others.
                            </p>
                            <p className="text-charcoal/90 font-medium">
                                We believe communication is not simply a skill — it is the foundation of leadership.
                            </p>
                        </div>
                    </div>

                    <div className="bg-primary text-secondary p-8 md:p-12 rounded-sm shadow-2xl shadow-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

                        <h3 className="font-display text-3xl font-bold mb-8 text-white relative z-10">
                            Apply for Coaching
                        </h3>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-secondary/70 font-semibold">Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-secondary/20 pb-3 outline-none focus:border-accent transition-colors text-white" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-secondary/70 font-semibold">Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-secondary/20 pb-3 outline-none focus:border-accent transition-colors text-white" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-secondary/70 font-semibold">Organization</label>
                                    <input type="text" className="w-full bg-transparent border-b border-secondary/20 pb-3 outline-none focus:border-accent transition-colors text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-secondary/70 font-semibold">Professional Role</label>
                                    <input type="text" className="w-full bg-transparent border-b border-secondary/20 pb-3 outline-none focus:border-accent transition-colors text-white" required />
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <label className="text-xs uppercase tracking-widest text-secondary/70 font-semibold">What leadership or communication challenge would you like to address?</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-secondary/20 pb-3 outline-none focus:border-accent transition-colors text-white resize-none mt-2" required />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-accent text-primary font-bold py-4 rounded-sm mt-8 transition-colors hover:bg-white"
                            >
                                Submit Coaching Application
                            </motion.button>
                        </form>
                    </div>

                </div>
            </section>

            <section className="py-24 bg-secondary/10 text-center px-6 border-t border-secondary">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                        Professional Growth Requires Intentional Development.
                    </h2>
                    <p className="text-lg text-charcoal/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                        If you are ready to develop the communication clarity and leadership capacity required for real professional impact, we invite you to begin.
                    </p>
                    <a href="#apply" className="inline-block bg-primary text-secondary px-10 py-4 rounded-sm font-semibold text-lg transition-colors hover:bg-primary/90 shadow-lg">
                        Book Your First Coaching Session
                    </a>
                </div>
            </section>
        </>
    );
}
