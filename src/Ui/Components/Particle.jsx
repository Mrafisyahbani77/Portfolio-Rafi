import React, { useEffect } from 'react';
import particlesJS from 'particlesjs';

const ParticleBackground = () => {
    useEffect(() => {
        particlesJS.init({
            selector: '.background',
            maxParticles: 100,
            sizeVariations: 3,
            speed: 0.5,
            color: '#ffffff',
            minDistance: 120,
            connectParticles: false,
        });
    }, []);

    return (
        <>
            <style>{`
                html, body {
                    margin: 0;
                    padding: 0;
                }

                .background {
                    position: absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
            <canvas className="background"></canvas>
        </>
    );
};

export default ParticleBackground;
