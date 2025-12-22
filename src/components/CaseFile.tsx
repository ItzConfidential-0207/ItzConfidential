"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRedThread } from "@/hooks/useRedThread";
import { motion } from "framer-motion";

interface CaseFileProps {
    id: string;
    title: string;
    difficulty: number;
    players: string;
    summary: string;
    image?: string;
}

export default function CaseFile({ id, title, difficulty, players, summary, image }: CaseFileProps) {
    const containerRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const { register, unregister } = useRedThread();

    useEffect(() => {
        if (pinRef.current) {
            register(id, pinRef.current);
        }
        return () => unregister(id);
    }, [id, register, unregister]);

    return (
        <motion.article
            ref={containerRef}
            className="relative w-full max-w-sm bg-white p-3 pb-6 md:p-4 md:pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform md:rotate-1 md:hover:rotate-0 transition-all duration-300 ease-out flex flex-col gap-4 text-black border-[1px] border-gray-200 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
                borderRadius: '2px',
            }}
        >
            {/* Paper Texture Overlay (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] md:mix-blend-multiply z-10"></div>

            {/* The Pin Point for the Red Thread - Positioned centered at top */}
            <div
                ref={pinRef}
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-50 w-4 h-4 rounded-full bg-red-900 shadow-[0_4px_6px_rgba(0,0,0,0.3)] border border-white/30"
            >
                {/* Pin Highlight */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-white/40 rounded-full"></div>
            </div>

            {/* Tape Effect - Holding the photo */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-8 bg-[#fdfeba] opacity-90 rotate-[-2deg] shadow-sm z-40 mask-tape md:backdrop-blur-[1px] border-l border-r border-white/20"></div>

            {/* Case Stamp */}
            <div className="absolute bottom-24 right-4 border-[3px] border-red-800/70 text-red-800/70 p-2 font-header text-xs tracking-[0.2em] font-bold uppercase -rotate-12 mask-ink z-20 md:mix-blend-multiply pointer-events-none">
                Confidential
            </div>

            {/* Polaroid Image Area */}
            <div className="relative w-full aspect-square bg-[#0a0a0a] p-3 shadow-inner">
                <div className="relative w-full h-full overflow-hidden grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700">
                    <Image
                        src={image || `https://placehold.co/600x600/222/555.png?text=${encodeURIComponent(title)}`}
                        alt={`Evidence for Case: ${title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Fingerprint Overlay */}
                    <div className="absolute bottom-2 right-2 w-16 h-20 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/fingerprint.png')] mix-blend-screen pointer-events-none"></div>
                </div>
            </div>

            {/* Content Area */}
            <div className="relative z-20 pt-2 px-2">
                <div className="flex justify-between items-center font-mono text-[10px] text-gray-500 mb-2 border-b border-gray-300 pb-1">
                    <span className="uppercase tracking-widest">Case #{id}</span>
                    <span className="font-bold text-red-900/80">LEVEL {difficulty}</span>
                </div>

                <h3 className="font-header text-2xl font-black mb-2 uppercase tracking-tight text-gray-900 leading-none group-hover:text-red-900 transition-colors">
                    {title}
                </h3>

                <p className="font-body text-sm leading-relaxed text-gray-600 line-clamp-3 mb-4">
                    {summary}
                </p>

                <div className="flex items-center justify-between">
                    <div className="font-handwriting text-gray-400 text-sm transform -rotate-2">
                        Officer K.
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-3 py-1 hover:bg-red-900 transition-colors">
                        Inspect
                    </button>
                </div>
            </div>
        </motion.article>
    );
}
