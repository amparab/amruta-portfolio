import './input.css';
import { useSpring, animated, config  } from '@react-spring/web';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import image from './images/main.png'
import skillsBg from './images/skills-bg.png'
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
  const conRef2 = useRef(null);
  const conRef1 = useRef(null);

  const maskRef = useRef(null);
  const reference = useRef(null);
  const tempRef = useRef(null);

  useEffect(() => {
    const temptl = gsap.timeline({
      scrollTrigger: {
        trigger: conRef.current,
        id: 'first',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true, // Smooth animation
        // ease: "slow",
        markers: true,
        toggleActions: "play reverse play reverse",
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        console.log('currentRotation', currentRotation);
        let progress = ScrollTrigger.getById("first").progress;
        console.log('progress', progress);
        if(progress >= 0.5){
          setImageSource(skillsBg);
        } else{
          setImageSource(image);
        }
        setRotation(currentRotation);
      },
      onComplete: function() {
        setDisplaySkills(true);
      }
     });

    const temptl2 = gsap.timeline({
      onStart: () => {
        setDisplaySkills(false)
      },
      scrollTrigger: {
        trigger: conRef2.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true, // Smooth animation
        ease: "slow"
      },
      onUpdate: function () {
        let currentRotation = gsap.getProperty(reference.current, "rotation");
        setRotation(currentRotation);
      }
    });
  
    // Define the animation
    temptl.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 180
    })

    temptl2.to(reference.current, {
      transformOrigin: '100% 100%',
      rotate: 360,
    })

    temptl2.to(maskRef.current, {
      x: -1000,
    }, 0)
  
    return () => {
      temptl.kill();
      temptl2.kill();
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
      ease: "slow"
    }
  });

  // Define the animation
  tl.to(mask,
    {
    // transformOrigin: '50% 50%',
    scale: () => Math.max(window.innerWidth / 450, window.innerHeight / 300),
    y: window.innerHeight/2
    // width: window.innerWidth,
    // height: window.innerHeight
  });

  gsap.set(tempRef.current, { transformOrigin: "50% 50%" });
  const tltemp = gsap.timeline({
    scrollTrigger: {
      trigger: conRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true, // Smooth animation
      ease: "slow"
    }
  });

  // Define the animation
  tltemp.to(tempRef.current,
    {
    // transformOrigin: '50% 50%',
    scale: () => Math.max(window.innerWidth / 450, window.innerHeight / 300),
    y: window.innerHeight/2,
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



  // Set up the spring animation for the rotation
  const springProps = useSpring({
    from: { rotateY: 0 },
    transformOrigin: '50% 50%',
  //     transform: `perspective(500px) 
  //                 rotateY(${rotation}deg)   
  //                 scaleX(${scaleMaskX})
  //                 scaleY(${scaleMaskY})
    transform: `perspective(1200px) 
                rotateY(${rotation}deg)`,
  //   config: { mass: 5, tension: 350, friction: 40 }
    config: { ...config.slow},
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
          <div id="imageContainer" className=" h-full w-full">
          <svg className="w-full h-full fixed">
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
              {/* <g mask="url(#myMask)"> */}
                {/* {<image ref={tempRef}
                  width={800} // Specify the width of the image
                  x={(window.innerWidth - 800) / 2} // Horizontally center the image
                  href={imageSource}
                  mask="url(#myMask)"
                />} */}
                
                
              {/* </g> */}
            </svg>
            <svg className="w-full h-full fixed z-10" mask="url(#myMask)" ref={maskRef} >
              <g>
              <image
                href={imageSource}
                mask="url(#myMask)"
                width={800} // Specify the width of the image
                x={(window.innerWidth - 800) / 2} // Horizontally center the image
              />
              {showExpBg && <image
                href={expImg}
                ref={tempRef}
                width={800} // Specify the width of the image
                x={(window.innerWidth - 800) / 2} // Horizontally center the image
              />}
              </g>
            
            </svg>
          </div>
          {showIntro && <div id="intro1" className="z-0 h-screen w-full flex flex-col items-center justify-center border border-solid border-red-600">
          {/* <h1 className='fixed text-3xl md:text-5xl font-pixel'>Hello, I am</h1> */}
          <h1 className='fixed text-3xl md:text-5xl font-pixel'>
            <ReactTyped strings={["AMRUTA PARAB"]} typeSpeed={50} /></h1>
          </div>}
        </div>
      }
      <div ref={conRef} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-slate-500"></div>
      <div ref={conRef1} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-yellow-600"></div>
      <div ref={conRef2} className=" h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-purple-500"></div>
      <div className="absolute inset-0 overflow-auto z-50">
              {<Skills show={displaySkills} ref={conRef1} />}
              {showExperience && <Experience />}
              {showCertification && <Certifications />}
            </div>
      <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    </>
  );
  
}

export default App;
