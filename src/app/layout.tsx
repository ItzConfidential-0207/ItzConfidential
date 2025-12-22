import type { Metadata } from 'next';
import { Black_Ops_One, Stardos_Stencil, Courier_Prime, Space_Mono } from 'next/font/google';
import './globals.css';

const blackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-black-ops',
    display: 'swap',
});

const stardosStencil = Stardos_Stencil({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-stardos',
    display: 'swap',
});

const courierPrime = Courier_Prime({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-courier',
    display: 'swap',
});

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-space-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Itz Confidential | Narrative Commerce',
    description: 'Unsolve the mystery. A narrative-driven shopping experience.',
};

import { RedThreadProvider } from '@/hooks/useRedThread';
import RedThread from '@/components/RedThread';
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${blackOpsOne.variable} ${stardosStencil.variable} ${courierPrime.variable} ${spaceMono.variable}`} suppressHydrationWarning>
                <RedThreadProvider>
                    <Navbar />
                    <RedThread />
                    <div className="relative z-[var(--z-index-content)]">
                        {children}
                    </div>
                </RedThreadProvider>
            </body>
        </html>
    );
}
