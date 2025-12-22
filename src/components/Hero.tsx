"use client";
import { useState, useEffect, useRef } from "react";
import { useRedThread } from "@/hooks/useRedThread";
import { motion } from "framer-motion";

export default function Hero() {
    const pinRef = useRef<HTMLDivElement>(null);
    const { register, unregister } = useRedThread();

    // Flashlight Effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    useEffect(() => {
        if (pinRef.current) {
            register("hero-start", pinRef.current);
        }
        return () => unregister("hero-start");
    }, [register, unregister]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative p-8 overflow-hidden">
            {/* Flashlight Overlay */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-10 opacity-40 mix-blend-soft-light"
                animate={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
                }}
            />

            <div className="max-w-5xl text-center z-20 relative">
                {/* Decorative Top Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="w-32 h-1 bg-[var(--color-evidence-red)] mx-auto mb-8"
                />

                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-mono text-[var(--color-evidence-red)] mb-6 uppercase text-sm md:text-base font-bold"
                >
                    Case File #2025-X
                </motion.p>

                <div className="relative inline-block mb-8 group">
                    <motion.h1
                        className="font-header text-6xl md:text-9xl text-[var(--color-evidence-red)] uppercase tracking-tighter relative z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Itz Confidential
                    </motion.h1>

                    {/* Glitch Overlay Text */}
                    <motion.h1
                        className="absolute inset-0 font-header text-6xl md:text-9xl text-[var(--color-evidence-red)] uppercase tracking-tighter z-20 opacity-50 pointer-events-none mix-blend-screen"
                        animate={{
                            x: [-2, 2, -1, 3, 0],
                            opacity: [0.5, 0.8, 0.4, 0.9, 0.5],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                        style={{
                            clipPath: "inset(50% 0 0 0)"
                        }}
                    >
                        Itz Confidential
                    </motion.h1>
                    <motion.h1
                        className="absolute inset-0 font-header text-6xl md:text-9xl text-cyan-500 uppercase tracking-tighter z-20 opacity-30 pointer-events-none mix-blend-color-dodge"
                        animate={{
                            x: [2, -2, 1, -3, 0],
                            y: [1, -1, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 5,
                        }}
                    >
                        Itz Confidential
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 1 }}
                    className="font-body text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-300 relative"
                >
                    <span className="absolute -left-4 -top-4 text-4xl text-gray-700 opacity-20">"</span>
                    <p>
                        The truth is hidden in the silence.
                        <br className="hidden md:block" />
                        Only the observant will survive the night.
                    </p>
                    <span className="absolute -right-4 -bottom-4 text-4xl text-gray-700 opacity-20">"</span>
                </motion.div>
            </div>

            {/* The Starting Pin for the Red Thread */}
            <motion.div
                className="mt-32 relative cursor-pointer group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.2 }}
            >
                <div ref={pinRef} className="w-6 h-6 rounded-full bg-red-700 shadow-[0_0_20px_rgba(255,0,0,1)] border-2 border-white/50 relative z-10 group-hover:bg-red-600 transition-colors"></div>
                <div className="absolute top-1/2 left-1/2 bg-gradient-to-b from-black/80 via-transparent to-black/80 w-12 h-12 bg-red-600/20 rounded-full animate-ping"></div>

                <p className="absolute top-10 left-1/2 -translate-x-1/2 font-mono text-xs text-red-500 uppercase whitespace-nowrap tracking-[0.2em] group-hover:text-red-400 transition-colors">
                    Start Investigation
                </p>

            </motion.div>
        </section >
    );
}
