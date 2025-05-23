import React from 'react'

function Cursor() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    
    React.useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', updatePosition);
        
        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div 
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div 
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <svg width="60" height="60">
                    <defs>
                        <path
                            id="textCirclePath"
                            d="M30,30 m-20,0 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0"
                        />
                    </defs>
                    <text>
                        <textPath 
                            href="#textCirclePath" 
                            style={{
                                fontSize: '6px',
                                fontWeight: 'bold',
                                fill: '#333',
                                letterSpacing: '1px',
                            }}
                        >
                            CAPSULE CAPSULE CAPSULE
                        </textPath>
                    </text>
                </svg>
                <div
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#FF5722',
                        position: 'absolute',
                    }}
                />
            </div>
        </div>
    );
}

export default Cursor