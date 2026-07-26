import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import parallaxConfig from './parallaxConfig.json'

const ParticleComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={parallaxConfig}
        />
    );
};

export default ParticleComponent;
