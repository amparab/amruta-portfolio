import VesitLogo from '../images/Vesit-Logo.png';
import JPLogo from '../images/JP-Logo.png';
import React, { useEffect, useState, useRef } from 'react';
import '../input.css';
import { gsap } from 'gsap';
import EducationModal from './experience-component/education-modal';
import ExperienceModal from './experience-component/experience-modal';

const Experience = React.forwardRef(({ show, scrollTriggerRef }, ref) => {

    const expRef = useRef(null);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);
    const [showExp, setShowExp] = useState(false);
    const [showEduModal, setShowEduModal] = useState(false);
    const [showExpModal, setShowExpModal] = useState(false);

    useEffect(() => {
        if (showEduModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Revert back to default when component unmounts
        };
    }, [showEduModal]);

    useEffect(() => {
        setShowExp(show);
    }, [show]);

    useEffect(() => {
        const first_animation = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: 'top bottom',
                end: 'top 75%',
                scrub: 0.5,
                toggleActions: "play reverse play reverse"
            },
        });

        first_animation.fromTo(first.current, { opacity: 0 }, {
            opacity: 1
        })

        const second_animation = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: 'top 75%',
                end: 'top 50%',
                scrub: 0.5,
                toggleActions: "play reverse play reverse"
            },
        });

        second_animation.fromTo(second.current, { opacity: 0 }, {
            opacity: 1
        })

        const third_animation = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: 'top 50%',
                end: 'top 25%',
                scrub: 0.5,
                toggleActions: "play reverse play reverse"
            },
        });

        third_animation.fromTo(third.current, { opacity: 0 }, {
            opacity: 1
        })

        third_animation.fromTo(fourth.current, { opacity: 0 }, {
            opacity: 1
        }, 0)
    }, [scrollTriggerRef]);

    const closeEduModal = () => {
        setShowEduModal(false);
    }

    const closeExpModal = () => {
        setShowExpModal(false);
    }


    return (

        <div className="fixed inset-0 overflow-auto p-5 flex flex-col justify-center items-center" ref={expRef}>

            {<div style={{ display: showExp ? 'block' : 'none' }}>
                <div id="skills-title" className="text-xl md:text-4xl font-knuckles text-center my-1 md:my-8">
                    My Education and Experience
                </div>

                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    <div className="flex md:contents flex-row-reverse">
                        <div
                            className="relative my-2 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <div className="p-2 rounded-md flex items-center bg-cyan-600" ref={first}>
                                <div className="w-8 h-8 md:w-16 md:h-16 mr-4 rounded-full overflow-hidden flex-shrink-0">
                                    <img className="w-full h-full object-cover rounded-full" src={VesitLogo} alt="Vesit Logo" />
                                </div>
                                <div className="flex flex-col flex-grow text-sm md:text-base 2xl:text-xl" >
                                    <div className="font-knuckleslite text-white">VESIT</div>
                                    <p className="font-knuckleslite text-white">Bachelor's Degree <br /> in Computer Science</p>
                                    <p className="font-knuckleslite text-white">(2016 - 2020)</p>
                                    <div className="py-1"><button type="reset" onClick={() => setShowEduModal(true)} className="py-1 px-2 text-sm bg-white hover:bg-black hover:text-white text-black border border-black rounded-md font-knuckleslite">Know More</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-gray-400 rounded-t-full bg-gradient-to-b">
                                </div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-gray-400"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative my-2 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <div className="p-2 rounded-md flex items-center bg-cyan-600" ref={second}>
                                <div className="w-8 h-8 md:w-16 md:h-16 mr-4 rounded-full overflow-hidden flex-shrink-0">
                                    <img className="w-full h-full object-cover rounded-full" src={JPLogo} alt="Vesit Logo" />
                                </div>
                                <div className="flex flex-col flex-grow text-sm md:text-base 2xl:text-xl">
                                    <div className="font-knuckleslite text-white">JP Morgan Chase & Co.</div>
                                    <p className="font-knuckleslite text-white">(2020 - Present)</p>
                                    <div className="py-1"><button type="reset" onClick={() => setShowExpModal(true)} className="py-1 px-2 text-sm bg-white hover:bg-black hover:text-white text-black border border-black rounded-md font-knuckleslite">Know More</button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-gray-400"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-2 my-2 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto" ref={third}>
                            <div className="rounded-md flex items-center">
                                <div className="flex flex-col flex-grow text-sm md:text-base 2xl:text-xl">
                                    <div className="font-knuckleslite text-black">Software Engineer 1</div>
                                    <p className="font-knuckleslite text-black">(2020 - 2023)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-gray-400"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-2 my-2 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto" ref={fourth}>
                            <div className="rounded-md flex items-center">
                                <div className="flex flex-col flex-grow text-sm md:text-base 2xl:text-xl">
                                    <div className="font-knuckleslite text-black">Software Engineer 2</div>
                                    <p className="font-knuckleslite text-black">(2023 - Present)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div></div>}
            {showEduModal ? <EducationModal closeEduModal={closeEduModal} /> : null}
            {showExpModal ? <ExperienceModal closeExpModal={closeExpModal} /> : null}
        </div>


    );
});

export default Experience;


