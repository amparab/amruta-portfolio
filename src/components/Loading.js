import React, { useEffect } from 'react';
import image from '../images/webp/pink.webp'
import skillsBg from '../images/sky.jpg'
import skyline from '../images/skyline-layer2.png'
import girl from '../images/skills_char-layer3.png'
import expImg from '../images/cert_girl-1.png'
import spaceBg from '../images/cert-bg-1.jpg'
import certBg from '../images/webp/contact-bg.webp'
import scrollGif from '../images/down-arrow.gif'
import CKADLogo from '../images/CKAD-Logo.png';
import LinkedIn from '../images/icons/linkedin.png';
import Github from '../images/icons/github.png';
import Knuckles from '../fonts/AznKnucklesTrial-z85pa.woff';
import KnucklesLite from '../fonts/AznKnucklesTrialLight-jEyJl.woff';
import VesitLogo from '../images/Vesit-Logo.png';
import JPLogo from '../images/JP-Logo.png';

const Loading = ({stopLoading})  => {

    const images = [image, skillsBg, skyline, girl, expImg, spaceBg, certBg, scrollGif, CKADLogo, LinkedIn, Github, VesitLogo, JPLogo];
    const fonts = [
      { name: 'Knuckles', url: Knuckles },
      { name: 'KnucklesLite', url: KnucklesLite }
    ];


    // useEffect(() => {

      
    //     Promise.all(images.map(url => new Promise((resolve, reject) => {
    //       const img = new Image();
    //       img.onload = resolve;
    //       img.onerror = reject;
    //       img.src = url;
    //     }
    //     )))
    //     .then(() => {
    //         console.log('Images Loaded');

    

    //         const timeout = setTimeout(() => {
    //             stopLoading();
    //         }, 3000); 
    //         return () => clearTimeout(timeout);
    //     })
    //     .catch(() => {
    //         console.error('Failed to preload images');
    //         const timeout = setTimeout(() => {
    //             stopLoading();
    //         }, 3000); 
    //         return () => clearTimeout(timeout);
    //     });

        
    //   }, []);


      const preloadImages = () => {
        return Promise.all(
          images.map(url =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = url;
            })
          )
        );
      };
    
      const preloadFonts = () => {
        return Promise.all(
          fonts.map(font =>
            new Promise((resolve, reject) => {
              const fontFace = new FontFace(font.name, `url(${font.url})`);
              fontFace.load().then(resolve).catch(reject);
              document.fonts.add(fontFace);
            })
          )
        );
      };
    
      useEffect(() => {
        preloadImages()
          .then(() => {
            console.log('Images loaded');
            return preloadFonts();
          })
          .then(() => {
            console.log('Fonts loaded');
          const timeout = setTimeout(() => {
              stopLoading();
            }, 3000); 
            return () => clearTimeout(timeout);
          })
          .catch(error => {
            console.error('Failed to preload images or fonts', error);
            const timeout = setTimeout(() => {
              stopLoading();
            }, 3000); 
            return () => clearTimeout(timeout);
          });
      }, []);



  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <svg
        width="200"  // Double the width
        height="200" // Double the height
        viewBox="0 0 100 100"
      >
        <path
          id="myPath"
          d="M 30 60 L 54 12 L 76 60 L 44 32 Z M 30 60 L 62 32 Z"
          fill="none"
          stroke="#3f5787"
          strokeWidth="3"
          strokeDasharray="300"
          strokeDashoffset="300"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            repeatCount="indefinite"
            values="300; 0; 300"
          />
        </path>
      </svg>
      <div className='font-knuckleslite text-xl'>Loading...</div>
    </div>
  );
};

export default Loading;
