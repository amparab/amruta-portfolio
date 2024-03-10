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

const Skills = ({show}) => {
    const skillsRef = useRef(null);
    const [skills, setSkills] = useState(false);

    const images = [
        { id: 1, src: JavaLogo, progress: 85, name: 'Java'},
        { id: 2, src: SpringLogo, progress: 80, name: 'Spring'},
        { id: 3, src: KubernetesLogo, progress: 90, name: 'Kubernetes'},
        { id: 4, src: SqlLogo, progress: 80, name: 'SQL'},
        { id: 5, src: ReactLogo, progress: 60, name: 'React'},
        { id: 6, src: KafkaLogo, progress: 50, name: 'Kafka'},
        { id: 7, src: GitLogo, progress: 75, name: 'Git'},
        { id: 8, src: TailwindLogo, progress: 50, name: 'TailwindCss'}
      ];


      useEffect(() => {
        if(show){
            setSkills(true);
            gsap.fromTo(skillsRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
        } else {
            // setSkills(false);
            gsap.fromTo(skillsRef.current, { opacity: 1 }, { opacity: 0, onComplete: () => {
                setSkills(false);
            } });
        }  
      }, [show]);

    return (
        <>
            {


                <div className="fixed inset-0 overflow-auto p-5 flex flex-col justify-center items-center" ref={skillsRef}
                >
                    {skills && <div id="skillsContainer" className=" text-white text-center" style={{ maxHeight: '200vh' }}>
                         <div id="skills-title" className="text-xl md:text-6xl font-knuckles my-4 md:my-8">
                            <ReactTyped strings={["MY SKILLS"]} typeSpeed={50} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-44"> 
                            {images.map((image) => (
                                <div key={image.id} className="p-4 flex items-center">
                                    <div className="w-6 h-6 md:w-12 md:h-12 mr-4 shadow-xl rounded-full flex-shrink-0" style={{ transformOrigin: 'center' }}>
                                        <img className="w-full h-full rounded-full" src={image.src} alt={`Image ${image.id}`} />
                                    </div>
                                    <div>
                                        <div className="sm:text-sm md:text-lg font-knuckleslite">{image.name}</div>
                                        <ProgressBar progress={image.progress} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>}
                </div>
            }
        </>
    );

};

export default Skills;