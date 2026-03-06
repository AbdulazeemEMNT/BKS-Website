"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";

export function BookCoachingModal() {
    const { isOpen, closeModal } = useModal();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            closeModal();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden rounded-sm"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-charcoal/40 hover:text-primary transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            {isSubmitted ? (
                                <div className="py-12 text-center">
                                    <div className="flex justify-center mb-6">
                                        <CheckCircle2 className="text-primary w-16 h-16" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-primary mb-2">Request Received</h3>
                                    <p className="text-charcoal/70">
                                        Thank you for your interest. We will contact you shortly to schedule your coaching session.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-10">
                                        <h2 className="font-display text-3xl font-bold text-primary mb-4">Book Your Coaching Session</h2>
                                        <p className="text-charcoal/70">
                                            Take the first step towards professional excellence. Fill out the form below and we'll reach out to schedule your consultation.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 bg-secondary/30 border border-secondary border-b-primary/20 focus:border-b-primary outline-none transition-all text-charcoal placeholder:text-charcoal/30"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-3 bg-secondary/30 border border-secondary border-b-primary/20 focus:border-b-primary outline-none transition-all text-charcoal placeholder:text-charcoal/30"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Coaching Program</label>
                                            <select
                                                required
                                                className="w-full px-4 py-3 bg-secondary/30 border border-secondary border-b-primary/20 focus:border-b-primary outline-none transition-all text-charcoal cursor-pointer"
                                            >
                                                <option value="">Select a program</option>
                                                <option value="1:1 Communication">1:1 Communication Coaching</option>
                                                <option value="Corporate Training">Corporate & Team Training</option>
                                                <option value="Speaking">Speaking & Facilitation</option>
                                                <option value="Other">Other Capacity Building</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">How can we help?</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Briefly describe your goals..."
                                                className="w-full px-4 py-3 bg-secondary/30 border border-secondary border-b-primary/20 focus:border-b-primary outline-none transition-all text-charcoal placeholder:text-charcoal/30 resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-secondary py-4 font-bold tracking-widest uppercase text-sm hover:bg-primary/95 transition-all shadow-lg"
                                        >
                                            Submit Request
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
