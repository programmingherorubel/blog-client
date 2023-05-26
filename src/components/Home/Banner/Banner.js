import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Banner.css'
import aysha from '../img/aysha asha.jpg'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
    const particlesInit = async (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
        // console.log(container);
      };
    return (
        <>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "gray",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
           <div className='hero'>
           <div>
               <img src={aysha} className='aysha' />
               <p style={{color:'gray'}}>Studies Department of japanese Language and Culture(IML) at University of Dhaka <br/>
                College: Viqarunnisa Noon School and College<br/></p>
               <h4 className='bio'>I am a wayfarer of the horizon, love the beauty of nature, novels and poems cuteness of animals, like the path of peace</h4>
               <h2 style={{color:'red'}}>
               <TypeAnimation
                  cursor={true}
                  sequence={[
                    'I am a Visionary', 3000, 
                    'I am a fancifull',3000,
                    'I am a learner',3000
                  ]}
                  repeat={Infinity}
                />
               </h2>
            </div>
        </div>
            
        </>
    );
};

export default Banner;

