import './input.css';
import { useSpring, animated, config  } from '@react-spring/web';
import React, { useEffect, useState, useRef } from 'react';
import image from './images/webp/pink.webp'
import skillsBg from './images/sky.jpg'
import skyline from './images/skyline-layer2.png'
import girl from './images/skills_char-layer3.png'
import expImg from './images/Girl_Computer.png'
import spaceBg from './images/space-bg-layer.jpg'
import certBg from './images/webp/contact-bg.webp'
import scrollGif from './images/down-arrow.gif'
import Skills from './components/Skills';
import { ReactTyped } from 'react-typed';
import * as Constants from './utils/Constants';
import * as Utils from './utils/Utils';
import Experience from './components/Experience';
import Certifications from './components/Certifcations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import ContactLinks from './components/Contact';
import { UilExternalLinkAlt } from '@iconscout/react-unicons'
import { UilDownloadAlt } from '@iconscout/react-unicons'


gsap.registerPlugin(ScrollTrigger);

function Portfolio() {

  
  let initialOffset = 0.5;
  let scrubValue = 0.5;

  const [imageSource, setImageSource] = useState(image);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showExpBg, setShowExpBg] = useState(false);
  const [showParallax, setShowParallax] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [error, setError] = useState(false);
  const [showContactLinks, setShowContactLinks] = useState(false);
  const [showProfession, setShowProfession] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollIconVisibile, setScrollIconVisible] = useState(true);

  const [photoMarginTop, setPhotoMarginTop] = useState(0);
  const [photoMarginBottom, setPhotoMarginBottom] = useState(0);

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

  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setPhotoMarginTop(rect.top/2);
      setPhotoMarginBottom((window.innerHeight - rect.bottom)/2);
      console.log('Image container y coordinate:', rect.bottom);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  
    const handleUnsupportedResolution = () => {
      const isUnsupportedResolution = 
        (window.innerWidth > 768 && window.innerHeight < 500) ||
        (window.innerHeight < 530 && window.innerWidth < 310);
        
      if (isUnsupportedResolution) {
        setError(true);
        setErrorMsg("Your browser resolution is currently not supported. Try resizing the window to experience this site.");
      }
    };
  
    const handleScreenSize = () => {
      const isSmallScreen = window.innerWidth < 768;
      setIsSmallScreen(isSmallScreen);
      scrubValue = 0.5;
      initialOffset = 0.5;
    };
  
    handleUnsupportedResolution();
    handleScreenSize();
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
      onStart: function(){
        setShowIntro(false);
        setShowProfession(false);
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
        setSpringProps({ transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${currentRotation}deg)`});
      },
      onReverseComplete: function() {
        setShowIntro(true);
        setSpringProps({ immediate: true,  transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${Constants.initialAngle}deg)` });
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
        setShowCertification(false);
      },
      onReverseComplete: function() {
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
        setSpringProps({ transformOrigin: '50% 50%', transform: `perspective(1000px) rotateY(${currentRotation}deg)`});
      },
      onComplete: function() {
        setShowExperience(true);
      },
      onReverseComplete: function() {
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
      },
      onComplete: function () {
        setShowContactLinks(true);
        setShowExperience(false);
        setScrollIconVisible(false);
      },
      onReverseComplete: function () {
        setShowExperience(true);
        setImageSource(expImg);
        setShowExpBg(true);
        setShowContactLinks(false);
        setScrollIconVisible(true);
      }
    });

    const rotationAnimation_rev4 = gsap.timeline({
      scrollTrigger: {
        trigger: conRef5.current,
        start: 'bottom top',
        end: 'bottom bottom',
        scrub: scrubValue,
        toggleActions: "play reverse play reverse",
      },
      onReverseComplete: function() {
        setShowContactLinks(false);
      },
     });
  
    rotationAnimation1.fromTo(reference.current,{rotate: Constants.initialAngle}, {
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

    if(skylineRef.current == null) return;
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

    parallaxSkyLine.fromTo(skylineRef.current,{y: 100}, {y: 0}); // TODO: Change this to make repsonsive

    return () => {
      parallaxSkyLine.kill();
    };

  });

  useEffect(() => {
    if(girlRef.current == null) return;
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
    parallaxGirl.fromTo(girlRef.current,{y: 50}, {y: 0}); // TODO: Change this to make repsonsive

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
    {scale: () => Math.max(window.innerWidth / Constants.svgMaskWidth, window.innerHeight / Constants.svgMaskHeight)});

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

  trans_cert_contact.to(mask,{opacity: 1, scale: 4});

  return () => {
    trans_intro_skills.kill();
    trans_skills_exp.kill();
    trans_exp_cert.kill();
    trans_cert_contact.kill();
  };
}, []);

