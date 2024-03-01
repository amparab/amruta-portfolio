import './input.css';
import { useSpring, animated } from '@react-spring/web';
import React, { useEffect, useState, useMemo } from 'react';
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


  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setScrollDirection('down');
    } else if (event.deltaY < 0) {
      setScrollDirection('up');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const parentWidth = window.innerHeight;
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
    case curRotation < 120:
      // Display the Intro section

      setImageSource(image);
      setShowIntro(true);

      setDisplaySkills(false);
      setShowExperience(false);
      setShowExpBg(false);
      setShowCertification(false);  
      break;
    case curRotation >= 120 && curRotation < 180:
      // Display Skill Bg Image first
      setImageSource(skillsBg);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExperience(false);
      setShowExpBg(false);
      setShowCertification(false);  

      break;
    case curRotation >= 180 && curRotation < 270:
      // Show Skills
      setImageSource(skillsBg);
      setDisplaySkills(true);

      setShowIntro(false);
      setShowExperience(false);
      setShowExpBg(false);
      setShowCertification(false);

      break;

    case curRotation >= 270 && curRotation < 300:
      // Show Skills
      setImageSource(skillsBg);

      setDisplaySkills(false);
      setShowIntro(false);
      setShowExperience(false);
      setShowExpBg(false);
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
    case curRotation >= 360 && curRotation < 400:
      // Start experience animation
      setImageSource(expImg);
      setShowExpBg(true);
      setShowExperience(false);

      setShowIntro(false);
      setDisplaySkills(false);
      setShowExperience(false);
      setShowCertification(false);
      
      break;
    case curRotation >= 370 && curRotation < 645:
      // Start experience and other animations
      setShowExperience(true);
      setImageSource(expImg);
      setShowExpBg(true);
      setMinRotation(360);
      setRotationThresh(540);

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

  useEffect(() => {
    const curRotation = scrollY * 360 / window.innerHeight;
    setRotation(Math.min(curRotation, minRotation));
    setCurrentRotation(curRotation);
    console.log(curRotation);

    if(scrollDirection === 'down'){
        scrollingDownSequence(curRotation);
    } else {
      scrollingUpSequence(curRotation);
    }

  }, [scrollY]);

  const getRotation = useMemo(() => {
    const rotAnim = currentRotation <= rotationThresh ? rotation : Math.min(minRotation + (currentRotation - rotationThresh), rotationThresh);
    return rotAnim;
  }, [currentRotation, rotation, rotationThresh, minRotation]);

  const scaleMaskX = useMemo(() => {
    if(currentRotation <= 360) {
      return 1 + (scrollY * scaleFactorX / window.innerWidth);
    } else if (currentRotation > 1000) {
      return 1;
    }
    else return 1 + (scrollY * 0.5 / window.innerWidth);
    
  }, [currentRotation, scrollY, scaleFactorX]);

  const scaleMaskY = useMemo(() => {
    if (currentRotation <= 360) {
      return 1 + (scrollY * scaleFactorY / window.innerHeight);
    } else if (currentRotation < 660) {
      return 1 + (scrollY*2 / window.innerHeight);;
    } else if (currentRotation > 660) {
      return 2;
    }
  }, [currentRotation, scrollY, scaleFactorY]);

  const springProps = useSpring({
    from: {
      transform: `perspective(1000px)`
    },
    to: {
      transform: `perspective(1000px) 
                rotateY(${getRotation}deg) 
                scaleX(${scaleMaskX})
                scaleY(${scaleMaskY})
                translateY(${window.innerWidth < Constants.large_screen_breakpoint ? Math.max(-(scrollY), -window.innerHeight * 0.3) : '0'}px)
                translateX(${currentRotation < 1000 ? '0' : window.innerHeight * 0.3}px)
                `
    },
    config: { easing: 'slowEasing' }
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
    from: { scale: 1.5 },
    config: { duration: 2000 }
  }));

  return (
    <>
    {!isReady ? 
    <div className="flex justify-center items-center h-screen w-screen">
      <h1 className="text-center">Loading...</h1>
    </div>
    :
      <div id="container" onWheel={handleWheel} className="h-screen w-screen flex flex-col md:flex-row justify-center items-center">
      <div id="imageContainer" className="z-10 flex-shrink-0 h-1/2 md:h-full w-full md:w-1/2 order-2 md:order-1">
        <svg className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full fixed">
          <mask id="myMask" className='myMask' >
            <animated.rect
              x={((rectX - 450) / 1.25)}
              y={(rectY - 300) / 2}
              className="rect"
              width="450"
              height="300"
              fill="white"
              style={{
                transformOrigin: '38% 50%',
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
                ...bgAnimation
              }}
            />}
            <animated.image
              className="h-screen w-screen"
              href={imageSource}
              mask="url(#myMask)"
              style={{
                transformOrigin: '38% 50%',
                ...imageAnimation
              }}
              />
          </g>
          
        </svg>
        <div className="absolute inset-0 overflow-auto">
          {displaySkills && <Skills />}
          {showExperience && <Experience />}
          {showCertification && <Certifications />}
        </div>
      </div>
      {showIntro && <div id="intro1" className="flex-shrink-0 h-1/2 md:h-full w-full md:w-1/2 flex justify-start items-center order-1 md:order-2 pl-5">
        <h1 className='fixed text-3xl md:text-5xl font-pixel'>Hello,<br />I am <br />
          <ReactTyped strings={["AMRUTA PARAB"]} typeSpeed={50} />
        </h1>
      </div>}
    </div>
    }
    <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    </>
  );
}

export default App;
