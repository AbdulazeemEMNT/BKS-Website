"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.querySelector(".about-content"),
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                            Empowering Leaders.<br />
                            <span className="text-accent">Elevating Impact.</span>
                        </h2>
                        <div className="h-1 w-16 bg-accent rounded-full" />
                    </div>

                    <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed font-light">
                        <p>
                            <strong className="font-semibold text-charcoal">BINT KAMAL SOLACE LTD</strong> is a sustainable professional training and coaching company focused on communication, personal development, and leadership capacity building.
                        </p>
                        <p>
                            We serve forward-thinking professionals, executives, and organizations who understand that true leadership starts with effective communication. Our mission is to bridge the gap between potential and performance.
                        </p>
                        <p>
                            Through a structured coaching approach, we move beyond mere motivation to provide actionable frameworks, enabling our clients to navigate high-stakes environments with clarity, confidence, and authority.
                        </p>
                    </div>

                </div>

                {/* Media Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-12 lg:col-span-8 relative aspect-video overflow-hidden rounded-sm bg-secondary/30 shadow-2xl group cursor-pointer"
                    >
                        <img
                            src="/images/about-media.png"
                            alt="Executive Coaching Session"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-2" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white text-sm font-medium tracking-widest uppercase bg-primary/40 backdrop-blur-md px-4 py-2">
                            Our Methodology in Action
                        </div>
                    </motion.div>

                    <div className="md:col-span-12 lg:col-span-4 space-y-8">
                        <div className="p-8 bg-secondary/50 border-l-4 border-accent">
                            <h4 className="font-display text-xl font-bold text-primary mb-3 italic">"Communication is the gateway to leadership excellence."</h4>
                            <p className="text-charcoal/70 text-sm italic">— BINT KAMAL SOLACE Methodology</p>
                        </div>
                        <p className="text-charcoal/70 leading-relaxed font-light">
                            Our structured programs are designed to be observable and measurable. We don't just teach theory; we facilitate behavioral transformation that manifests in every professional interaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
