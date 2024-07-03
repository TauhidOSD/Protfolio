import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles 

       id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                name: "Star",
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: false,
                        },
                    },
                    color: {
                        value: "#fff",
                    },
                    shape: {
                        type: "star",
                        options: {
                            star: {
                                sides: 5,
                            },
                        },
                    },
                    opacity: {
                        value: 0.8,
                    },
                    size: {
                        value: 4,
                    },
                    rotate: {
                        value: {
                            min: 0,
                            max: 360,
                        },
                        direction: "clockwise",
                        animation: {
                            enable: true,
                            speed: 5,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 600,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        onClick: {
                            enable: true,
                            mode: "bubble",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                                color: "#f00",
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            color: "#ffff00",
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            quantity: 4,
                        },
                        remove: {
                            quantity: 2,
                        },
                    },
                },
                background: {
                    color: "#111",
                },
            }}
        
        
        >
            
        </Particles>
    );
};

export default Particle;