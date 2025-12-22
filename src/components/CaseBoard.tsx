"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import CaseFile from "./CaseFile";
// Define the Case type based on the data in page.tsx
export type CaseData = {
    id: string;
    title: string;
    summary: string;
    difficulty: number;
    players: string;
};

interface CaseBoardProps {
    cases: CaseData[];
}

export default function CaseBoard({ cases }: CaseBoardProps) {
    const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <section className="w-full max-w-5xl px-4 flex flex-col gap-16 md:gap-48 items-center relative z-20 mt-12 mb-32">
                {cases.map((c, index) => (
                    <div
                        key={c.id}
                        className={`w-full flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}
                        onClick={() => setSelectedCase(c)} // Add click handler
                    >
                        {/* We add a wrapper div to capture clicks but keep the CaseFile clean */}
                        <div className="cursor-pointer group">
                            <CaseFile {...c} />
                        </div>
                    </div>
                ))}
            </section>

            {/* Case Dossier Modal - Portaled to Body to escape stacking contexts */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedCase && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedCase(null)}
                        >
                            <motion.div
                                initial={{ y: 100, rotateX: -10, scale: 0.9 }}
                                animate={{ y: 0, rotateX: 0, scale: 1 }}
                                exit={{ y: 100, rotateX: 10, scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 20 }}
                                className="bg-[#F5F5DC] text-black w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm p-4 md:p-8 relative shadow-2xl overflow-hidden scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-transparent"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    backgroundImage: "repeating-linear-gradient(#F5F5DC 0px, #F5F5DC 24px, #E8E8D0 25px)",
                                    backgroundSize: "100% 25px"
                                }}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedCase(null)}
                                    className="absolute top-4 right-4 z-50 p-2 text-red-900/60 hover:text-red-900 hover:bg-red-900/10 rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                {/* Folder Tab - Hidden on mobile to save space */}
                                <div className="absolute -top-6 left-0 w-1/3 h-10 bg-[#E8E8C0] rounded-t-lg border-t border-l border-r border-[#D0D0B0] hidden md:block">
                                    <span className="absolute bottom-1 left-4 font-mono text-xs text-gray-600 uppercase">
                                        CONFIDENTIAL // {selectedCase.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 font-typewriter">
                                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-8 border-b-2 border-black/10 pb-4 gap-4 md:gap-0">
                                        <div className="w-full">
                                            <h2 className="text-xl md:text-3xl font-header uppercase tracking-wider text-red-900 mb-2 leading-tight">{selectedCase.title}</h2>
                                            <div className="flex flex-wrap gap-2 md:gap-4 font-mono text-xs md:text-sm text-gray-600">
                                                <span>DIFFICULTY: {selectedCase.difficulty}/5</span>
                                            </div>
                                        </div>
                                        <div className="rotate-[-2deg] md:rotate-[-10deg] border-2 md:border-4 border-red-800 text-red-800 p-1 md:p-2 font-black text-sm md:text-xl uppercase opacity-60 mask-ink self-end md:self-auto">
                                            TOP SECRET
                                        </div>
                                    </div>

                                    <div className="font-body text-base md:text-lg leading-relaxed md:leading-loose space-y-6">
                                        <p>{selectedCase.summary}</p>

                                        <div className="bg-white/50 p-4 md:p-6 border border-gray-300 shadow-inner rotate-1 my-6 md:my-8">
                                            <h4 className="font-bold uppercase text-xs md:text-sm mb-2 text-gray-500">Mission Briefing:</h4>
                                            <p className="italic text-sm md:text-base">
                                                "Detectives, this case has gone cold. We need fresh eyes on the evidence.
                                                The local authorities are baffled. Proceed with caution."
                                            </p>
                                        </div>

                                        <p className="text-sm md:text-base">
                                            <strong>REQUIRED PLAYERS:</strong> {selectedCase.players}
                                        </p>
                                    </div>

                                    <a
                                        href="https://forms.gle/VyBxAoxkY2Q4jD9Y6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 md:mt-8 block text-center bg-red-900 text-white px-6 md:px-8 py-3 font-mono hover:bg-black hover:!text-white transition-colors w-full uppercase tracking-widest text-sm md:text-base"
                                    >
                                        Submit Assignment
                                    </a>
                                </div>

                                {/* Paper Texture Overlay */}
                                <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
