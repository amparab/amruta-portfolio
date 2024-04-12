import { ReactTyped } from 'react-typed';
import '../input.css';
import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ show }) => {
    const skillsRef = useRef(null);
    const [skills, setSkills] = useState(false);


    useEffect(() => {
        if (show) {
            setSkills(true);
            gsap.fromTo(skillsRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
        } else {
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