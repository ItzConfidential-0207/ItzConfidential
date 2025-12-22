import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About The Mystery | Itz Confidential',
    description: 'Meet the creative minds behind the crime. Creating immersive murder mystery experiences that challenge your intellect.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
