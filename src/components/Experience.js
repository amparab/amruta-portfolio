import VesitLogo from '../images/Vesit-Logo.png';
import JPLogo from '../images/JP-Logo.png';
import { ReactTyped } from 'react-typed';
import React, { useEffect, useState, useRef } from 'react';
import '../input.css';
import { gsap } from 'gsap';

const Experience = React.forwardRef(({ show, scrollTriggerRef }, ref) => {

    const expRef = useRef(null);
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);
    const [showExp, setShowExp] = useState(false);

    useEffect(() => {
        console.log('show',show);
        if(show){
            setShowExp(true);
            // gsap.fromTo(expRef.current, { opacity: 0 }, { opacity: 1 });
        } else {
            setShowExp(false);
            // gsap.fromTo(expRef.current, { opacity: 1 }, { opacity: 0, onComplete: () => {
            //     setShowExp(false);
            // } });
        }  
    }, [show]);

    useEffect(() => {
        const first_animation = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: 'top bottom',
                end: 'top 75%',
                scrub: 0.5,
                toggleActions: "play reverse play reverse",
                markers: true
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
                toggleActions: "play reverse play reverse",
                markers: true
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
                toggleActions: "play reverse play reverse",
                markers: true
            },
        });
    
        third_animation.fromTo(third.current, { opacity: 0 }, {
            opacity: 1
        })
    
        const fourth_animation = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: 'top 25%',
                end: 'top top',
                scrub: 0.5,
                toggleActions: "play reverse play reverse",
                markers: true
            },
        });
    
        fourth_animation.fromTo(fourth.current, { opacity: 0 }, {
            opacity: 1
        })
    }, []);
    
    

    

    return (

       <div className="fixed inset-0 overflow-auto p-5 flex flex-col justify-center items-center" ref={expRef}>
            {<div style={{display: showExp ? 'block' : 'none'}}>
                <div id="skills-title" className="text-xl md:text-4xl font-knuckles text-center my-1 md:my-8">
                <ReactTyped strings={["My Education and Experience"]} typeSpeed={50} />
            </div>


                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    <div class="flex md:contents flex-row-reverse">
                    <div
                                    class="relative my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <div className="p-2 rounded-md flex items-center bg-cyan-600" ref={first}>
                                        <div className="w-8 h-8 md:w-16 md:h-16 mr-4 rounded-full overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover rounded-full" src={VesitLogo} alt="Vesit Logo" />
                                        </div>
                                        <div className="flex flex-col flex-grow text-sm md:text-lg" >
                                            <div className="font-knuckleslite text-white">VESIT</div>
                                            <p className="font-knuckleslite text-white">Bachelor's Degree <br/> in Computer Science</p>
                                            <p className="font-knuckleslite text-white">(2016 - 2020)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div class="flex items-center justify-center w-6 h-full">
                                        <div class="w-1 h-full bg-gray-400 rounded-t-full bg-gradient-to-b">
                                        </div>
                                    </div>
                                    <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                                </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-gray-400"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                    <div className="p-2 rounded-md flex items-center bg-cyan-600" ref={second}>
                                        <div className="w-8 h-8 md:w-16 md:h-16 mr-4 rounded-full overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover rounded-full" src={JPLogo} alt="Vesit Logo" />
                                        </div>
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
                                            <div className="font-knuckleslite text-white">JP Morgan Chase & Co.</div>
                                            <p className="font-knuckleslite text-white">(2020 - Present)</p>
                                        </div>
                                    </div>
                                </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-gray-400"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-2 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto" ref={third}>
                                    <div className="rounded-md flex items-center">
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
                                            <div className="font-knuckleslite text-black">Software Engineer 1</div>
                                            <p className="font-knuckleslite text-black">(2020 - 2023)</p>
                                        </div>
                                    </div>
                                </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-gray-400"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-600 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-2 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto" ref={fourth}>
                                    <div className="rounded-md flex items-center">
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
                                            <div className="font-knuckleslite text-black">Software Engineer 2</div>
                                            <p className="font-knuckleslite text-black">(2023 - Present)</p>
                                        </div>
                                    </div>
                                </div>
                    </div>

            </div></div>}
        </div>


    );
});

export default Experience;


