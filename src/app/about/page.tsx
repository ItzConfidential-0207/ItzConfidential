"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Phone, Mail, Instagram, Youtube } from "lucide-react";

export default function AboutPage() {
    return (
        <main
            className="min-h-screen w-full bg-[#050505] text-gray-300 font-mono relative overflow-hidden flex flex-col items-center p-4 pb-20"
            style={{ paddingTop: '100px' }}
        >
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#222 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            ></div>

            {/* Red Beam/Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 via-transparent to-transparent pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full bg-[#111] border border-gray-800 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] mt-5 p-5 md:p-14 lg:p-16"
            >
                {/* Header Stamp */}
                <div className="absolute top-8 right-8 border-4 border-gray-700/50 rounded-sm p-2 rotate-[10deg] opacity-50 pointer-events-none hidden md:block">
                    <p className="text-gray-500 font-black text-xl uppercase tracking-widest leading-none text-center">
                        AGENCY<br />PROFILE
                    </p>
                </div>

                <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

                    {/* Section 1: Contact Us / Mission */}
                    <section className="space-y-8">
                        <h1 className="text-3xl md:text-5xl text-white font-header tracking-widest mb-8">
                            CONTACT US
                        </h1>
                        <div className="h-[1px] w-32 bg-red-600 mb-12"></div>

                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-8 text-lg leading-relaxed text-gray-400">
                                <p>
                                    <span className="text-white font-bold">Hello Detective,</span>
                                </p>
                                <p>
                                    We hope <span className="text-red-500 font-bold">ITZ Confidential</span> has provided you with a truly immersive, real-life detective experience. Our mission is to put you in the shoes of an investigator, challenging your mind to piece together the truth from the shadows.
                                </p>
                            </div>

                            <div className="bg-black/40 border border-gray-800 p-10 rounded-lg">
                                <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-6 border-b border-gray-800 pb-2">
                                    Get In Touch
                                </h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    Whether you have a query about a case, a delivery, or a potential collaboration, our team is ready to assist you:
                                </p>
                                <ul className="space-y-4 text-base">
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-white" />
                                        <a href="https://wa.me/919289345359" className="text-gray-300 hover:text-white transition-colors">9289345359</a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-white" />
                                        <a href="mailto:itzconfidentialofficial@gmail.com" className="text-gray-300 hover:text-white transition-colors truncate">itzconfidentialofficial@gmail.com</a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Instagram className="w-5 h-5 text-white" />
                                        <a href="https://www.instagram.com/itzconfidentialofficial?igsh=bDN4YTFkYjQ1YjYx&utm_source=qr" target="_blank" className="text-gray-300 hover:text-white transition-colors">@itz.confidential</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Our Journey */}
                    <section className="space-y-8 border-t border-gray-800" style={{ paddingTop: '80px', marginTop: '80px' }}>
                        <h2 className="text-2xl md:text-3xl text-white font-header tracking-widest mb-8">
                            OUR JOURNEY
                        </h2>

                        <div className="text-lg leading-relaxed text-gray-400 space-y-8 max-w-4xl">
                            <p>
                                The investigation began on <span className="text-white">April 1st, 2025</span>, when we dispatched our very first case file. Since that day, we have delivered over <span className="text-red-500 font-bold">5,000+ unsolved crime cases</span> to detectives across the country.
                            </p>
                            <p>
                                The response from the community has been overwhelming. Don’t just take our word for it; you can browse through numerous testimonials and customer reviews on our Instagram Highlights.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Founder Profile */}
                    <section className="space-y-8 border-t border-gray-800" style={{ paddingTop: '80px', marginTop: '80px' }}>
                        <h2 className="text-2xl md:text-3xl text-white font-header tracking-widest mb-8">
                            THE FOUNDER
                        </h2>

                        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-black opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border md:border-2 border-gray-800 sepia-[.2] contrast-125 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src="/about/founder.jpg"
                                        alt="Muskan Khanna"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4px_4px] opacity-20 pointer-events-none"></div>
                                </div>
                                <p className="text-center mt-4 text-sm font-mono text-gray-200 uppercase tracking-widest">
                                    Muskan Khanna<br />
                                    <span className="text-xs text-red-500 font-bold">Founder</span>
                                </p>
                            </div>

                            <div className="space-y-8 text-lg leading-relaxed text-gray-400">
                                <h3 className="text-2xl text-white font-bold uppercase tracking-wider mb-2">
                                    Muskan Khanna
                                </h3>
                                <p>
                                    Muskan Khanna is the visionary behind <span className="text-white">ITZ Confidential</span>. As a dedicated storyteller and content creator, she has built a massive community centered around her passion for mystery, horror, and dark real-life incidents.
                                </p>
                                <p>
                                    Muskan specializes in <span className="text-white">deep-dive narrations</span> that explore the psychological details of unsolved mysteries. Her unique ability to weave suspense into every detail is what makes our case files so authentic and gripping.
                                </p>
                                <p>
                                    Beyond digital storytelling, Muskan is an accomplished writer. Having already made her mark in the literary world, she is currently an author working on her <span className="text-white">2nd book</span>, bringing her love for dark narratives to the printed page.
                                </p>

                                <div className="bg-black/40 border border-gray-800 p-6 rounded-lg mt-12">
                                    <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-8 border-b border-gray-800 pb-2">
                                        Connect with Muskan
                                    </h4>
                                    <ul className="grid sm:grid-cols-2 gap-4 text-base">
                                        <li className="flex items-center gap-2">
                                            <Instagram className="w-5 h-5 text-white" />
                                            <a href="https://www.instagram.com/muskanarrates" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">@muskanarrates</a>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Youtube className="w-5 h-5 text-white" />
                                            <a href="https://youtube.com/@muskanarrates?si=43rw1ht1XUSwBMe5" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">YouTube: Muskan Khanna</a>
                                        </li>
                                        <li className="flex items-center gap-2 col-span-2">
                                            <Mail className="w-5 h-5 text-white" />
                                            <a href="mailto:muskankhanna2023@gmail.com" className="text-gray-300 hover:text-white transition-colors">muskankhanna2023@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

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
