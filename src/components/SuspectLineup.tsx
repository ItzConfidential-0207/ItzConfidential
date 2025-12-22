"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRedThread } from "@/hooks/useRedThread";

// Data Definitions
type Product = {
    id: string;
    label: string;
    price: string;
    originalPrice?: string; // For discounts
    discountLabel?: string;
    count: number;
    description: string;
};

const INDIVIDUAL_CASES: Product[] = [
    { id: "001", label: "001: The Serial Killer", price: "₹599", count: 1, description: "A century-old killing spree reopens." },
    { id: "002", label: "002: The Dead Girl", price: "₹699", count: 1, description: "A locked room mystery with no escape." },
    { id: "003", label: "003: The Cursed Book", price: "₹720", count: 1, description: "Five dead. One book. No survivors." },
    { id: "004", label: "004: The Lost Teacher", price: "₹999", count: 1, description: "Dr. Sharma vanished without a trace." },
    { id: "005", label: "005: The Seventh Day", price: "₹999", count: 1, description: "Seven deaths. Seven PM. Sunday." },
    {
        id: "006",
        label: "006: The Haunted School",
        price: "₹999",
        originalPrice: "₹1200",
        discountLabel: "LIMITED TIME",
        count: 1,
        description: "The signal is active. Someone is listening."
    },
];

const BUNDLE_OFFERS: Product[] = [
    {
        id: "duo-starter",
        label: "Starter Duo",
        price: "₹999",
        count: 2,
        description: "Any 2 Games (From Case 001-003)",
        discountLabel: "SAVE BIG"
    },
    {
        id: "trilogy-pack",
        label: "The Trilogy",
        price: "₹1500",
        count: 3,
        description: "Get all 3: Serial Killer, Dead Girl, Cursed Book",
        discountLabel: "BEST SELLER"
    },
    {
        id: "heavy-hitters",
        label: "Heavy Hitters",
        price: "₹1750",
        originalPrice: "₹2000",
        count: 2,
        description: "The Lost Teacher + The Seventh Day",
        discountLabel: "COMBO DEAL"
    },
    {
        id: "quad-pack",
        label: "The Quad",
        price: "₹2199",
        count: 4,
        description: "Any 4 Games of your choice",
    },
    {
        id: "penta-pack",
        label: "The High Five",
        price: "₹2999",
        count: 5,
        description: "Any 5 Games - The Detective's Collection",
    },
    {
        id: "full-collection",
        label: "Complete Season",
        price: "₹3770",
        count: 6,
        description: "All 6 Games. The Ultimate Challenge.",
        discountLabel: "ULTIMATE"
    },
    {
        id: "custom-bundle",
        label: "Make Your Own",
        price: "CUSTOM",
        count: 1,
        description: "Pick 2+ cases. Get 25% OFF.",
        discountLabel: "YOU CHOOSE"
    },
];

const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;

