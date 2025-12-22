"use client";
import { useState, useEffect, useRef } from "react";
import { useRedThread } from "@/hooks/useRedThread";
import { motion } from "framer-motion";

export default function Hero() {
    const pinRef = useRef<HTMLDivElement>(null);
    const { register, unregister } = useRedThread();

    // Flashlight Effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        // Check if device has a fine pointer (mouse)
        const checkDevice = () => {
            setIsTouchDevice(!window.matchMedia("(pointer: fine)").matches);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        if (!isTouchDevice) {
            window.addEventListener("mousemove", updateMousePosition);
        }

        return () => {
            window.removeEventListener("resize", checkDevice);
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [isTouchDevice]);

    useEffect(() => {
        if (pinRef.current) {
            register("hero-start", pinRef.current);
        }
        return () => unregister("hero-start");
    }, [register, unregister]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative p-8 md:p-20 overflow-hidden space-y-12 md:space-y-24">
            {/* Flashlight Overlay - Only on desktop */}
            {!isTouchDevice && (
                <motion.div
                    className="pointer-events-none fixed inset-0 z-10 opacity-40 mix-blend-soft-light"
                    animate={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
                    }}
                />
            )}

            <div className="max-w-6xl text-center z-20 relative flex flex-col items-center gap-4 md:gap-4">
                {/* Decorative Top Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 md:w-32 h-1 bg-[var(--color-evidence-red)]"
                />

                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-mono text-[var(--color-evidence-red)] uppercase text-sm md:text-lg font-bold"
                >
                    Case File #2025-X
                </motion.p>

                <div className="relative inline-block group">
                    <motion.h1
                        className="font-header text-5xl sm:text-7xl md:text-[10rem] uppercase tracking-tighter relative z-10 leading-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#D90429]">Itz</span> <span className="text-white">Confidential</span>
                    </motion.h1>

                    {/* Glitch Overlay Text - Desktop Only */}
                    <motion.h1
                        className="hidden md:block absolute inset-0 font-header text-5xl sm:text-7xl md:text-[10rem] uppercase tracking-tighter z-20 opacity-50 pointer-events-none mix-blend-screen leading-none"
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
                        <span className="text-[#D90429]">Itz</span> <span className="text-white">Confidential</span>
                    </motion.h1>
                    <motion.h1
                        className="hidden md:block absolute inset-0 font-header text-5xl sm:text-7xl md:text-[10rem] text-cyan-500 uppercase tracking-tighter z-20 opacity-30 pointer-events-none mix-blend-color-dodge leading-none"
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
                        <span className="text-[#D90429]">Itz</span> <span className="text-white">Confidential</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 1 }}
                    className="font-body text-base sm:text-lg md:text-3xl max-w-5xl mx-auto leading-loose text-gray-300 relative text-center px-4 md:px-0"
                >
                    <span className="absolute -left-4 md:-left-12 -top-6 md:-top-8 text-4xl md:text-6xl text-gray-700 opacity-20 hidden md:inline">"</span>
                    <p className="py-2">
                        A crime unsolved. A world waiting. Step in and become the detective
                    </p>
                    <span className="absolute -right-4 md:-right-12 -bottom-4 md:-bottom-8 text-4xl md:text-6xl text-gray-700 opacity-20 hidden md:inline">"</span>
                </motion.div>
            </div>

            <motion.div
                className="relative cursor-pointer group pt-8 md:pt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.2 }}
            >
                <div ref={pinRef} className="w-8 h-8 rounded-full bg-red-700 shadow-[0_0_20px_rgba(255,0,0,1)] border-2 border-white/50 relative z-10 group-hover:bg-red-600 transition-colors"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-black/80 via-transparent to-black/80 w-16 h-16 bg-red-600/20 rounded-full animate-ping"></div>

                <p className="absolute top-14 left-1/2 -translate-x-1/2 font-mono text-sm text-red-500 uppercase whitespace-nowrap tracking-[0.2em] group-hover:text-red-400 transition-colors">
                    Start Investigation
                </p>

            </motion.div>
        </section >
    );
}
