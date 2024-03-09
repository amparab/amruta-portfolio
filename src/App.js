import './input.css';
import { useSpring, animated, config  } from '@react-spring/web';
import React, { useEffect, useState, useRef } from 'react';
import image from './images/pink.png'
import skillsBg from './images/sky.jpg'
import skyline from './images/skyline-layer2.png'
import girl from './images/skills_char-layer2.png'
import expImg from './images/Girl_Computer.png'
import spaceBg from './images/space-bg-layer.jpg'
import certBg from './images/Certification-Bg.jpg'
import contactBg from './images/contact.jpg'
import Skills from './components/Skills';
import { ReactTyped } from 'react-typed';
import * as Constants from './constants/Constants';
import Experience from './components/Experience';
import Certifications from './components/Certifcations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import ContactLinks from './components/ContactLinks';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const svgMaskWidth = 350;
  const svgMaskHeight = 350;

  const initialAngle = 0;
  let initialOffset = 0.5;

  let scrubValue = 0.5;

  const [imageSource, setImageSource] = useState(image);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showExpBg, setShowExpBg] = useState(false);
  const [showParallax, setShowParallax] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const [showContactLinks, setShowContactLinks] = useState(false);
  const [showProfession, setShowProfession] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  const skylineRef = useRef(null);
  const girlRef = useRef(null);

  useEffect(() => {

    var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

    if (isIOS) {
        setIsReady(false);
        return;
    }

    window.scrollTo(0, 0);

    if(window.innerWidth >= 768){
      setIsSmallScreen(false);
      scrubValue=0.5;
      initialOffset = 0.5;
    } else {
      setIsSmallScreen(true);
      scrubValue=true;
      initialOffset=0.3;
    }


    gsap.fromTo(maskRef.current, {
      opacity: 0,
    }, {
      duration: 1,
      opacity: 1,
    });
  }, []);

  useEffect(() => {

    const rotationAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef.current,
        id: 'intro-photo',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: scrubValue,
        toggleActions: "play reverse play reverse",
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        let progress = ScrollTrigger.getById("intro-photo").progress;
        if(progress >= initialOffset){
          setImageSource(skillsBg);
          setShowParallax(true);
        } else{
          setImageSource(image);
          setShowParallax(false);
        }
        // setRotation(currentRotation);
        setSpringProps({ transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${currentRotation}deg)`});
      },
      onReverseComplete: function() {
        setShowIntro(true);
        setSpringProps({ immediate: true,  transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${initialAngle}deg)` });
      }
     });

     const rotationAnimation_rev1 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef1.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: scrubValue,
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
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        setSpringProps({ transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${currentRotation}deg)`});
        let progress = ScrollTrigger.getById("rot_skills_exp").progress;
        if(progress >= 0.5){
          setImageSource(expImg);
          setShowExpBg(true);
          setShowParallax(false);
        } else{
          setImageSource(skillsBg);
          setShowParallax(true);
        }
      },
      onComplete: function() {
        setShowCertification(true);
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
        scrub: scrubValue,
        toggleActions: "play reverse play reverse",
      },
      onStart: function() {
        // setShowExperience(false);
        setShowCertification(false);
      },
      onReverseComplete: function() {
        // setShowExperience(false);
        setShowCertification(false);
      }
     });

    

    const rotationAnimation3 = gsap.timeline({
      onStart: () => {
        setDisplaySkills(false);
        setShowCertification(false);
      },
      scrollTrigger: {
        trigger: conRef4.current,
        id: "rot_exp_cert",
        start: 'top bottom',
        end: 'bottom bottom+=500',
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        
        // let progress = ScrollTrigger.getById("rot_exp_cert").progress;
        // if(progress >= 0.5){
        //   setImageSource(certBg);
        // } else{
        //   setImageSource(expImg);
        //   setShowExpBg(true);
        // }
        setSpringProps({ transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${currentRotation}deg)`});
      },
      onComplete: function() {
        setShowExperience(true);
      },
      onReverseComplete: function() {
        // setShowExperience(false);
        setShowCertification(true);
      }
    });

    const rotationAnimation_rev3 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef5.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: scrubValue,
        toggleActions: "play reverse play reverse",
      },
      onReverseComplete: function() {
        setShowExperience(false);
      },
     });

    const rotationAnimation4 = gsap.timeline({
      onStart: function () {
        setImageSource(certBg);
        setShowExperience(false);
      },
      scrollTrigger: {
        trigger: conRef6.current,
        id: "rot_cert_contact",
        start: 'top bottom',
        end: 'bottom bottom+=500',
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        setSpringProps({ transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${currentRotation}deg)`});
        // let progress = ScrollTrigger.getById("rot_cert_contact").progress;
        // if(progress >= 0.5){
        //   setImageSource(contactBg);
        // } else{
        //   setImageSource(certBg);
        // }
      },
      onComplete: function () {
        setShowContactLinks(true);
        // setShowCertification(false);
      },
      onReverseComplete: function () {
        setShowExperience(true);
        setImageSource(expImg);
        setShowExpBg(true);
        setShowContactLinks(false);
      }
    });

    const rotationAnimation_rev4 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef5.current,
        start: 'bottom top',
        end: 'bottom bottom+=900',
        scrub: scrubValue,
        toggleActions: "play reverse play reverse",
      },
      onReverseComplete: function() {
        setShowContactLinks(false);
      },
     });
  
    rotationAnimation1.fromTo(reference.current,{rotate: initialAngle}, {
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
      rotate: 540
      // y: window.innerHeight
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
    const parallaxSkyLine = gsap.timeline({
      scrollTrigger: {
        trigger: conRef1.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      }
    });
    parallaxSkyLine.fromTo(skylineRef.current,{y: 100}, {y: 0}); //large
    // parallaxSkyLine.fromTo(skylineRef.current,{y: 200}, {y: 100}); small

    return () => {
      parallaxSkyLine.kill();
    };

  });

  useEffect(() => {
    const parallaxGirl = gsap.timeline({
      scrollTrigger: {
        trigger: conRef1.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse"
      }
    });
    parallaxGirl.fromTo(girlRef.current,{y: 50}, {y: 0}); //large
    // parallaxGirl.fromTo(girlRef.current,{y: 100}, {y: 50}); //small

    return () => {
      parallaxGirl.kill();
    };
  });

useEffect(() => {
  const mask = maskRef.current;
  gsap.set(mask, { transformOrigin: "50% 50%" });
  const trans_intro_skills = gsap.timeline({
    scrollTrigger: {
      trigger: conRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: scrubValue,
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
      scrub: scrubValue,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    }
  });

  trans_skills_exp.to(mask,{scale: 1.25});
  trans_skills_exp.to(mask,{y: isSmallScreen ? 0 : -100}, 0);

  const trans_exp_cert = gsap.timeline({
    scrollTrigger: {
      trigger: conRef4.current,
      start: 'top bottom',
      end: 'bottom bottom+=500',
      scrub: scrubValue,
      ease: "slow",
      toggleActions: "restart none"
    }
  });

  trans_exp_cert.to(mask,{opacity: 0});

  // Keep cert still
  gsap.timeline({
    scrollTrigger: {
      trigger: conRef5.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: scrubValue,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    }
  }).to(mask,{x: 0});

  const trans_cert_contact = gsap.timeline({
    scrollTrigger: {
      trigger: conRef6.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: scrubValue,
      ease: "slow",
      toggleActions: "play reverse play reverse"
    },
  });

  trans_cert_contact.to(mask,{opacity: 1, scale: 3});

  return () => {
    trans_intro_skills.kill();
    trans_skills_exp.kill();
    trans_exp_cert.kill();
    trans_cert_contact.kill();
  };
}, []);

useEffect(() => {
  const parallaxExp = gsap.timeline({
      onStart: () => {
        // setShowExperience(true);
        // setShowCertification(true);
      },
      scrollTrigger: {
        trigger: conRef3.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse",
      },
      onComplete: () => {
        // setShowExperience(false);
        // setShowCertification(false);
      },
    });

    parallaxExp.fromTo(spaceRef.current, {scale: 1}, {scale: 1.5});
      return () => {
        parallaxExp.kill();
      };
    });

    const [springProps, setSpringProps] = useSpring(() => ({
      rotateY: 0,
      transformOrigin: '50% 50%', 
      transform: `perspective(1000px) rotateY(${initialAngle}deg)`
  }));

  return (
    <>
      {!isReady ? 
        <div className="justify-center flex items-center h-screen w-screen">
          <h1 className="text-center font-knuckleslite">Sorry! this website is not supported on iOS <br/>
          Please try on devices with Windows / Android</h1>
        </div>
      :
        
        <div id="container" className="h-screen w-screen flex flex-col justify-center items-center mt-5">
          <div ref={reference} width={svgMaskWidth} height={svgMaskHeight} className='z-0'></div>
          <div className="h-screen w-full flex flex-col items-center fixed">
            {showIntro && (
              <div className="text-2xl md:text-4xl mt-24 md:mt-24 font-knuckles">
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
                    <image
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
                  {showParallax && (
                        <image
                        href={skyline}
                        ref={skylineRef}
                        width={800}
                        x={(window.innerWidth - 800) / 2}
                      />
                  )}
                  {showParallax && (
                      <image
                        href={girl}
                        ref={girlRef}
                        width={800}
                        x={(window.innerWidth - 800) / 2}
                      />
                  )}
                </g>
              </svg>
            </div>
            {showIntro && showProfession && (
              <h1 className="text-2xl md:text-4xl font-knuckles mb-24 md:mb-24">
                <ReactTyped strings={["I'm a Software Developer"]} typeSpeed={25} />
              </h1>
            )}
          </div>

        </div>
      }

    {isReady ? 
    <div className='mt-5'>
    <div className="absolute inset-0 overflow-auto">
              {<Skills show={displaySkills} />}
              {<Experience show={showExperience} />}
              {<Certifications show={showCertification} />}
              {showContactLinks && <ContactLinks />}
      </div>

      <div ref={conRef} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef1} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef2} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef3} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center-z-20"></div>
      <div ref={conRef4} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef5} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef6} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    </div> : '' }   

    </>
  );
  
}

export default App;