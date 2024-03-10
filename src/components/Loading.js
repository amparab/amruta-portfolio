import React from 'react';
import { gsap } from 'gsap';

const Loading = () => {
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