export default function SuspectLineup() {
    const [activeTab, setActiveTab] = useState<"cases" | "bundles">("cases");
    const [selectedProduct, setSelectedProduct] = useState<Product>(INDIVIDUAL_CASES[5]); // Default to Haunted School
    const [selectedCustomCases, setSelectedCustomCases] = useState<string[]>([]);
    const pinRef = useRef<HTMLDivElement>(null);
    const { register, unregister } = useRedThread();

    useEffect(() => {
        if (pinRef.current) register("suspect-lineup", pinRef.current);
        return () => unregister("suspect-lineup");
    }, [register, unregister]);

    // Update selected product when switching tabs to the first item of that list
    const handleTabChange = (tab: "cases" | "bundles") => {
        setActiveTab(tab);
        setSelectedProduct(tab === "cases" ? INDIVIDUAL_CASES[0] : BUNDLE_OFFERS[1]);
    };

    const currentList = activeTab === "cases" ? INDIVIDUAL_CASES : BUNDLE_OFFERS;

    return (
        <section id="suspect-lineup" className="py-32 px-4 flex flex-col items-center relative z-20 overflow-visible">
            {/* Top Spacer */}
            <div className="w-full h-16 md:h-32" />

            <h2 className="font-header text-5xl md:text-7xl text-[var(--color-evidence-red)] uppercase tracking-widest relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center">
                The Suspect Lineup
                <div ref={pinRef} className="absolute -left-16 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-900/50 rounded-full border border-red-500/30"></div>
            </h2>

            {/* Middle Spacer */}
            <div className="w-full h-8 md:h-16" />

            {/* Tab Toggle */}
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 bg-black/40 p-2 rounded-2xl md:rounded-3xl border border-gray-800 backdrop-blur-sm z-30 w-full md:w-auto mx-4">
                {(["cases", "bundles"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`w-full md:w-auto md:min-w-[240px] px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-full font-mono text-sm md:text-lg uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 text-center ${activeTab === tab
                            ? "bg-red-900/80 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        {tab === "cases" ? "Individual Cases" : "Bundle Offers"}
                    </button>
                ))}
            </div>

            {/* Content Spacer */}
            <div className="w-full h-8 md:h-12" />

            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-16 xl:gap-32 w-full max-w-7xl z-10">
                {/* Left Side: Selection List */}
                <div className="w-full max-w-lg flex flex-col gap-4">
                    {currentList.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className={`
                                relative px-8 py-6 font-mono text-left uppercase tracking-wider transition-all duration-300
                                border backdrop-blur-sm group w-full flex items-center justify-between
                                ${selectedProduct.id === product.id
                                    ? "border-red-600 bg-red-900/10 text-red-500 scale-105 z-10 shadow-lg"
                                    : "border-gray-800 bg-black/40 text-gray-500 hover:border-gray-600 hover:text-gray-300 hover:scale-[1.02]"}
                            `}
                        >
                            <span className="text-sm md:text-lg truncate mr-4">{product.label}</span>

                            {/* Price Tag in List */}
                            <div className="flex flex-col items-end leading-none">
                                <span className={`text-lg ${selectedProduct.id === product.id ? "text-white" : "text-gray-400"}`}>
                                    {product.price}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-xs line-through opacity-50">{product.originalPrice}</span>
                                )}
                            </div>

                            {/* Active Indicator */}
                            {selectedProduct.id === product.id && (
                                <motion.div
                                    layoutId="active-glow"
                                    className="absolute inset-0 bg-red-900/5 pointer-events-none"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            {/* Discount Badge on Button */}
                            {product.discountLabel && (
                                <div className="absolute -top-3 -right-2 bg-yellow-500 text-black text-[10px] font-black px-2 py-1 shadow-md rotate-3 z-20">
                                    {product.discountLabel}
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Right Side: Visual Stacking & Big Price */}
                <div className="flex flex-col items-center w-full max-w-lg">
                    {selectedProduct.id === "custom-bundle" ? (
                        // CUSTOM BUNDLE BUILDER UI
                        <div className="w-full bg-[#d2b48c] p-6 md:p-8 border border-[#a0744b] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative rotate-1"
                            style={{
                                backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
                            }}
                        >
                            {/* Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/40 rotate-1"></div>

                            <h3 className="font-header text-3xl text-red-900 border-b-2 border-red-900/20 pb-4 mb-6 text-center">
                                CONFIDENTIAL CHECKLIST
                            </h3>

                            <div className="space-y-3 mb-8">
                                {INDIVIDUAL_CASES.map(c => (
                                    <label key={c.id} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${selectedCustomCases.includes(c.id) ? 'bg-red-900 border-red-900' : 'border-gray-600'}`}>
                                            {selectedCustomCases.includes(c.id) && <span className="text-white text-xs">✓</span>}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedCustomCases.includes(c.id)}
                                            onChange={() => {
                                                if (selectedCustomCases.includes(c.id)) {
                                                    setSelectedCustomCases(prev => prev.filter(id => id !== c.id));
                                                } else {
                                                    setSelectedCustomCases(prev => [...prev, c.id]);
                                                }
                                            }}
                                        />
                                        <span className={`font-mono text-sm ${selectedCustomCases.includes(c.id) ? 'text-gray-900 font-bold decoration-red-500/50' : 'text-gray-700'}`}>
                                            {c.label.split(":")[1] || c.label}
                                        </span>
                                        <span className="ml-auto font-mono text-xs text-gray-500">{c.price}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Calculation Area */}
                            <div className="bg-white/30 p-4 border border-dashed border-gray-500 space-y-1 font-mono text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal:</span>
                                    <span>₹{selectedCustomCases.reduce((sum, id) => sum + parsePrice(INDIVIDUAL_CASES.find(c => c.id === id)?.price || "0"), 0)}</span>
                                </div>
                                <div className="flex justify-between text-red-700">
                                    <span>Discount (25%):</span>
                                    <span>- ₹{Math.round(selectedCustomCases.reduce((sum, id) => sum + parsePrice(INDIVIDUAL_CASES.find(c => c.id === id)?.price || "0"), 0) * 0.25)}</span>
                                </div>
                                <div className="border-t border-gray-500 mt-2 pt-2 flex justify-between text-xl font-bold text-gray-900">
                                    <span>FINAL:</span>
                                    <span>₹{Math.round(selectedCustomCases.reduce((sum, id) => sum + parsePrice(INDIVIDUAL_CASES.find(c => c.id === id)?.price || "0"), 0) * 0.75)}</span>
                                </div>
                            </div>

                            <a
                                href="https://forms.gle/iGzo3JQDgiZPYuAb8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 block w-full bg-red-900 text-white text-center py-4 font-header text-xl uppercase tracking-widest hover:bg-black transition-colors"
                            >
                                Order Bundle
                            </a>

                            <p className="text-center text-[10px] text-gray-600 mt-4 uppercase tracking-wider">
                                *Select at least 2 cases for discount
                            </p>
                        </div>
                    ) : (
                        // STANDARD DISPLAY
                        <div className="flex flex-col items-center">
                            <div className="relative w-80 h-[450px] flex items-center justify-center mb-16 perspective-[1000px]">
                                <AnimatePresence mode="popLayout">
                                    {Array.from({ length: selectedProduct.count }).map((_, i) => (
                                        <motion.div
                                            key={`${selectedProduct.id}-${i}`}
                                            // Stagger the entrance for a "stacking" effect
                                            initial={{ opacity: 0, y: -50, rotateX: 20 }}
                                            animate={{
                                                opacity: 1,
                                                y: i * -4, // Stack upwards slightly
                                                x: i * 3, // Offset slightly
                                                rotateX: 0,
                                                rotateZ: (i % 2 === 0 ? 1 : -1) * (i * 1 + Math.random()), // Random slight rotation
                                                zIndex: i
                                            }}
                                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 20,
                                                delay: i * 0.05
                                            }}
                                            className="absolute w-72 h-96 bg-[#d2b48c] shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-[#a0744b] flex flex-col transform-3d top-10"
                                            style={{
                                                backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
                                            }}
                                        >
                                            {/* Top Tab */}
                                            <div className="absolute -top-4 left-0 w-24 h-6 bg-[#d2b48c] border-t border-l border-r border-[#a0744b] rounded-t-lg"></div>

                                            {/* Content - Only visible on the top-most card to save rendering cost/visual noise */}
                                            {i === selectedProduct.count - 1 && (
                                                <div className="p-8 flex flex-col h-full items-center justify-center m-2 mt-4 relative border-2 border-dashed border-[#8b5a2b]/30 overflow-hidden">
                                                    {/* Watermark Logo */}
                                                    <img
                                                        src="/itz-logo-v2.png"
                                                        alt="Watermark"
                                                        className="absolute w-44 opacity-20 rotate-[-30deg]"
                                                    />

                                                    <div className="absolute top-4 right-4 w-14 h-14 rounded-full border-4 border-red-800/20 flex items-center justify-center -rotate-12 z-10">
                                                        <div className="text-[10px] font-mono text-center leading-tight text-red-800/40 font-bold">TOP<br />SECRET</div>
                                                    </div>

                                                    <div className="mt-auto mb-10 text-center opacity-70 font-mono text-sm text-gray-800 z-10 relative">
                                                        <p className="font-bold text-base mb-2">{selectedProduct.label}</p>
                                                        <p>{selectedProduct.description}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Paper Texture Overlay */}
                                            <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none"></div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div className="text-center space-y-6">
                                <div className="flex flex-col items-center">
                                    {selectedProduct.originalPrice && (
                                        <span className="text-xl md:text-3xl text-gray-500 line-through decoration-red-500 decoration-2 font-mono mb-2">
                                            {selectedProduct.originalPrice}
                                        </span>
                                    )}
                                    <span className="font-subheader text-7xl md:text-8xl text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                        {selectedProduct.price}
                                    </span>
                                </div>

                                <p className="max-w-md text-gray-400 text-base font-mono text-center mx-auto min-h-[3em]">
                                    {selectedProduct.description}
                                </p>

                                <a
                                    href="https://forms.gle/iGzo3JQDgiZPYuAb8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-red-800 text-white font-header text-2xl px-16 py-5 mt-6 overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-[0_0_30px_rgba(153,27,27,0.4)] border border-red-700/50 inline-block text-center"
                                >
                                    <span className="relative z-10 uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
                                        Buy The Case
                                    </span>
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                                </a>

                                <p className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest opacity-60 pt-4">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Secure Payment • Free Delivery
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
