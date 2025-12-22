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
    metadataBase: new URL('https://itzconfidential.com'), // Replace with actual domain when live
    title: {
        default: 'Itz Confidential | Narrative Commerce',
        template: '%s | Itz Confidential'
    },
    description: 'Unsolve the mystery. A narrative-driven shopping experience combining murder mysteries with immersive events.',
    keywords: ['Murder Mystery', 'Events', 'Delhi', 'Corporate Events', 'Parties', 'Detective Game', 'Itz Confidential', 'Horror Con'],
    authors: [{ name: 'Muskan Khanna' }],
    creator: 'Itz Confidential',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://itzconfidential.com',
        title: 'Itz Confidential | Narrative Commerce',
        description: 'Unsolve the mystery. Participate in real-life detective cases and immersive events.',
        siteName: 'Itz Confidential',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Itz Confidential | Narrative Commerce',
        description: 'Unsolve the mystery. A narrative-driven shopping experience.',
        creator: '@itzconfidential',
    },
    robots: {
        index: true,
        follow: true,
    },
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "name": "Itz Confidential",
                                    "url": "https://itzconfidential.com",
                                    "logo": "https://itzconfidential.com/itz-logo-v2.png",
                                    "founder": {
                                        "@type": "Person",
                                        "name": "Muskan Khanna"
                                    },
                                    "sameAs": [
                                        "https://instagram.com/itzconfidential"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "name": "Itz Confidential",
                                    "url": "https://itzconfidential.com",
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "target": "https://itzconfidential.com/?s={search_term_string}",
                                        "query-input": "required name=search_term_string"
                                    }
                                }
                            ]
                        })
                    }}
                />
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
