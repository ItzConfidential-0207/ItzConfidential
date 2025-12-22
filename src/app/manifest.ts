import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Itz Confidential',
        short_name: 'Itz Confidential',
        description: 'Unsolve the mystery. A narrative-driven shopping experience.',
        start_url: '/',
        display: 'standalone',
        background_color: '#050505',
        theme_color: '#D90429',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
