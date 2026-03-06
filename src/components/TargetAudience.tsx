"use client";

import { CheckCircle2 } from "lucide-react";

export function TargetAudience() {
    const values = [
        "Clarity in Communication",
        "Professional Competence",
        "Continuous Development",
        "Structured Learning"
    ];

    return (
        <section className="py-24 md:py-32 bg-primary text-secondary">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                            Designed for Professionals Who Take Growth Seriously.
                        </h2>
                        <p className="text-secondary/80 text-lg leading-relaxed mb-10">
                            We work with individuals and organizations that understand that leadership and communication are not optional skills, but the foundation of professional impact.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                            {values.map((value, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                                    <span className="font-medium text-sm tracking-wide">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />

                        <h3 className="font-display text-2xl font-semibold mb-8 border-b border-white/10 pb-4">
                            Who We Work With
                        </h3>

                        <ul className="space-y-6 text-secondary/90">
                            <li className="flex flex-col">
                                <span className="text-lg font-medium text-accent">Executives & Leaders</span>
                                <span className="text-sm opacity-70">Developing leadership presence and authority.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-lg font-medium text-accent">Entrepreneurs</span>
                                <span className="text-sm opacity-70">Building influential brands and pitching with clarity.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-lg font-medium text-accent">Organizations</span>
                                <span className="text-sm opacity-70">Strengthening internal leadership capacity and team alignment.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-lg font-medium text-accent">Driven Professionals</span>
                                <span className="text-sm opacity-70">Age 22–45+ committed to long-term career excellence.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
