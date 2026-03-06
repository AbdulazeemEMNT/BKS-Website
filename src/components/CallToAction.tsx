"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";


export function CallToAction() {
    const { openModal } = useModal();

    return (
        <section className="relative py-32 md:py-40 overflow-hidden bg-primary flex items-center justify-center text-center">
            {/* Animated Gradient Background */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
                style={{
                    background: "linear-gradient(-45deg, #0B3D2E, #1F1F1F, #0B3D2E, #C6A75E)",
                    backgroundSize: "400% 400%"
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-10 leading-tight">
                    Develop the communication and leadership capacity required for impact.
                </h2>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(198, 167, 94, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openModal}
                        className="bg-accent text-primary px-10 py-4 rounded-sm font-semibold text-lg transition-all"
                    >
                        Book Coaching
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(233, 227, 215, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 rounded-sm font-medium text-lg text-secondary border border-secondary/30 transition-all hover:border-secondary"
                    >
                        Partner With Us
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
