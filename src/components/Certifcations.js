import { ReactTyped } from 'react-typed';
import CKADLogo from '../images/CKAD-Logo.png';
import { useSpring, animated } from '@react-spring/web';

export default function Certifications () {

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
        <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
        <div id="skills-title" class="text-2xl md:text-4xl font-pixel mb-8">
            <ReactTyped strings={["My Certifications"]} typeSpeed={70} />
        </div>
        <div class="items-center justify-center">
            <div className="p-4 flex items-center">
            <div className=" w-36 h-36 mr-4 shadow-xl rounded-full flex-shrink-0">
                <animated.img 
                    className="w-full h-full rounded-full" 
                    src={CKADLogo}
                    style={{...logoAnimation, transformOrigin: 'center'}}
                 />
            </div>
            <div>
                <div className="text-lg font-pixel">Certified Kubernetes <br/> Application Developer</div>
            </div>
            </div>
        </div>
        </div>
    );

}