useEffect(() => {
  if(spaceRef.current == null) return;
  const parallaxExp = gsap.timeline({
      scrollTrigger: {
        trigger: conRef3.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: scrubValue,
        ease: "slow",
        toggleActions: "play reverse play reverse",
      }
    });

    parallaxExp.fromTo(spaceRef.current, {scale: 1}, {scale: 1.5});
      return () => {
        parallaxExp.kill();
      };
    });

    const [springProps, setSpringProps] = useSpring(() => ({
      rotateY: 0,
      transformOrigin: '50% 50%', 
      transform: `perspective(1000px) rotateY(${Constants.initialAngle}deg)`
  }));

  const scrollToTop = () => {
    setShowCertification(false);
    setShowExperience(false);
    setDisplaySkills(false);
    setShowContactLinks(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const openLinkedIn = () => {
    const url = 'https://www.linkedin.com/in/amruta-parab-9124b9180';
    window.open(url, '_blank');
  };

  if(error){
     return <div className="justify-center flex items-center h-screen w-screen">
        <h1 className="text-center font-knuckleslite">{errorMsg}</h1>
      </div>
  }
  
  return (
    <> 
    
        <div id="container" className="h-screen w-screen flex flex-col justify-center items-center">
        
        
        {scrollIconVisibile && <div className="fixed bottom-3 md:bottom-6 right-3 md:right-6 z-50 flex justify-center items-center rounded-lg bg-white p-1 md:p-2">
          <div className="text-center justify-center items-center">
            <img src={scrollGif} className="h-7 w-7 md:h-14 md:w-14" alt="Your GIF" />
            <div className="text-[0.6rem] md:text-xs font-knuckleslite">Scroll</div>
          </div>
        </div>
        }
        

          <div ref={reference} width={Constants.svgMaskWidth} height={Constants.svgMaskHeight}></div>
          {showIntro &&<div className="fixed bottom-0 left-0 right-0 flex items-center z-10 justify-center"
            style={{ marginBottom: photoMarginBottom }}>
            <div className='px-2'>
                <button onClick={openLinkedIn}
                    type="button"
                    className="py-2 px-2 bg-black text-sm md:text-lg text-white hover:bg-white hover:text-black border hover:border-black rounded-md font-knuckleslite"
                >
                    LinkedIn <UilExternalLinkAlt size="21" className="inline" />
                </button>
            </div>
            <div className='px-2'>
                <button
                    type="button"
                    onClick={Utils.handleDownload}
                    className="py-2 px-2 bg-pink-900 text-sm md:text-lg text-white hover:bg-white hover:text-black border  hover:border-black rounded-md font-knuckleslite"
                >
                    Download Resume <UilDownloadAlt size="21" className="inline" />
                </button>
            </div>
        </div>}

          
          
          <div className="h-screen w-full flex flex-col items-center fixed">
          
            {showIntro && (
              <div className="text-2xl md:text-4xl font-knuckles bg-gradient-to-r from-slate-800 
              via-blue-950 to-pink-700 text-transparent bg-clip-text" style={{marginTop: photoMarginTop}}>
                <ReactTyped strings={["Hi! I am Amruta Parab"]} typeSpeed={25} onComplete={() => setShowProfession(true)} />
              </div>
            )}
            {showProfession && (
              <h1 className="text-xl md:text-2xl font-knuckles bg-gradient-to-r from-pink-700 via-blue-950 
              to-slate-800 text-transparent bg-clip-text">
                <ReactTyped strings={["I'm a Software Developer"]} typeSpeed={25} />
              </h1>
            )}

            
            <div id="imageContainer" className="h-full w-full">
            <svg className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full fixed" >
                <mask id="myMask" className="myMask">
                  <animated.rect ref={imageContainerRef}
                    x={(window.innerWidth - Constants.svgMaskWidth) / 2}
                    y={(window.innerHeight - Constants.svgMaskHeight) / 2}
                    className="rect"
                    width={Constants.svgMaskWidth}
                    height={Constants.svgMaskHeight}
                    fill="white"
                    style={{
                      ...springProps
                    }}
                  />
                </mask>
                <g mask="url(#myMask)" ref={maskRef} className="absolute inset-0 w-full h-full z-10">
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
          
            {/* <div className='z-50' style={{ display: 'inline-block', marginBottom: (window.innerHeight - Constants.svgMaskHeight) / 3 }}>
              <button
                type="button"
                onClick={scrollToTop}
                className="py-2 px-4 bg-white text-lg text-black border border-black rounded-md mr-4 font-knuckleslite"
              >
                LinkedIn
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className=" py-2 px-4 bg-white text-lg text-black hover:bg-black hover:text-white border border-black hover:border-white rounded-md mr-4 font-knuckleslite"
              >
                Download Resume
              </button>
            </div> */}
            

          </div>
          
          
        </div>
        

    <div className='mt-5'>
      
    <div className="absolute inset-0 overflow-auto">
      {showContactLinks && <ContactLinks show={showContactLinks} scrollToTop={scrollToTop} />}
      {showExperience && <Experience show={showExperience} scrollTriggerRef={conRef5} />} 
      {displaySkills && <Skills show={displaySkills} />}
      {showCertification && <Certifications show={showCertification} />}
    </div>

      <div ref={conRef} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef1} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef2} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef3} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center-z-20"></div>
      <div ref={conRef4} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef5} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div ref={conRef6} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center">
    
      </div>

    </div>

    </>
  );
  
}

export default Portfolio;