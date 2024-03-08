import { ReactTyped } from 'react-typed';
import ProgressBar from './ProgressBar';
import '../input.css';
import SpringLogo from '../images/Spring-Logo.png';
import JavaLogo from '../images/Java-Logo.png';
import GitLogo from '../images/Git-Logo.png';
import KubernetesLogo from '../images/Kubernetes-Logo.png';
import KafkaLogo from '../images/Kafka-Logo.png';
import ReactLogo from '../images/React-Logo.png';
import SqlLogo from '../images/SQL-Logo.png';
import TailwindLogo from '../images/Tailwind_CSS_Logo.png';
import JiraLogo from '../images/Jira-Logo.png';
import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ref, show}) => {
    const logo = useRef(null);
    const [skills, setSkills] = useState(false);

    const images = [
        { id: 1, src: JavaLogo, progress: 85, name: 'Java', ref: logo },
        { id: 2, src: SpringLogo, progress: 80, name: 'Spring', ref: logo},
        { id: 3, src: KubernetesLogo, progress: 90, name: 'Kubernetes', ref: logo },
        { id: 4, src: SqlLogo, progress: 80, name: 'SQL' , ref: logo},
        { id: 5, src: ReactLogo, progress: 60, name: 'React', ref: logo },
        { id: 6, src: KafkaLogo, progress: 50, name: 'Kafka', ref: logo },
        { id: 7, src: GitLogo, progress: 75, name: 'Git' , ref: logo},
        { id: 8, src: TailwindLogo, progress: 50, name: 'TailwindCss', ref: logo }
      ];

      useEffect(() => {
        if(show){
            setSkills(true);
        } else {
            setSkills(false);
        }
    
        
      }, [show]);

    // const logoAnimation = useSpring({
    //     from: { 
    //         transform: `rotateY(90deg)`,
    //         opacity: 0
    //     },
    //     to: {
    //         transform: `rotateY(0deg) `,
    //         opacity: 2
    //     },
    //     config: { duration:1000 }
    // }); 

    // const temptl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ref.current,
    //       start: 'top center',
    //       end: 'bottom center',
    //       scrub: true, // Smooth animation
    //       ease: "slow",
    //       markers: true,
    //       toggleActions: "play reverse play reverse",
    //       onComplete: function() {
    //         console.log('complete');
    //         setSkills(false);
    //       }
    //     }
    //    });
    
    
    //   temptl.fromTo(logo.current, {transformOrigin: '50% 50%', rotateY: 90 ,perspective: 1000}, {
    //     perspective: 1000,
    //     transformOrigin: '50% 50%',
    //     rotateY: 180
    //   });

    const onCompleteTyping = () => {
        // setSkills(true);
        // temptl.play();
    }

    return (
        <>
            {skills && (
                <animated.div className="fixed inset-0 overflow-auto p-5 flex flex-col justify-center items-center">
                    <div id="skillsContainer" className=" text-white text-center" style={{ maxHeight: '200vh' }}>
                        <div id="skills-title" className="text-4xl md:text-6xl font-knuckles my-8">
                            <ReactTyped strings={["MY SKILLS"]} typeSpeed={50} onComplete={onCompleteTyping} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-44 pt-4">
                            {images.map((image) => (
                                <div key={image.id} className="p-4 flex items-center">
                                    <div ref={image.ref} className="w-12 h-12 mr-4 shadow-xl rounded-full flex-shrink-0" style={{ transformOrigin: 'center' }}>
                                        <img className="w-full h-full rounded-full" src={image.src} alt={`Image ${image.id}`} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-knuckleslite">{image.name}</div>
                                        <ProgressBar progress={image.progress} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </animated.div>
            )}
        </>
    );

};

export default Skills;