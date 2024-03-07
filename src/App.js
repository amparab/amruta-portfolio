import './input.css';
import { useSpring, animated, config  } from '@react-spring/web';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import image from './images/main.png'
import skillsBg from './images/skills-bg-2.png'
import expImg from './images/Girl_Computer.png'
import spaceBg from './images/space-bg-layer.jpg'
import certBg from './images/Certification-Bg.jpg'
import contactBg from './images/contact.jpg'
import black from './images/black.png'
import Skills from './components/Skills';
import { ReactTyped } from 'react-typed';
import * as Constants from './constants/Constants';
import Experience from './components/Experience';
import Certifications from './components/Certifcations';
import useDebouncedScroll from './components/useDebouncedScroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import ContactLinks from './components/ContactLinks';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const svgMaskWidth = 350;
  const svgMaskHeight = 350;

  const [imageSource, setImageSource] = useState(image);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showExperience, setShowExperience] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showExpBg, setShowExpBg] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const [showContactLinks, setShowContactLinks] = useState(false);
  const [showProfession, setShowProfession] = useState(false);

  const conRef = useRef(null);
  const conRef2 = useRef(null);
  const conRef1 = useRef(null);
  const conRef3 = useRef(null);
  const conRef4 = useRef(null);
  const conRef5 = useRef(null);
  const conRef6 = useRef(null);

  const maskRef = useRef(null);
  const reference = useRef(null);
  const spaceRef = useRef(null);

  // useEffect(() => {
  //   const rotationAnimation = gsap.timeline();
  //   rotationAnimation.to(reference.current, {
  //     transformOrigin: '100% 100%',
  //     rotate: 60,
  //     duration: 1,
  //     onUpdate: function () {
  //       let currentRotation = gsap.getProperty(reference.current, "rotation");
  //       setRotation(currentRotation);
  //     },
  //   });
  //   return () => {
  //     rotationAnimation.kill();
  //   };
  // }, []);


  useEffect(() => {

    const rotationAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef.current,
        id: 'intro-photo',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        toggleActions: "play reverse play reverse",
      },

      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        let progress = ScrollTrigger.getById("intro-photo").progress;
        if(progress >= 0.5){
          setImageSource(skillsBg);
        } else{
          setImageSource(image);
        }
        setRotation(currentRotation);
      },
      onReverseComplete: function() {
        setShowIntro(true);
      }
     });

     const rotationAnimation_rev1 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef1.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        toggleActions: "play reverse play reverse",
      },
      onStart: function() {
        setDisplaySkills(true);
        setShowIntro(false);
        setShowProfession(false);
      },
      onReverseComplete: function() {
        setDisplaySkills(false);
      }
     });

    const rotationAnimation2 = gsap.timeline({
      onStart: () => {
        setDisplaySkills(false)
      },
      scrollTrigger: {
        trigger: conRef2.current,
        id: "rot_skills_exp",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        setRotation(currentRotation);
        let progress = ScrollTrigger.getById("rot_skills_exp").progress;
        if(progress >= 0.5){
          setImageSource(expImg);
          setShowExpBg(true);
        } else{
          setImageSource(skillsBg);
        }
      },
      onReverseComplete: function() {
        setDisplaySkills(true);
      }
    });

    const rotationAnimation_rev2 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef3.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        toggleActions: "play reverse play reverse",
      },
      onReverseComplete: function() {
        setShowExperience(false);
      }
     });

    

    const rotationAnimation3 = gsap.timeline({
      onStart: () => {
        setDisplaySkills(false)
      },
      scrollTrigger: {
        trigger: conRef4.current,
        id: "rot_exp_cert",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        setRotation(currentRotation);
        let progress = ScrollTrigger.getById("rot_exp_cert").progress;
        if(progress >= 0.5){
          setImageSource(certBg);
        } else{
          setImageSource(expImg);
          setShowExpBg(true);
        }
      },
      onComplete: function() {
        setShowCertification(true);
      },
      onReverseComplete: function() {
        setShowExperience(false);
      }
    });

    const rotationAnimation_rev3 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef5.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        toggleActions: "play reverse play reverse",
      },
      onReverseComplete: function() {
        setShowCertification(false);
      },
     });

    const rotationAnimation4 = gsap.timeline({
      onStart: function () {
        setShowCertification(false);
      },
      scrollTrigger: {
        trigger: conRef6.current,
        id: "rot_cert_contact",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        setRotation(currentRotation);
        let progress = ScrollTrigger.getById("rot_cert_contact").progress;
        if(progress >= 0.5){
          setImageSource(contactBg);
        } else{
          setImageSource(certBg);
        }
      },
      onComplete: function () {
        setShowContactLinks(true);
      },
      onReverseComplete: function () {
        setShowCertification(true);
      }
    });

    const rotationAnimation_rev4 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef5.current,
        start: 'bottom top',
        end: 'bottom bottom',
        scrub: 0.5,
        toggleActions: "play reverse play reverse",
      },
      onReverseComplete: function() {
        setShowContactLinks(false);
      },
     });
  
    rotationAnimation1.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 180
    })

    rotationAnimation_rev1.to(reference.current, {x:0}) ;

    rotationAnimation2.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 360,
      y: window.innerHeight
    })

    rotationAnimation_rev2.to(reference.current, {x:0}) ;

    rotationAnimation3.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 540,
      y: window.innerHeight
    });

    rotationAnimation_rev3.to(reference.current, {x:0}) ;

    rotationAnimation4.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 720,
      y: window.innerHeight
    })

    rotationAnimation_rev4.to(reference.current, {x:0}) ;
  
    return () => {
      rotationAnimation1.kill();
      rotationAnimation2.kill();
      rotationAnimation3.kill();
      rotationAnimation4.kill();
      rotationAnimation_rev1.kill();
      rotationAnimation_rev2.kill();
      rotationAnimation_rev3.kill();
      rotationAnimation_rev4.kill();
    };
  }, []);

