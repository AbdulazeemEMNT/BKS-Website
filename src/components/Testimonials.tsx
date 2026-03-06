"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "This coaching changed how I communicate with my team and how I show up in leadership spaces. The structure is unmatched.",
        author: "Senior Executive",
        company: "Financial Services"
    },
    {
        quote: "The structure and clarity of the training helped me gain confidence in professional conversations and high-stakes negotiations.",
        author: "Founder & CEO",
        company: "Tech Startup"
    },
    {
        quote: "BKS provides practical frameworks that professionals can immediately apply. It's not motivation, it's actual capability building.",
        author: "Director of Operations",
        company: "Global Logistics"
    }
];

export function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 md:py-32 bg-secondary text-primary overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <Quote className="w-12 h-12 text-accent mx-auto mb-10 opacity-50" />

                <div className="relative min-h-[220px] md:min-h-[160px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <p className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                                "{testimonials[index].quote}"
                            </p>
                            <div>
                                <p className="font-semibold text-lg">{testimonials[index].author}</p>
                                <p className="text-primary/70">{testimonials[index].company}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-6 mt-16">
                    <button
                        onClick={prev}
                        className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-primary w-6" : "bg-primary/30"}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
