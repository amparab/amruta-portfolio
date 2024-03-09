
import CKADLogo from '../images/CKAD-Logo.png';
import { useSpring, animated } from '@react-spring/web';
import { gsap } from 'gsap';
import React, { useRef, useEffect, useState } from 'react';

export default function Certifications ({show}) {

    const certRef = useRef(null);
    const [showCert, setShowCert] = useState(false);

    useEffect(() => {
        if(show){
            setShowCert(true);
            gsap.fromTo(certRef.current, { opacity: 0 }, { opacity: 1 });
        } else {
            gsap.fromTo(certRef.current, { opacity: 1 }, { opacity: 0, onComplete: () => {
                setShowCert(false);
            } });
        }  
      }, [show]);

    const logoAnimation = useSpring({
        from: { 
            transform: `rotateZ(0deg)`,
            opacity: 0
        },
        to: {
            transform: `rotateZ(360deg)`,
            opacity: 2
        },
        config: { duration:1000 }
    });  

    return(
        <div className="fixed bottom-6 md:bottom-32 left-0 right-0 flex justify-center -z-10" ref={certRef}>
            {showCert && <div className="p-4 flex items-center">
                    <div className="w-24 h-24 mr-4 rounded-full flex-shrink-0">
                        <animated.img 
                            className="w-full h-full rounded-full" 
                            src={CKADLogo}
                            style={{...logoAnimation, transformOrigin: 'center'}}
                        />
                    </div>
                    <div>
                        <div className="text-sm md:text-lg font-knuckles">
                            I am a <br/>
                            Certified Kubernetes <br/> Application Developer</div>
                        </div>
                </div>}
         </div>
    );

}