useEffect(() => {
  const mask = maskRef.current;
  gsap.set(mask, { transformOrigin: "50% 50%" });
  const trans_intro_skills = gsap.timeline({
    scrollTrigger: {
      trigger: conRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.5,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    }
  });

  trans_intro_skills.to(mask,
    {scale: () => Math.max(window.innerWidth / svgMaskWidth, window.innerHeight / svgMaskHeight)});

  const trans_skills_exp = gsap.timeline({
    scrollTrigger: {
      trigger: conRef2.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.5,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    }
  });

  trans_skills_exp.to(mask,{scale: 2});
  trans_skills_exp.to(mask,{x: -window.innerWidth/4}, 0);

  const trans_exp_cert = gsap.timeline({
    scrollTrigger: {
      trigger: conRef4.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.5,
      ease: "slow",
      toggleActions: "restart none"
    }
  });

  trans_exp_cert.to(mask,{x: 0});

  gsap.timeline({
    scrollTrigger: {
      trigger: conRef5.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.5,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    }
  }).to(mask,{x: 0});

  const trans_cert_contact = gsap.timeline({
    scrollTrigger: {
      trigger: conRef6.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.5,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    },
  });

  trans_cert_contact.to(mask,{x: window.innerWidth/4});

  return () => {
    trans_intro_skills.kill();
    trans_skills_exp.kill();
    trans_exp_cert.kill();
    trans_cert_contact.kill();
  };
}, []);

useEffect(() => {
  const parallax = gsap.timeline({
      onStart: () => {
        setShowExperience(true);
      },
      scrollTrigger: {
        trigger: conRef3.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        ease: "slow",
        toggleActions: "play reverse play reverse",
      },
      onComplete: () => {
        setShowExperience(false);
      },
    });

    parallax.fromTo(spaceRef.current, {scale: 1}, {scale: 1.5});
    return () => {
      parallax.kill();
    };
});

  const springProps = useSpring({
    transformOrigin: '50% 50%',
    transform: `perspective(1000px) 
                rotateY(${rotation}deg)`,
  });

  return (
    <>
      {!isReady ? 
        <div className="flex justify-center items-center h-screen w-screen">
          <h1 className="text-center">Loading...</h1>
        </div>
      :
        
        <div id="container" className="h-screen w-screen flex flex-col justify-center items-center">
          <div ref={reference} width={svgMaskWidth} height={svgMaskHeight} className='z-0'></div>
          <div className="h-screen w-full flex flex-col items-center fixed border border-solid border-red-500">
            {showIntro && (
              <div className="text-3xl md:text-5xl my-24 font-knuckles">
                <ReactTyped strings={["Hi! I am Amruta Parab"]} typeSpeed={25} onComplete={() => setShowProfession(true)} />
              </div>
            )}
            <div id="imageContainer" className="h-full w-full">
              <svg className="w-full h-full">
                <mask id="myMask" className="myMask">
                  <animated.rect
                    x={(window.innerWidth - svgMaskWidth) / 2}
                    y={(window.innerHeight - svgMaskHeight) / 2}
                    className="rect"
                    width={svgMaskWidth}
                    height={svgMaskHeight}
                    fill="white"
                    style={{
                      ...springProps
                    }}
                  />
                </mask>
              </svg>
              <svg className="absolute inset-0 w-full h-full z-10" mask="url(#myMask)" ref={maskRef}>
                <g>
                  {showExpBg && (
                    <animated.image
                      href={spaceBg}
                      ref={spaceRef}
                      width={800}
                      x={(window.innerWidth - 800) / 2}
                    />
                  )}
                  <image
                    href={imageSource}
                    mask="url(#myMask)"
                    width={800}
                    height={1170}
                    x={(window.innerWidth - 800) / 2}
                    y={(window.innerHeight - 1170) / 2}
                  />
                </g>
              </svg>
            </div>
            {showIntro && showProfession && (
              <h1 className="text-3xl md:text-5xl font-knuckles my-24">
                <ReactTyped strings={["I'm a Software Developer"]} typeSpeed={25} />
              </h1>
            )}
          </div>

        </div>
      }
      
      <div className="absolute inset-0 overflow-auto z-50">
              {<Skills show={displaySkills} ref={conRef1} />}
              {showExperience && <Experience />}
              {showCertification && <Certifications />}
              {showContactLinks && <ContactLinks />}
      </div>

      <div ref={conRef} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef1} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef2} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef3} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef4} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef5} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef6} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    </>
  );
  
}

export default App;
