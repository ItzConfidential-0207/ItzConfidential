"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DetectivesPage() {
    return (
        <main className="min-h-screen bg-black text-gray-300 font-mono relative overflow-hidden flex items-center justify-center p-4 pt-36 md:pt-48">
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#222 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            ></div>

            {/* Red Beam/Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-900/20 via-transparent to-transparent pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full bg-[#111] border border-gray-800 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] p-5 md:p-14 lg:p-16"
            >
                {/* Top Secret Stamp */}
                <div className="absolute top-8 right-8 border-4 border-red-800/50 rounded-sm p-2 rotate-[-15deg] opacity-50 pointer-events-none">
                    <p className="text-red-800/50 font-black text-xl uppercase tracking-widest leading-none text-center">
                        CONFIDENTIAL<br />COMMUNIQUE
                    </p>
                </div>

                <div className="relative z-10">
                    <div style={{ marginBottom: '50px' }}>
                        <h1 className="text-2xl md:text-4xl text-white font-header tracking-widest mb-6">
                            HELLO DETECTIVE,
                        </h1>
                        <div className="h-[1px] w-24 bg-red-600 mb-12"></div>
                    </div>

                    <div className="space-y-8 text-sm md:text-base leading-loose text-gray-400" style={{ marginBottom: '80px' }}>
                        <p>
                            We trust that your investigation has come to an end. By now, you should have
                            connected all the patterns and evidence, and identified both the culprit and
                            their motive.
                        </p>

                        <p>
                            Think you’ve cracked the case? To verify your findings and see if your assessment
                            matches the official record, please follow these steps:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2" style={{ gap: '60px' }}>
                        {/* Direct Wire Section */}
                        <div className="border border-gray-800 bg-black/40 p-10 rounded-lg hover:border-red-900/50 transition-colors group flex flex-col justify-between" style={{ padding: '40px' }}>
                            <div>
                                <h3 className="text-2xl text-white font-bold uppercase tracking-wider mb-8 flex items-center gap-3">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    Direct Wire
                                </h3>
                                <p className="text-base text-gray-400 mb-10 leading-relaxed">
                                    Need an immediate confirmation? You can reach us directly via WhatsApp for a quick answer.
                                </p>
                            </div>
                            <a
                                href="https://wa.me/919289345359"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors uppercase text-lg font-bold tracking-widest border-b-2 border-green-500/30 hover:border-green-400 w-fit"
                            >
                                Contact HQ: 9289345359 &rarr;
                            </a>
                        </div>

                        {/* Official Submission Section */}
                        <div className="border border-gray-800 bg-black/40 p-10 rounded-lg hover:border-blue-900/50 transition-colors flex flex-col justify-between" style={{ padding: '40px' }}>
                            <div>
                                <h3 className="text-2xl text-white font-bold uppercase tracking-wider mb-8">
                                    Official Submission
                                </h3>
                                <div className="text-base text-gray-400 space-y-4 mb-10 leading-relaxed">
                                    <p>1. Return to our Home Page.</p>
                                    <p>2. Select the specific case file you have been working on.</p>
                                    <p>3. Click the "Submit Your Assessment" button.</p>
                                    <p>4. Fill the details of your findings.</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 italic border-t border-gray-800 pt-8">
                                Our lead investigators will review your findings and get back to you with a formal response.
                            </p>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '100px' }}>
                        <Link
                            href="/"
                            className="inline-block px-10 py-4 bg-red-900/20 border border-red-900/50 text-red-500 hover:bg-red-900/40 hover:text-red-400 transition-all uppercase tracking-[0.5em] text-sm md:text-base font-bold"
                        >
                            Return to Case Files
                        </Link>
                    </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-600"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-600"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-600"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-600"></div>
            </motion.div>
        </main>
    );
}
