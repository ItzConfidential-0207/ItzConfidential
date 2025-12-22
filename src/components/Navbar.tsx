"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/detectives", label: "For The Detectives" },
        { href: "/about", label: "About Us" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-[var(--color-void-black)]/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
                {/* Logo Area (Left) */}
                <Link href="/" className="group flex items-center gap-2 focus-ring rounded-sm">
                    <Image
                        src="/itz-logo-v2.png"
                        alt="ITZ Confidential"
                        width={90}
                        height={30}
                        className="w-20 md:w-24 object-contain drop-shadow-[0_0_5px_rgba(255,0,0,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all duration-300"
                    />
                </Link>

                {/* Desktop Menu (Right) */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="font-mono text-sm uppercase tracking-wider text-gray-300 hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all relative group focus-ring rounded-sm px-1"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-evidence-red)] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 z-[110] p-2 focus-ring rounded-sm"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-white origin-center"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-white origin-center"
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-header text-xl text-gray-300 hover:text-[var(--color-evidence-red)] tracking-widest uppercase transition-colors focus-ring rounded-sm px-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
