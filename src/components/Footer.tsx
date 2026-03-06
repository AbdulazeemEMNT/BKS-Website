"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-secondary py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                <div className="md:col-span-2 space-y-6">
                    <Link href="/" className="font-display text-2xl font-bold tracking-wide text-accent">
                        BINT KAMAL SOLACE
                    </Link>
                    <p className="text-secondary/70 max-w-sm text-sm leading-relaxed">
                        Communication Coaching. Leadership Development. Professional Training.
                        Empowering professionals to lead with clarity and competence.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="font-display font-semibold text-lg text-secondary">Quick Links</h4>
                    <ul className="space-y-3">
                        {["About", "Programs", "Coaching", "Contact"].map((item) => (
                            <li key={item}>
                                <Link href={`/${item.toLowerCase() === 'coaching' ? 'coaching' : '#' + item.toLowerCase()}`} className="text-sm text-secondary/70 hover:text-accent transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="font-display font-semibold text-lg text-secondary">Newsletter</h4>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                        Insights on leadership and communication, delivered to your inbox.
                    </p>
                    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-b border-secondary/30 pb-2 text-sm outline-none focus:border-accent transition-colors w-full placeholder:text-secondary/40 text-secondary"
                        />
                        <button type="submit" className="text-accent hover:text-white transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-secondary/50">
                    © {new Date().getFullYear()} Bint Kamal Solace Ltd. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <Link href="#" className="text-xs text-secondary/50 hover:text-accent transition-colors">LinkedIn</Link>
                    <Link href="#" className="text-xs text-secondary/50 hover:text-accent transition-colors">Twitter</Link>
                </div>
            </div>
        </footer>
    );
}
