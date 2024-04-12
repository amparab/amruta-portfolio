import { ReactTyped } from 'react-typed';
import '../input.css';
import SpringLogo from '../images/Spring-Logo.png';
import JavaLogo from '../images/Java-Logo.png';
import GitLogo from '../images/Git-Logo.png';
import KubernetesLogo from '../images/Kubernetes-Logo.png';
import KafkaLogo from '../images/Kafka-Logo.png';
import ReactLogo from '../images/React-Logo.png';
import SqlLogo from '../images/SQL-Logo.png';
import TailwindLogo from '../images/Tailwind_CSS_Logo.png';
import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ show }) => {
    const skillsRef = useRef(null);
    const [skills, setSkills] = useState(false);

    const images = [
        { id: 1, src: JavaLogo, progress: 85, name: 'Java' },
        { id: 2, src: SpringLogo, progress: 80, name: 'Spring' },
        { id: 3, src: KubernetesLogo, progress: 90, name: 'Kubernetes' },
        { id: 4, src: SqlLogo, progress: 80, name: 'SQL' },
        { id: 5, src: ReactLogo, progress: 60, name: 'React' },
        { id: 6, src: KafkaLogo, progress: 50, name: 'Kafka' },
        { id: 7, src: GitLogo, progress: 75, name: 'Git' },
        { id: 8, src: TailwindLogo, progress: 50, name: 'TailwindCss' },
        { id: 1, src: JavaLogo, progress: 85, name: 'Java' },
        { id: 2, src: SpringLogo, progress: 80, name: 'Spring' },
        { id: 3, src: KubernetesLogo, progress: 90, name: 'Kubernetes' },
        { id: 4, src: SqlLogo, progress: 80, name: 'SQL' },
        { id: 5, src: ReactLogo, progress: 60, name: 'React' },
        { id: 6, src: KafkaLogo, progress: 50, name: 'Kafka' },
        { id: 7, src: GitLogo, progress: 75, name: 'Git' },
        { id: 8, src: TailwindLogo, progress: 50, name: 'TailwindCss' },
        { id: 1, src: JavaLogo, progress: 85, name: 'Java' },
        { id: 2, src: SpringLogo, progress: 80, name: 'Spring' },
        { id: 3, src: KubernetesLogo, progress: 90, name: 'Kubernetes' },
        { id: 4, src: SqlLogo, progress: 80, name: 'SQL' },
        { id: 5, src: ReactLogo, progress: 60, name: 'React' },
        { id: 6, src: KafkaLogo, progress: 50, name: 'Kafka' },
        { id: 7, src: GitLogo, progress: 75, name: 'Git' },
        { id: 8, src: TailwindLogo, progress: 50, name: 'TailwindCss' }

    ];


    useEffect(() => {
        if (show) {
            setSkills(true);
            gsap.fromTo(skillsRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
        } else {
            // setSkills(false);
            gsap.fromTo(skillsRef.current, { opacity: 1 }, {
                opacity: 0, onComplete: () => {
                    setSkills(false);
                }
            });
        }
    }, [show]);

    return (
        <>
            {
                <div className="fixed inset-0 p-5 flex flex-col justify-center items-center" ref={skillsRef}>
                    {skills && <div id="skillsContainer" className="text-white text-center" style={{ maxHeight: '200vh' }}>
                        <div id="skills-title" className="text-2xl md:text-5xl font-knuckles md:my-8">
                            <ReactTyped strings={["MY SKILLS"]} typeSpeed={50} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16">
                            <div>
                                <div className='py-2 md:py-4'>
                                    <div className="text-lg md:text-3xl font-knuckleslite">Technologies</div>
                                    <hr className="border-t-1 border-gray-300 my-1" />
                                </div>
                                <div className="grid grid-cols-2 gap-x-8">
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Java
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        Spring
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        SQL
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        Kubernetes
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        React
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        Kafka
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Maven
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        Shell
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='py-2 md:py-4'>
                                    <div className="text-lg md:text-3xl font-knuckleslite">Concepts</div>
                                    <hr className="border-t-1 border-gray-300 my-1" />
                                </div>
                                <div className="grid grid-cols-2 gap-x-8">
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Microservices
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        REST
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Messaging Queues
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        SOLID Principles
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Design Patterns
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        JUnit Testing
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='py-2 md:py-4'>
                                    <div className="text-lg md:text-3xl font-knuckleslite">Tools</div>
                                    <hr className="border-t-1 border-gray-300 my-1" />
                                </div>

                                <div className="grid grid-cols-2 gap-x-8">
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Git
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        SQL Developer
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Postman
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        Splunk
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Jenkins
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        IntelliJ
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-right">
                                        Confluence
                                    </div>
                                    <div className="text-base md:text-xl font-knuckleslite text-left">
                                        Jira
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            }
        </>
    );




};

export default Skills;