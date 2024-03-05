import './input.css';
import { useSpring, animated, config  } from '@react-spring/web';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import image from './images/myphoto-cropped.png'
import skillsBg from './images/skills-bg-2.png'
import expImg from './images/Girl_Computer.png'
import spaceBg from './images/space-bg-layer.jpg'
import certBg from './images/Certification-Bg.jpg'
import black from './images/black.png'
import Skills from './components/Skills';
import { ReactTyped } from 'react-typed';
import * as Constants from './constants/Constants';
import Experience from './components/Experience';
import Certifications from './components/Certifcations';
import useDebouncedScroll from './components/useDebouncedScroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {

  // const [scrollY, setScrollY] = useState(0);
  const scrollY = useDebouncedScroll(100, 2);
  const [imageSource, setImageSource] = useState(image);
  const [rectX, setRectX] = useState(0);
  const [rectY, setRectY] = useState(0);
  const [scaleFactorX, setScaleFactorX] = useState(0);
  const [scaleFactorY, setScaleFactorY] = useState(0);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [showExperience, setShowExperience] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showExpBg, setShowExpBg] = useState(false);
  const [minRotation, setMinRotation] = useState(180);
  const [rotationThresh, setRotationThresh] = useState(360);
  const [showCertification, setShowCertification] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isReady, setIsReady] = useState(true);

  // const maskRef = useRef(null);
  const conRef = useRef(null);
  const parRef = useRef(null);

  const maskRef = useRef(null);
  const reference = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const temptl = gsap.timeline({
      scrollTrigger: {
        trigger: conRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true, // Smooth animation
        ease: "slow"
      },
      onUpdate: function () {
        console.log("Rotation value:", gsap.getProperty(reference.current, "rotation"));
        setRotation(gsap.getProperty(reference.current, "rotation"));
      }
    });
  
    // Define the animation
    temptl.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 180
    })
  
    return () => {
      temptl.kill();
    };
  }, []);

useEffect(() => {
  const mask = maskRef.current;
  gsap.set(mask, { transformOrigin: "50% 50%" });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: conRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true, // Smooth animation
      ease: "slow",
      onUpdate: function () {
        console.log("Width value:", gsap.getProperty(reference.current, "rotation"));
      }
    }
  });

  // Define the animation
  tl.to(mask,
    {
    // transformOrigin: '50% 50%',
    scale: 3.5,
    y: window.innerHeight/2
    // width: window.innerWidth,
    // height: window.innerHeight
  });


  return () => {
    tl.kill();
  };
}, []);


  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setScrollDirection('down');
    } else if (event.deltaY < 0) {
      setScrollDirection('up');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const parentWidth = window.innerWidth;
    const newRectY = window.innerWidth > Constants.large_screen_breakpoint ? window.innerHeight : window.innerHeight + (window.innerHeight / 3);
    setRectY(newRectY);
    setRectX(parentWidth);
    setScaleFactorX(window.innerWidth > Constants.large_screen_breakpoint ? 8 : 2);
    setScaleFactorY(window.innerWidth > Constants.large_screen_breakpoint ? 6 : 2);
  }, []);

  const scrollingUpSequence = (curRotation) => {
    switch (true) {
      case curRotation <= 800 && curRotation > 765:
        // Hide the Certificate section
        setImageSource(certBg);
        setShowCertification(true);

        setShowIntro(false);
        setDisplaySkills(false);
        setShowExperience(false);
        setShowExpBg(false);
        break;
      case curRotation <= 765 && curRotation > 650:
        // Display and start skill background
        setImageSource(expImg);
        setShowExpBg(true);
        api.start({
          from: { scale: 2 },
          to: { scale: 2.5 }
        });

        setShowCertification(false);
        setDisplaySkills(false);
        setShowIntro(false);
        break;
      case curRotation <= 650 && curRotation > 280:
        // Display timeline
        setShowExperience(true);
        setImageSource(expImg);
        setShowExpBg(true);

        setShowCertification(false);
        setDisplaySkills(false);
        setShowIntro(false);
        break;
      case curRotation <= 280 && curRotation > 260:
        // Show Skill Bg only and hide timeline
        setImageSource(skillsBg);

        setShowExpBg(false);
        setShowExperience(false);
        setShowCertification(false);
        setShowIntro(false);
        setDisplaySkills(false);
        break;
      case curRotation <= 260 && curRotation > 160:
        // Show skills
        setImageSource(skillsBg);
        setDisplaySkills(true);

        setShowExperience(false);
        setShowExpBg(false);
        setShowCertification(false);
        setShowIntro(false);
        break;
      case curRotation <= 160 && curRotation > 110:

        setImageSource(skillsBg);

        setDisplaySkills(false);
        setShowIntro(false);
        setShowExpBg(false);
        setShowExperience(false);
        setShowCertification(false);
        break;
      case curRotation <= 110:
        setImageSource(image);
        setShowIntro(true);

        setDisplaySkills(false);
        setShowExpBg(false);
        setShowExperience(false);
        setShowCertification(false);
        break;
      default:
        break;
    }
  };
  

