import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hall of Detectives | Itz Confidential',
    description: 'The Wall of Fame. See the sharpest minds who have cracked our cases. Will you be next?',
};

export default function DetectivesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
