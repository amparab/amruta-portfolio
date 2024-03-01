import './input.css';
import { useSpring, animated } from '@react-spring/web';
import React, { useRef, useEffect, useState } from 'react';
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

function App() {

    const [scrollY, setScrollY] = useState(0);
    const [imageSource, setImageSource] = useState(image);
    const [rectX, setRectX] = useState(0);
    const [rectY, setRectY] = useState(0);
    const [scaleFactor, setScaleFactor] = useState(0);
    const [displaySkills, setDisplaySkills] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [currentRotation, setCurrentRotation] = useState(0);
    const [showExperience, setShowExperience] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [showExpBg, setShowExpBg] = useState(false);
    const [minRotation, setMinRotation] = useState(180);
    const [rotationThresh, setRotationThresh] = useState(360);
    const [showCertification, setShowCertification] = useState(false);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };


    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {

      const parentDiv = document.getElementById('intro2');
      const parentWidth = parentDiv.offsetWidth;
      if (window.innerWidth > 768) { // Large screen
        setRectY(window.innerHeight);
        setScaleFactor(4);
      } else { // Small screen
        setRectY(window.innerHeight + (window.innerHeight/3));
        setScaleFactor(2);
      }
      setRectX(parentWidth) ;

    }, []);

    useEffect(() => {
      const curRotation = scrollY * 360 / window.innerHeight;
      setRotation(Math.min(curRotation, minRotation));
      setCurrentRotation(curRotation);
      console.log('rotation', rotation);
      console.log('curRotation', curRotation)
      // Change image source when rotation reaches 90 degrees
      if (curRotation < 120) {
        setDisplaySkills(false);
        setImageSource(image);
        setShowIntro(true);
      } else if( curRotation >= 120 && curRotation < 360) {
         setDisplaySkills(true);
         setImageSource(skillsBg);
         setShowExpBg(false);
         setShowExperience(false);
      } else if (curRotation >= 360 && curRotation < 480){
        setDisplaySkills(false);
        setShowIntro(false);
        setImageSource(skillsBg);
        setShowExperience(false);
        setShowExpBg(true);
      } else if (curRotation > 480 && curRotation < 485) {
        setImageSource(expImg);
        api.start({
          from: {scale: 2},
          to: {scale: 2.5}
        });
      }  else if (curRotation > 485 && curRotation < 660) {
        setMinRotation(360); // 180 + 360
        setRotationThresh(540); //360+180
        setShowExperience(true);
        setShowExpBg(true);
        setImageSource(expImg);
        setShowCertification(false);
      } else if (curRotation > 660){
        setShowExpBg(false);
        setShowExperience(false);
        setImageSource(certBg);
        setShowCertification(true);
      }
    }, [scrollY]);


    const getRotation = () => {
      const rotAnim = currentRotation <= rotationThresh ? rotation : Math.min(minRotation+(currentRotation - rotationThresh), rotationThresh);
      // console.log('rotAnim', rotAnim);
      return rotAnim;
    }

    const scaleMaskX = () => {
      if(currentRotation <= 360){
        return 1 + (scrollY*scaleFactor / window.innerWidth);
      } else {
        return 0.7;
      }
    }

    const scaleMaskY = () => {

      if(currentRotation <= 360){
        return 1 + (scrollY*scaleFactor / window.innerHeight);
      } else if (currentRotation < 660){
        return 2;
      } else if (currentRotation >660) {
        return 0.8;
      }

    }


    const springProps = useSpring({
      from:{       
        transform: `perspective(1000px)`
      },
      to: {
        transform: `perspective(1000px) 
                  rotateY(${getRotation()}deg) 
                  scaleX(${scaleMaskX()})
                  scaleY(${scaleMaskY()})
                  translateY(${window.innerWidth < 768 ? Math.max(-(scrollY), -window.innerHeight*0.3) : '0'}px)
                  `
      },
      config: { easing: 'ease-in-out' }
    });

    const imageAnimation = useSpring({
      to: {
        transform: `
                  scaleX(${1 + (scrollY / window.innerWidth)})
                  scaleY(${1 + (scrollY / window.innerWidth)})
                  `
      },
      config: { easing: 'ease-in-out' }
    });

    const [bgAnimation, api] = useSpring(() => ({
      from: {scale: 2},
      config: { duration: 3000 }
    }));

    const stopScrolling = (isAnimating) => {
      console.log('in parent', isAnimating);
      if(isAnimating){
          var scrollPosition = window.scrollY;
          window.onscroll = function() {
            window.scrollTo(0, scrollPosition);
          };
      }
      
    };

  return (
    <>
      <div id="container" class="h-screen w-screen flex flex-col md:flex-row justify-center items-center">
        <div id="intro2" class="z-10 flex-shrink-0 h-1/2 md:h-full w-full md:w-1/2 order-2 md:order-1">
          <svg class="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full fixed">
            <mask id="myMask" className='myMask' >
              <animated.rect 
                x={((rectX - 450)/1.25)}  
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
            {/* <g mask="url(#myMask)"> */}
            {showExpBg && <animated.image
              class="h-screen w-screen"
              href={spaceBg}
              mask="url(#myMask)"
              style={{
                transformOrigin: '38% 50%',
                ...bgAnimation
              }}
            />}
            <animated.image
              class="h-screen w-screen"
              href={imageSource}
              mask="url(#myMask)"
              style={{
                transformOrigin: '38% 50%',
                ...imageAnimation
              }}
            />
            {/* <animated.image
              class="h-screen w-screen opacity-50"
              href={black}
              mask="url(#myMask)"
            /> */}
          {/* </g> */}
            

          </svg>
          <div class="absolute inset-0 overflow-auto">
          {displaySkills && <Skills currentRotation={currentRotation} stopScrolling={stopScrolling} /> }
          {showExperience && <Experience />}
          {showCertification && <Certifications />}
          </div>
          
        </div>
        {showIntro && <div id="intro1" class="flex-shrink-0 h-1/2 md:h-full w-full md:w-1/2 flex justify-start items-center order-1 md:order-2 pl-5">
          <h1 class='fixed text-3xl md:text-5xl font-pixel'>Hello,<br/>I am <br/> 
            <ReactTyped strings={["AMRUTA PARAB"]} typeSpeed={50} />
          </h1>
        </div>}
      </div>
      <div id="container" class="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div id="container" class="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
      <div id="container" class="h-screen w-screen flex flex-col md:flex-row justify-center items-center"></div>
    </>
  );
}

export default App;