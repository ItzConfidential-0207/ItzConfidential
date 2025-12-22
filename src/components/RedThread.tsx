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

    const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const calculatePath = () => {
            const sortedNodes = Array.from(nodes.values()).sort((a: HTMLElement, b: HTMLElement) => {
                const boxA = a.getBoundingClientRect();
                const boxB = b.getBoundingClientRect();
                return (boxA.top + window.scrollY) - (boxB.top + window.scrollY);
            });

            if (sortedNodes.length === 0) return;

            setDocHeight(document.body.scrollHeight);

            let d = "";
            const currentPoints: { x: number; y: number }[] = [];

            let prevX = 0;
            let prevY = 0;

            sortedNodes.forEach((node, index) => {
                const box = node.getBoundingClientRect();
                const centerX = box.left + box.width / 2 + window.scrollX;
                const centerY = box.top + window.scrollY + box.height / 2;

                currentPoints.push({ x: centerX, y: centerY });

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
            setPoints(currentPoints);
        };

        // Use ResizeObserver for efficient updates
        const observer = new ResizeObserver(() => {
            calculatePath();
        });

        observer.observe(document.body);
        window.addEventListener("resize", calculatePath);

        // Initial calc
        // Small timeout to ensure layout is settled
        const timer = setTimeout(calculatePath, 100);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", calculatePath);
            clearTimeout(timer);
        };
    }, [nodes]);

    const pathname = usePathname();

    if (["/payment", "/detectives", "/about"].includes(pathname)) return null;

    return (
        <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: docHeight || '100%', zIndex: 'var(--z-index-thread)' }}>
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
                    filter="url(#glow)"
                />
            </svg>

            {/* Render Pin Heads on top of the thread */}
            {points.map((p, i) => (
                <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-red-900 border border-white/30 shadow-md z-50 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: p.x, top: p.y }}
                >
                    <div className="absolute top-1 left-1 w-1 h-1 bg-white/40 rounded-full"></div>
                </div>
            ))}
        </div>
    );
}
