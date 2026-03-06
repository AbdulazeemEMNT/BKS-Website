"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Award, Zap, Shield, Target } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

const serviceDetails: Record<string, any> = {
    "communication-coaching": {
        title: "1:1 Communication Coaching",
        tagline: "Master the art of high-stakes communication.",
        description: "Private coaching designed to help professionals communicate with clarity, authority, and confidence. Our 1:1 sessions are tailored to your specific professional challenges, from boardroom presentations to media appearances.",
        benefits: [
            "Executive Presence & Gravitas",
            "Persuasive Storytelling Techniques",
            "Public Speaking & Presentation Skills",
            "Interpersonal Influence & Conflict Resolution"
        ],
        icon: <Target className="w-12 h-12 text-accent" />
    },
    "corporate-training": {
        title: "Corporate & Team Training",
        tagline: "Build a culture of effective communication.",
        description: "Structured communication and leadership training designed for organizations that want stronger teams. We help teams align their messaging and improve collaboration through practical, evidence-based frameworks.",
        benefits: [
            "Team Synergy & Alignment",
            "Leadership Communication Frameworks",
            "Internal Communication Optimization",
            "Organizational Storytelling"
        ],
        icon: <Shield className="w-12 h-12 text-accent" />
    },
    "workshops-webinars": {
        title: "Workshops & Webinars",
        tagline: "Practical learning for the modern professional.",
        description: "Practical learning sessions designed to help professionals develop communication intelligence in a collaborative environment. Our workshops are intensive, interactive, and focused on immediate application.",
        benefits: [
            "Interactive Skill-Building",
            "Networking with Peers",
            "Actionable Toolkits & Templates",
            "Modern Communication Trends"
        ],
        icon: <Zap className="w-12 h-12 text-accent" />
    },
    "speaking-facilitation": {
        title: "Speaking & Facilitation",
        tagline: "Engage, inspire, and lead.",
        description: "Professional facilitation for organizations and leadership events focused on communication excellence. We bring energy and structure to your events, Ensuring that key messages resonate and drive action.",
        benefits: [
            "Keynote Speaking",
            "Strategic Retreat Facilitation",
            "Panel Moderation",
            "Event Hosting"
        ],
        icon: <Award className="w-12 h-12 text-accent" />
    }
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const { openModal } = useModal();

    const service = serviceDetails[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-secondary">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold text-primary mb-4">Service Not Found</h1>
                    <Link href="/#services" className="text-accent hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-secondary min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Link href="/#services" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-primary transition-colors mb-12">
                    <ArrowLeft size={18} /> Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8 w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                            {service.icon}
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-accent font-medium mb-8">
                            {service.tagline}
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
                            {service.description}
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(11, 61, 46, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={openModal}
                            className="bg-primary text-secondary px-10 py-5 rounded-sm font-bold text-lg transition-all shadow-xl"
                        >
                            Apply Now & Start Coaching
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-10 md:p-16 rounded-sm shadow-2xl border border-primary/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16" />

                        <h3 className="font-display text-2xl font-bold text-primary mb-10 border-b border-primary/10 pb-4">Key Benefits</h3>

                        <ul className="space-y-6">
                            {service.benefits.map((benefit: string, index: number) => (
                                <li key={index} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                                    <span className="text-lg text-charcoal/80 font-light">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-16 p-8 bg-secondary/30 rounded-sm italic text-charcoal/70 text-sm leading-relaxed border-l-2 border-accent">
                            Each program is structured around the BINT KAMAL SOLACE framework for sustainable excellence, ensuring that growth is not just immediate, but permanent.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
