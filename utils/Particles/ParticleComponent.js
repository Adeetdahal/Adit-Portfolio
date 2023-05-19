import React, { useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import parallaxConfig from './parallaxConfig.json'

const ParticleComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const handleMouseEnter = (container) => {
        const particles = container.particles;
        particles.move.enable = true; // Enable particle movement on hover
    };

    const handleMouseLeave = (container) => {
        const particles = container.particles;
        particles.move.enable = false; // Disable particle movement when leaving the area
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={parallaxConfig}
        />
    );
};

export default ParticleComponent;
