import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Events & Parties | Itz Confidential',
    description: 'Turn your event into a crime scene (the good kind!). Book Itz Confidential for corporate team building, college fests, and social gatherings.',
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
