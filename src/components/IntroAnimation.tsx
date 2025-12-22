"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Check if user has already seen the intro in this session
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

        if (hasSeenIntro) {
            setIsVisible(false);
            setMounted(true);
            return;
        }

        setMounted(true);
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "unset";
            sessionStorage.setItem("hasSeenIntro", "true");
        }, 4000);

        return () => {
            document.body.style.overflow = "unset";
            clearTimeout(timer);
        };
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Background Ambience */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(50,0,0,0.2)_0%,_#000000_70%)]" />

                    {/* Multiple "Netflix-style" Beams - Optimized for Mobile */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "200vh", opacity: [0, 0.6, 0] }}
                                transition={{
                                    duration: 0.6 + Math.random() * 0.4,
                                    delay: 0.1 + Math.random() * 0.4,
                                    ease: "circOut",
                                    times: [0, 0.1, 1]
                                }}
                                className="absolute bg-red-600/40 blur-sm"
                                style={{
                                    width: Math.random() > 0.5 ? "2px" : "6px",
                                    left: `${(i * 100 / 8) + (Math.random() * 5)}%`, // Distribute across width
                                    top: "50%",
                                    transform: `translate(-50%, -50%) rotate(${15 + Math.random() * 20}deg)`,
                                    background: Math.random() > 0.5 ? "#DC2626" : "#991B1B",
                                    boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)"
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        exit={{ scale: 10, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Main Title Container */}
                        <div className="flex flex-col items-center gap-4 relative">
                            {/* ITZ */}
                            <motion.h1
                                initial={{ scale: 3, opacity: 0, letterSpacing: "1em", filter: "blur(10px)" }}
                                animate={{ scale: 1, opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1], // Expo out
                                    delay: 0.2
                                }}
                                className="font-header text-5xl md:text-9xl text-red-600 font-bold tracking-widest drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] z-20"
                            >
                                ITZ
                            </motion.h1>

                            {/* CONFIDENTIAL */}
                            <motion.div
                                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                                transition={{ duration: 0.8, delay: 1.2, ease: "circIn" }}
                                className="relative overflow-hidden py-2 px-10"
                            >
                                <h2 className="font-mono text-2xl md:text-4xl text-white uppercase tracking-[0.5em] font-bold relative z-10">
                                    Confidential
                                </h2>
                                {/* Animated scan line */}
                                <motion.div
                                    initial={{ left: "-100%" }}
                                    animate={{ left: "100%" }}
                                    transition={{ duration: 1, delay: 1.4, repeat: 2 }}
                                    className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
