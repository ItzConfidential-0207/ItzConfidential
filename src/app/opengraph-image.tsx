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
            <div
                style={{
                    background: '#050505',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '4px solid #333',
                        padding: '40px 60px',
                        background: '#111',
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 700,
                            color: '#D90429', // Red
                            letterSpacing: '4px',
                            marginBottom: 20,
                            textTransform: 'uppercase',
                        }}
                    >
                        ITZ
                    </div>
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                        }}
                    >
                        CONFIDENTIAL
                    </div>

                    <div
                        style={{
                            marginTop: 30,
                            fontSize: 24,
                            color: '#666',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                        }}
                    >
                        Solve The Mystery
                    </div>
                </div>

                {/* Simple Footer/Stamp */}
                <div
                    style={{
                        marginTop: 40,
                        fontSize: 20,
                        color: '#333',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                    }}
                >
          // Restricted Access //
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
