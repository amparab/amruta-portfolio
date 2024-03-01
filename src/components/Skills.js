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

export default function Skills () {

    const logoAnimation = useSpring({
        from: { 
            transform: `rotateY(90deg)`,
            opacity: 0
        },
        to: {
            transform: `rotateY(0deg) `,
            opacity: 2
        },
        config: { duration:1000 }
    }); 

    const images = [
        { id: 1, src: JavaLogo, progress: 85, name: 'Java' },
        { id: 2, src: SpringLogo, progress: 80, name: 'Spring' },
        { id: 3, src: KubernetesLogo, progress: 90, name: 'Kubernetes' },
        { id: 4, src: SqlLogo, progress: 80, name: 'SQL' },
        { id: 5, src: ReactLogo, progress: 60, name: 'React' },
        { id: 6, src: KafkaLogo, progress: 50, name: 'Kafka' },
        { id: 7, src: GitLogo, progress: 75, name: 'Git' },
        { id: 8, src: TailwindLogo, progress: 50, name: 'TailwindCss' },
        { id: 9, src: JiraLogo, progress: 40, name: 'Jira' }
      ];

    return(
        <>
            <animated.div class="fixed inset-0 overflow-auto p-5">              
                <div id="skillsContainer" 
                    class="flex flex-col justify-center items-center text-white" style={{ maxHeight: '200vh' }}>
                    <div id="skills-title" class="text-4xl md:text-6xl font-pixel mb-8">
                        <ReactTyped strings={["MY SKILLS"]} typeSpeed={100} />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {images.map((image) => (
                        <div className="p-4 flex items-center">
                            <animated.div 
                                className="w-24 h-24 mr-4 shadow-xl rounded-full flex-shrink-0"
                                style={{...logoAnimation, transformOrigin: 'center'}}
                            >
                                <img className="w-full h-full rounded-full" src={image.src} alt={`Image ${image.id}`} key={image.id} />
                            </animated.div>
                            <div>
                                <div className="text-lg font-pixel">{image.name}</div>
                                <ProgressBar progress={image.progress} />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </animated.div> 
        </>
    );

}