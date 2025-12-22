"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRedThread } from "@/hooks/useRedThread";

export default function RedThread() {
    const { nodes } = useRedThread();
    const [pathd, setPathd] = useState("");
    // We track the document height to resize the SVG container
    const [docHeight, setDocHeight] = useState(0);

    const { scrollYProgress } = useScroll();
    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const calculatePath = () => {
            // Check width inside calculation to be safe, but we rely on existing state mostly
            const sortedNodes = Array.from(nodes.values()).sort((a: HTMLElement, b: HTMLElement) => {
                const boxA = a.getBoundingClientRect();
                const boxB = b.getBoundingClientRect();
                return (boxA.top + window.scrollY) - (boxB.top + window.scrollY);
            });

            if (sortedNodes.length === 0) return;

            setDocHeight(document.body.scrollHeight);

            let d = "";

            let prevX = 0;
            let prevY = 0;

            sortedNodes.forEach((node, index) => {
                const box = node.getBoundingClientRect();
                const centerX = box.left + box.width / 2 + window.scrollX;
                const centerY = box.top + window.scrollY + box.height / 2;

                if (index === 0) {
                    d += `M ${centerX} ${centerY}`;
                } else {
                    const midY = (prevY + centerY) / 2;
                    d += ` C ${prevX} ${midY}, ${centerX} ${midY}, ${centerX} ${centerY}`;
                }
                prevX = centerX;
                prevY = centerY;
            });
            setPathd(d);
        };

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(calculatePath, 150); // Debounce by 150ms
        };

        window.addEventListener("resize", handleResize);

        // Initial calc with slight delay to ensure layout
        const timer = setTimeout(calculatePath, 100);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
            clearTimeout(timer);
        };
    }, [nodes]);

    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // USP: Thread must be visible on all devices, but optimized.
    if (["/payment", "/detectives", "/about", "/events"].includes(pathname)) return null;

    return (
        <motion.div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: docHeight || '100%', zIndex: 'var(--z-index-thread)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <svg className="w-full h-full overflow-visible">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                <motion.path
                    d={pathd}
                    fill="none"
                    stroke="var(--color-evidence-red)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ pathLength }}
                    filter={isMobile ? undefined : "url(#glow)"}
                />
            </svg>
        </motion.div>
    );
}
