"use client";
import { useEffect, useRef } from "react";
import { useRedThread } from "@/hooks/useRedThread";

export default function Footer() {
    const pinRef = useRef<HTMLDivElement>(null);
    const { register, unregister } = useRedThread();

    useEffect(() => {
        if (pinRef.current) register("footer-end", pinRef.current);
        return () => unregister("footer-end");
    }, [register, unregister]);

    return (
        <footer className="w-full py-16 bg-[#050505] mt-32 flex flex-col items-center justify-center relative border-t border-red-900/30 overflow-hidden">
            {/* Background Texture - Subtle */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/black-linen.png")` }}></div>

            {/* Stamped Title */}
            <div ref={pinRef} className="relative z-10 text-center mb-16 rotate-[-2deg]">
                <div className="border-4 border-red-900/40 p-4 rounded-sm inline-block">
                    <p className="font-header text-4xl md:text-5xl text-red-900/60 tracking-[0.2em] uppercase font-bold mix-blend-screen px-4">
                        CASE CLOSED
                    </p>
                </div>
            </div>

            {/* Contact Icons - Clean & Wide */}
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16 relative z-10 px-4">
                <a href="https://wa.me/919289345359" target="_blank" rel="noopener noreferrer" className="nav-item group flex flex-col items-center gap-3">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110">📞</div>
                    <span className="text-[10px] font-mono text-gray-600 group-hover:text-green-500 uppercase tracking-widest transition-colors">WhatsApp</span>
                </a>

                <a href="mailto:itzconfidentialofficial@gmail.com" className="nav-item group flex flex-col items-center gap-3">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110">✉️</div>
                    <span className="text-[10px] font-mono text-gray-600 group-hover:text-blue-500 uppercase tracking-widest transition-colors">Email</span>
                </a>

                <a href="https://instagram.com/itz.confidential" target="_blank" rel="noopener noreferrer" className="nav-item group flex flex-col items-center gap-3">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110">📸</div>
                    <span className="text-[10px] font-mono text-gray-600 group-hover:text-pink-500 uppercase tracking-widest transition-colors">Instagram</span>
                </a>

                <div className="nav-item group flex flex-col items-center gap-3 opacity-40 cursor-not-allowed">
                    <div className="text-3xl grayscale">👍</div>
                    <span className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">Facebook</span>
                </div>
            </div>

            <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

            <p className="font-mono text-[10px] text-gray-600 text-center relative z-10">
                © 2025 Itz Confidential. All Rights Reserved.
            </p>
        </footer>
    );
}
