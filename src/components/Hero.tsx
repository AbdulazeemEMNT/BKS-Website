"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";


export function Hero() {
    const { openModal } = useModal();

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-secondary">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
                        Communication.<br />
                        Leadership.<br />
                        Professional Growth.
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/80 mb-10 leading-relaxed max-w-xl">
                        <strong className="font-semibold text-charcoal">BINT KAMAL SOLACE LTD</strong> provides structured communication coaching, leadership training, and capacity-building programs for professionals and organizations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(11, 61, 46, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={openModal}
                            className="bg-primary text-secondary px-8 py-4 rounded-sm font-medium text-lg transition-all"
                        >
                            Book Coaching
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(11, 61, 46, 0.05)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-sm font-medium text-lg text-primary border border-primary/20 transition-all"
                        >
                            Explore Programs
                        </motion.button>
                    </div>
                </motion.div>

                {/* Abstract Animation Side */}
                <div className="relative h-[500px] w-full hidden lg:block">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 w-64 h-80 bg-primary/10 rounded-[4rem] backdrop-blur-md border border-primary/10"
                    />
                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            x: [0, -10, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 left-10 w-56 h-72 bg-accent/20 rounded-full backdrop-blur-md"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, -10, 0],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-3xl rotate-12 backdrop-blur-sm border border-primary/20"
                    />
                </div>
            </div>

            {/* Background ambient glow */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
        </section>
    );
}