const scrollingDownSequence = (curRotation) => {
  switch (true) {
    case curRotation < 125:
      // Display the Intro section

      setImageSource(image);
      setShowIntro(true);

      setDisplaySkills(false);
      setShowExperience(false);
      setShowExpBg(false);
      setShowCertification(false);  
      break;
    case curRotation >= 125 && curRotation < 170:
      // Display Skill Bg Image first
      setImageSource(skillsBg);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExperience(false);
      setShowExpBg(false);
      setShowCertification(false);  

      break;
    case curRotation >= 170 && curRotation < 310:
      setImageSource(skillsBg);
      setDisplaySkills(true);

      setShowIntro(false);
      setShowExperience(false);
      setShowExpBg(false);
      setShowCertification(false);  
      break;
    case curRotation >= 310 && curRotation < 315:
      setImageSource(skillsBg);
      setDisplaySkills(false);
      setShowExpBg(false);
      setShowExperience(false);
      setShowIntro(false);
      setShowCertification(false);

    case curRotation >= 315 && curRotation < 350:
      // Show Skills
      setImageSource(expImg);
      setShowExpBg(true);
      api.start({
        from: {scale: 2},
        to: {scale: 2.5}
      });
      setShowExperience(false);
      setShowIntro(false);
      setDisplaySkills(false);
      setShowCertification(false);

      break;

    case curRotation >= 350 && curRotation < 540:
      // Show Skills
      setImageSource(expImg);
      setShowExpBg(true);
      api.start({
        from: {scale: 2},
        to: {scale: 2.5}
      });
      setShowExperience(true);
      setShowIntro(false);
      setDisplaySkills(false);
      setShowCertification(false);

      break;
    case curRotation >= 300 && curRotation < 360:
      // Show experience Bg only
      
      setImageSource(expImg);
      setShowExpBg(true);
      api.start({
        from: {scale: 2},
        to: {scale: 2.5}
      });

      setShowExperience(false);
      setShowIntro(false);
      setDisplaySkills(false);
      setShowCertification(false);
      break;
    case curRotation >= 360 && curRotation < 450:
      // Start experience animation
      setImageSource(expImg);
      setShowExpBg(true);
      setShowExperience(false);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExperience(false);
      setShowCertification(false);
      
      break;
    case curRotation >= 450 && curRotation < 600:
      // Start experience and other animations
      
      setImageSource(certBg);

      setShowExpBg(false);
      setShowExperience(false);
      setShowIntro(false);
      setDisplaySkills(false);
      setShowCertification(false);
      break;

    case curRotation >= 645 && curRotation < 715:
      // Show Certificate Background only
      setImageSource(certBg);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExpBg(true);
      setShowExperience(false);

      break;
    case curRotation >= 715 && curRotation < 1000:
      // Show Certificate Component
      setShowCertification(true);
      setImageSource(certBg);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExpBg(false);
      setShowExperience(false);
      
      break;
    case curRotation >= 1000:
      // Show Certificate Component
      setMinRotation(540);
      setRotationThresh(720);
      setShowCertification(false);
      setImageSource(certBg);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExpBg(false);
      setShowExperience(false);
      
      break;

    default:
      break;
  }
};

  // useEffect(() => {
  //   const degrees = (scrollY * 360) / window.innerHeight;

  //   setRotation(degrees);

  //   if(scrollDirection === 'down'){
  //       scrollingDownSequence(rotation);
  //   } else {
  //     scrollingUpSequence(rotation);
  //   }

  // }, [scrollY]);

  const calcRotation = y => {
    let rotation = (y * 360 / window.innerHeight);
    let cycle = Math.floor(rotation / 180);
    let threshold = (window.innerHeight / 2) * cycle;
    const distance = window.innerHeight / 2;

    if (cycle % 2 === 1) {
        // If cycle is odd, lock at 180 or 360
        if (rotation >= (cycle * 180) && rotation <= (cycle + 1) * 180) {
            const lockRotation = y > threshold && y < threshold + distance;
            if (lockRotation) {
                console.log(cycle * 180);
                return cycle * 180;
            }
        }
    } else {
        // If cycle is even, scroll-controlled
        console.log(rotation);
        return rotation;
    }

    return rotation;
};


  // const getRotation = useMemo(() => {
  //   const rotAnim = currentRotation <= rotationThresh ? rotation : Math.min(minRotation + (currentRotation - rotationThresh), rotationThresh);
  //   return rotAnim;
  // }, [currentRotation, rotation, rotationThresh, minRotation]);

  const scaleMaskX = useMemo(() => {
    if(rotation >= 300){
      return 1.5
    } else if (rotation >= 650){
      return 10;
    }
    return 1 + (scrollY*8/ window.innerWidth);
    // if(currentRotation <= 360) {
    //   return 1 + (scrollY * scaleFactorX / window.innerWidth);
    // } else if (currentRotation > 1000) {
    //   return 1;
    // }
    // else return 1 + (scrollY * 0.5 / window.innerWidth);
    
  }, [currentRotation, scrollY]);

  const scaleMaskY = useMemo(() => {
    return 1 + (scrollY*5 / window.innerHeight);
    // if (currentRotation <= 360) {
    //   return 1 + (scrollY * scaleFactorY / window.innerHeight);
    // } else if (currentRotation < 660) {
    //   return 1 + (scrollY*2 / window.innerHeight);;
    // } else if (currentRotation > 660) {
    //   return 2;
    // }
  }, [currentRotation, scrollY, scaleFactorY]);

  const getTranslateY = useMemo(() => {
    if (rotation >= 300) {
      return scrollY/3
      // return Math.min(scrollY/3, window.innerHeight*0.3);
    } else {
      return 0;
    }
  }, [rotation, scrollY]);

  const getTranslateX = useMemo(() => {
    if(rotation < 300) 
      return '0'
    else if (rotation >= 495){
      return window.innerWidth * 0.30
    }
    else {
      return -window.innerWidth * 0.15;
    }
  } ,[rotation]);

  // const springProps = useSpring({
  //   from: {
  //     transform: `perspective(500px)`
  //   },
  //   to: {
  //     // rotateY(${currentRotation}deg) 
  //     // scaleX(${scaleMaskX})
  //     // scaleY(${scaleMaskY})
  //     // translateY(${getTranslateY}px)
  //     // translateX(${currentRotation < 1000 ? '0' : window.innerHeight * 0.3}px)
  //     transform: `perspective(500px) 
  //                 rotateY(${rotation}deg)   
  //                 scaleX(${scaleMaskX})
  //                 scaleY(${scaleMaskY})
  //               `
  //   },
  //   config: { mass: 5, tension: 350, friction: 40 }
  // },);

