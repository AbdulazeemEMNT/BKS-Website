"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openModal } = useModal();


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Programs", href: "/#programs" },
        { name: "Coaching", href: "/coaching" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-sm border-b border-primary/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                <Link href="/" className="font-display text-xl md:text-2xl font-bold text-primary tracking-wide">
                    BINT KAMAL SOLACE
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-charcoal/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(198, 167, 94, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openModal}
                        className="bg-primary text-secondary px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-primary/95 transition-all shadow-md hover:shadow-lg"
                    >
                        Book Coaching
                    </motion.button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-t border-primary/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6 shadow-xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-charcoal hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    openModal();
                                }}
                                className="bg-primary text-secondary px-6 py-3 rounded-sm text-base font-medium mt-4 shadow-md text-left"
                            >
                                Book Coaching
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
