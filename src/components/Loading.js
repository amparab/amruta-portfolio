import React, { useEffect } from 'react';
import image from '../images/webp/pink.webp'
import skillsBg from '../images/sky.jpg'
import skyline from '../images/skyline-layer2.png'
import girl from '../images/skills_char-layer3.png'
import expImg from '../images/Girl_Computer.png'
import spaceBg from '../images/space-bg-layer.jpg'
import certBg from '../images/webp/contact-bg.webp'
import scrollGif from '../images/down-arrow.gif'
import CKADLogo from '../images/CKAD-Logo.png';
import LinkedIn from '../images/icons/linkedin.png';
import Github from '../images/icons/github.png';

const Loading = ({stopLoading})  => {

    const images = [image, skillsBg, skyline, girl, expImg, spaceBg, certBg, scrollGif, CKADLogo, LinkedIn, Github];

    useEffect(() => {
        // const timeout = setTimeout(() => {
        //     stopLoading();
        // }, 3000); 
        // return () => clearTimeout(timeout);

        Promise.all(images.map(url => new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        })))
        .then(() => {
            console.log('Loaded')
            const timeout = setTimeout(() => {
                stopLoading();
            }, 3000); 
            return () => clearTimeout(timeout);
        })
        .catch(() => {
            console.error('Failed to preload images');
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
