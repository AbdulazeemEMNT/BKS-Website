"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-secondary text-primary">
            <div className="text-center max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl font-display font-bold text-accent mb-4">404</h1>
                    <h2 className="text-3xl font-display font-bold mb-6 italic">Page Not Found</h2>
                    <p className="text-charcoal/70 mb-10 leading-relaxed font-light">
                        The resource you are looking for does not exist or has been moved to a new destination.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-sm font-semibold hover:bg-primary/95 transition-all shadow-lg"
                    >
                        <ArrowLeft size={20} /> Return Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
