"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Instagram } from "lucide-react";

export default function EventsPage() {
    // Duplicate the reels array to create a seamless loop
    const reels = [
        { id: 1, type: 'reel', url: "https://www.instagram.com/reel/DQjdtfAE-Ow/?igsh=bWFqY2xidGZjbWts" },
        { id: 2, type: 'reel', url: "https://www.instagram.com/reel/DQUO4UPgTc3/?igsh=MW82dXJwNWJqbThtZg==" },
        { id: 3, type: 'reel', url: "https://www.instagram.com/reel/DRPcp5sgQVQ/?igsh=MWE1dm5ra2w1M3NxbA==" },
        // Local placeholders
        { id: 4, type: 'image-local', url: "/events/placeholder1.png", label: "Mystery Dinner" },
        { id: 5, type: 'image-local', url: "/events/placeholder2.png", label: "Evidence Board" },
        // Imported Media - Horror Con
        { id: 6, type: 'video-local', url: "/events/horrorcon/1.MOV", label: "Horror Con Highlights" },
        { id: 7, type: 'video-local', url: "/events/horrorcon/2.MOV", label: "Suspect Interrogation" },
        { id: 8, type: 'image-local', url: "/events/horrorcon/3.JPG", label: "Crime Scene Evidence" },
        { id: 9, type: 'video-local', url: "/events/horrorcon/4.MOV", label: "Forensic Analysis" },
        { id: 10, type: 'video-local', url: "/events/horrorcon/5.MOV", label: "The Reveal" },
        { id: 11, type: 'video-local', url: "/events/horrorcon/storytelling%20on%20event%202.MOV", label: "Storytelling Session" },
        { id: 12, type: 'video-local', url: "/events/horrorcon/storytelling%20on%20event.MOV", label: "The Setup" },
        // Imported Media - MyBar
        { id: 13, type: 'image-local', url: "/events/myBar/IMG_5158.JPG", label: "MyBar Event 1" },
        { id: 14, type: 'image-local', url: "/events/myBar/IMG_5159.JPG", label: "MyBar Event 2" },
        { id: 15, type: 'image-local', url: "/events/myBar/IMG_5161.JPG", label: "MyBar Event 3" },
        { id: 16, type: 'image-local', url: "/events/myBar/IMG_5170.JPG", label: "MyBar Event 4" },
        { id: 17, type: 'image-local', url: "/events/myBar/IMG_5171.JPG", label: "MyBar Event 5" },
    ];

    const marqueeContent = [...reels, ...reels, ...reels]; // Triple for safety

    return (
        <main className="min-h-screen bg-[#050505] text-gray-300 font-mono relative overflow-hidden flex flex-col items-center" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
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

            <div
                className="max-w-6xl w-full bg-[#111] border border-gray-800 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] mt-5 p-5 md:p-14 lg:p-16"
            >
                {/* Confidential Stamp */}
                <div className="absolute top-8 right-8 border-4 border-red-900/30 rounded-sm p-2 rotate-[-12deg] opacity-60 pointer-events-none hidden md:block z-20">
                    <p className="text-red-900/40 font-black text-xl uppercase tracking-widest leading-none text-center">
                        RESTRICTED<br />ACCESS
                    </p>
                </div>
                <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

                    {/* 1. Hero Section */}
                    <section className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl md:text-5xl text-white font-header tracking-widest mb-8 uppercase">
                                Corporate<br />Get-togethers<br />& Events
                            </h1>
                            <div className="h-[1px] w-32 bg-red-600 mb-8"></div>

                            <p className="text-xl md:text-2xl text-red-500 font-bold uppercase tracking-widest">
                                Turn Your Next Event into a Crime Scene <span className="text-white">(The Good Kind!)</span>
                            </p>
                        </motion.div>
                    </section>

                    {/* 2. Value Proposition */}
                    <section className="space-y-8" style={{ marginTop: '0px' }}>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-4xl">
                            Traditional corporate parties are often just small talk and canapes. We change that.
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-white">
                            We bring the mystery to you.
                        </p>
                        <div className="w-24 h-1 bg-red-600 mt-8"></div>
                    </section>

                    {/* 3. The Founder Section */}
                    <section className="relative" style={{ marginTop: '80px' }}>
                        {/* Section Label */}
                        <div className="absolute -top-10 left-0 text-6xl text-gray-800/20 font-black uppercase pointer-events-none select-none">
                            Founder
                        </div>

                        <div className="bg-[#111] border border-gray-800 p-8 md:p-16 rounded-lg relative overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                {/* Text Content */}
                                <div className="space-y-8 order-2 md:order-1">
                                    <h2 className="text-3xl md:text-5xl text-white font-bold uppercase leading-none">
                                        Host Your Event with Our Founder,<br />
                                        <span className="text-red-500">Muskan Khanna</span>
                                    </h2>
                                    <ul className="space-y-6 text-lg text-gray-400">
                                        <li className="flex items-start gap-4">
                                            <span className="text-red-500 text-xl">01</span>
                                            <div>
                                                <strong className="text-white block mb-1">A Guest with a Story</strong>
                                                Experience the thrill of having a dedicated storyteller guide your team through the mystery.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="text-red-500 text-xl">02</span>
                                            <div>
                                                <strong className="text-white block mb-1">The Joy of Group Solving</strong>
                                                Foster collaboration and communication as your team works together to crack the case.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="text-red-500 text-xl">03</span>
                                            <div>
                                                <strong className="text-white block mb-1">A Social Memory</strong>
                                                Create an unforgettable shared experience that will be talked about long after the event ends.
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Photo Placeholder */}
                                <div className="order-1 md:order-2 relative aspect-[3/4] w-full max-w-md mx-auto bg-gray-900 border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center text-center group overflow-hidden border-none text-gray-500">
                                    <Image
                                        src="/about/founder.jpg"
                                        alt="Muskan Khanna at an event"
                                        fill
                                        className="object-cover sepia-[.2] contrast-125 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Overlay Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4px_4px] opacity-20 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Infinite Media Tape */}
                    <section className="-mx-5 md:-mx-14 lg:-mx-16 relative" style={{ marginTop: '80px' }}>
                        <div className="bg-yellow-400/10 border-y-4 border-yellow-500 py-12 relative overflow-hidden">
                            {/* Film Strip Holes */}
                            <div className="absolute top-2 left-0 w-full h-4 bg-[url('/film-holes.png')] opacity-50 bg-repeat-x"></div>
                            <div className="absolute bottom-2 left-0 w-full h-4 bg-[url('/film-holes.png')] opacity-50 bg-repeat-x"></div>

                            <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold px-4 py-1 z-20 text-xs uppercase tracking-widest">
                                Evidence Tape // Do Not Cross
                            </div>

                            <div className="flex overflow-hidden">
                                <motion.div
                                    className="flex gap-8 px-8"
                                    animate={{ x: ["0%", "-50%"] }} // Scroll half way since we doubled/tripled content
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 60,
                                            ease: "linear",
                                        },
                                    }}
                                    style={{ width: "max-content" }}
                                >
                                    {marqueeContent.map((item, index) => {
                                        // Helper to get embed URL
                                        const getEmbedUrl = (url: string) => {
                                            try {
                                                const urlObj = new URL(url);
                                                // Ensure it has a trailing slash before appending 'embed'
                                                const pathname = urlObj.pathname.endsWith('/') ? urlObj.pathname : `${urlObj.pathname}/`;
                                                return `${urlObj.origin}${pathname}embed`;
                                            } catch (e) {
                                                return url;
                                            }
                                        };

                                        return (
                                            <div
                                                key={`${item.id}-${index}`}
                                                className="w-[300px] h-[530px] flex-shrink-0 bg-black border-4 border-white p-2 shadow-2xl relative group"
                                            >
                                                <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                                                    {item.type === 'reel' && item.url ? (
                                                        <iframe
                                                            src={getEmbedUrl(item.url)}
                                                            className="w-full h-full object-cover"
                                                            frameBorder="0"
                                                            scrolling="no"
                                                            // @ts-expect-error: React warning requires lowercase, TS expects CamelCase
                                                            allowtransparency="true"
                                                            allow="encrypted-media"
                                                        ></iframe>
                                                    ) : item.type === 'video-local' ? (
                                                        <div className="w-full h-full relative group/card cursor-pointer">
                                                            <video
                                                                src={item.url}
                                                                className="w-full h-full object-cover"
                                                                autoPlay
                                                                muted
                                                                loop
                                                                playsInline
                                                            />
                                                            {/* Label Overlay */}
                                                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                                                                <p className="text-white font-bold uppercase tracking-widest text-sm translate-y-2 group-hover/card:translate-y-0 transition-transform">{item.label}</p>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-full h-full relative cursor-pointer group/card overflow-hidden">
                                                            {/* Image with slight zoom effect on hover */}
                                                            <img
                                                                src={item.url}
                                                                alt={item.label}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                                                style={{ filter: "sepia(0.2) contrast(1.2)" }}
                                                            />



                                                            {/* Label Overlay */}
                                                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                                                                <p className="text-white font-bold uppercase tracking-widest text-sm translate-y-2 group-hover/card:translate-y-0 transition-transform">{item.label}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Tape Effect */}
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/20 rotate-[-2deg] pointer-events-none"></div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Success Story */}
                    <section className="grid md:grid-cols-2 gap-12 items-center" style={{ marginTop: '80px' }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-red-900/20 rotate-3 rounded-lg"></div>
                            <div className="relative bg-[#1a1a1a] p-8 md:p-12 border-l-4 border-red-500 shadow-2xl">
                                <h3 className="text-2xl text-gray-400 font-bold uppercase mb-2">Success Story</h3>
                                <h2 className="text-4xl md:text-5xl text-white font-black uppercase mb-6">Horror Con</h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    "From the Stage to the Stall." We brought our A-game to the convention.
                                </p>
                                <p className="mt-6 text-lg">
                                    Resulted in the <span className="text-red-500 font-bold bg-red-500/10 px-2 py-1">highest sales of the entire event</span>, proving that people are hungry for mystery.
                                </p>
                            </div>
                        </div>
                        {/* Placeholder for event photo */}
                        <div className="relative aspect-video bg-gray-900 rounded-lg border border-gray-800 overflow-hidden group">
                            <Image
                                src="/events/horrorcon/3.JPG"
                                alt="Horror Con Event"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            {/* Overlay for mood */}
                            <div className="absolute inset-0 bg-red-900/10 pointer-events-none mix-blend-overlay"></div>
                        </div>
                    </section>

                    {/* 6. Call to Action (Footer) */}
                    <section className="text-center space-y-12 border-t border-gray-800" style={{ paddingTop: '80px', marginTop: '80px' }}>
                        <h2 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tight">
                            Ready to Solve a<br />Mystery Together?
                        </h2>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-[#222] border border-gray-700 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:border-red-500 transition-all duration-300">
                                    <Phone size={32} />
                                </div>
                                <span className="text-gray-400 font-mono tracking-wider group-hover:text-white transition-colors">WhatsApp</span>
                            </div>
                            <div className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-[#222] border border-gray-700 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:border-red-500 transition-all duration-300">
                                    <Mail size={32} />
                                </div>
                                <span className="text-gray-400 font-mono tracking-wider group-hover:text-white transition-colors">Email</span>
                            </div>
                            <div className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-[#222] border border-gray-700 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:border-red-500 transition-all duration-300">
                                    <Instagram size={32} />
                                </div>
                                <span className="text-gray-400 font-mono tracking-wider group-hover:text-white transition-colors">@itz.confidential</span>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-600 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-600 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-600 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-600 pointer-events-none"></div>
            </div>
        </main>
    );
}
