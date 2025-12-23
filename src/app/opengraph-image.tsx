import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'Itz Confidential | Narrative Commerce'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#050505',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    border: '20px solid #8B0000', // Dark Red Border
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#111',
                        padding: '40px 80px',
                        border: '2px dashed #333',
                        boxShadow: '0 0 50px rgba(0,0,0,0.8)',
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#D90429',
                            textTransform: 'uppercase',
                            letterSpacing: '10px',
                            marginBottom: 0,
                            display: 'flex',
                        }}
                    >
                        ITZ
                    </div>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            letterSpacing: '5px',
                            display: 'flex',
                        }}
                    >
                        CONFIDENTIAL
                    </div>

                    <div
                        style={{
                            marginTop: 40,
                            fontSize: 30,
                            color: '#666',
                            letterSpacing: '5px',
                            textTransform: 'uppercase',
                            display: 'flex',
                        }}
                    >
                        Solve The Mystery
                    </div>
                </div>

                {/* Confidential Stamp */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        right: 60,
                        border: '8px solid rgba(139, 0, 0, 0.5)',
                        color: 'rgba(139, 0, 0, 0.5)',
                        fontSize: 40,
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        textTransform: 'uppercase',
                        transform: 'rotate(-15deg)',
                        display: 'flex',
                    }}
                >
                    Restricted
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can use a system font or load a custom one.
            // Here we rely on default sans/mono mapping or simple text.
            ...size,
        }
    )
}
