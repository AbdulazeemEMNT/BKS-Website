"use client";

import { motion } from "framer-motion";
import { User, Users, BookOpen, Mic, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <User className="w-8 h-8 text-accent" />,
        title: "1:1 Communication Coaching",
        slug: "communication-coaching",
        description: "Private coaching designed to help professionals communicate with clarity, authority, and confidence.",
    },
    {
        icon: <Users className="w-8 h-8 text-accent" />,
        title: "Corporate & Team Training",
        slug: "corporate-training",
        description: "Structured communication and leadership training designed for organizations that want stronger teams.",
    },
    {
        icon: <BookOpen className="w-8 h-8 text-accent" />,
        title: "Workshops & Webinars",
        slug: "workshops-webinars",
        description: "Practical learning sessions designed to help professionals develop communication intelligence.",
    },
    {
        icon: <Mic className="w-8 h-8 text-accent" />,
        title: "Speaking & Facilitation",
        slug: "speaking-facilitation",
        description: "Professional facilitation for organizations and leadership events focused on communication excellence.",
    },
    {
        icon: <Award className="w-8 h-8 text-accent/50" />,
        title: "Certification Programs",
        slug: "certification",
        description: "Structured professional development programs for recognized leadership competencies. (Coming Soon)",
        disabled: true,
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                        Our Core Services
                    </h2>
                    <p className="text-lg text-charcoal/70">
                        Coaching and training designed to strengthen the skills that determine long-term professional impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={service.disabled ? {} : { y: -10, boxShadow: "0 20px 40px -15px rgba(11, 61, 46, 0.1)" }}
                            className={`bg-white p-10 rounded-sm border border-secondary transition-all ${service.disabled ? "opacity-70" : ""
                                }`}
                        >
                            <div className="mb-6 bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="font-display text-xl font-semibold text-primary mb-4">
                                {service.title}
                            </h3>
                            <p className="text-charcoal/70 mb-8 leading-relaxed text-sm">
                                {service.description}
                            </p>
                            {!service.disabled && (
                                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors mt-auto">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