//   const calcRotationTemp = (scrollY) => {
//   const degrees = (scrollY * 360) / window.innerHeight;
//   const pausedRotation = degrees % 2160; // Repeat every 1800 degrees (5 full rotations)
//   let rotation = 0;

//   if (pausedRotation <= 180) {
//     rotation = pausedRotation;
//   } else if (pausedRotation <= 360) {
//     rotation = 180;
//   } else if (pausedRotation <= 540) {
//     rotation = 180 + (pausedRotation - 360);
//   } else if (pausedRotation <= 720) {
//     rotation = 360;
//   } else if (pausedRotation <= 900) {
//     rotation = 360 + (pausedRotation - 720);
//   } else if (pausedRotation <= 1080) {
//     rotation = 540;
//   } else if (pausedRotation <= 1260) {
//     rotation = 540 + (pausedRotation - 1080);
//   } else if (pausedRotation <= 1440) {
//     rotation = 720;
//   } else if (pausedRotation <= 1620) {
//     rotation = 720 + (pausedRotation - 1440);
//   } else {
//     rotation = 900;
//   }
//   console.log(pausedRotation);
//   setRotation(rotation);
// };

  

  // Set up the spring animation for the rotation
  const springProps = useSpring({
    from: { rotateY: 0 },
    transformOrigin: '50% 50%',
    transform: `perspective(1000px) 
                rotateY(${rotation}deg)
                 `,
    config: { ...config.slow},
  });


  const imageAnimation = useSpring({
    to: {
      transform: `
                scaleX(${1 + (scrollY / window.innerWidth)})
                scaleY(${1 + (scrollY / window.innerWidth)})
                `
    },
    config: { easing: 'slowEasing' }
  });

  const [bgAnimation, api] = useSpring(() => ({
    from: { scale: 2 },
    config: { duration: 2000 }
  }));

  return (
    <>
      {!isReady ? 
        <div className="flex justify-center items-center h-screen w-screen">
          <h1 className="text-center">Loading...</h1>
        </div>
      :
        
        <div id="container" onWheel={handleWheel} className="h-screen w-screen flex flex-col justify-center items-center">
          <div ref={reference} width="450" height="300" className='z-0'></div>
          <div id="imageContainer" ref={parRef} className=" h-full w-full">
          <svg className="w-full h-full fixed" ref={maskRef}>
              <mask id="myMask" className='myMask' >
                <animated.rect
                  x={(window.innerWidth - 450) / 2}
                  y={(window.innerHeight - 300) / 4}
                  className="rect"
                  width="450"
                  height="300"
                  fill="white"
                  style={{
                    
                    ...springProps
                  }}
                />
              </mask>
              <g mask="url(#myMask)">
                {showExpBg && <animated.image
                  className="h-screen w-screen"
                  href={spaceBg}
                  mask="url(#myMask)"
                  style={{
                    transformOrigin: '38% 50%',
                    // ...bgAnimation
                  }}
                />}
                <image ref={imgRef} className=' left-1/2'
                  href={skillsBg}
                  mask="url(#myMask)"
                  // style={{
                  //   transformOrigin: '50% 50%',
                  //   ...imageAnimation
                  // }}
                />
              </g>
            </svg>
            <div className="absolute inset-0 overflow-auto">
              {displaySkills && <Skills />}
              {showExperience && <Experience />}
              {showCertification && <Certifications />}
            </div>
          </div>
          {showIntro && <div id="intro1" className="h-screen w-full flex flex-col items-center justify-center border border-solid border-red-600">
          {/* <h1 className='fixed text-3xl md:text-5xl font-pixel'>Hello, I am</h1> */}
          <h1 className='fixed text-3xl md:text-5xl font-pixel'><ReactTyped strings={["AMRUTA PARAB"]} typeSpeed={50} /></h1>
          </div>}
        </div>
      }
      <div ref={conRef} style={{height: '200vh'}} className="w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    </>
  );
  
}

export default App;
