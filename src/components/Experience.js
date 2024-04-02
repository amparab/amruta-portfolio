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
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        return () => {
            document.body.style.overflow = 'auto'; // Revert back to default when component unmounts
        };
    }, [showModal]);

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
    
        // const fourth_animation = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: scrollTriggerRef.current,
        //         start: 'top 25%',
        //         end: 'top top',
        //         scrub: 0.5,
        //         toggleActions: "play reverse play reverse",
        //     },
        // });
    
        third_animation.fromTo(fourth.current, { opacity: 0 }, {
            opacity: 1
        },0)
    }, []);
    

    return (

       <div className="fixed inset-0 overflow-auto p-5 flex flex-col justify-center items-center" ref={expRef}>
        
            {<div style={{display: showExp ? 'block' : 'none'}}>
                <div id="skills-title" className="text-xl md:text-4xl font-knuckles text-center my-1 md:my-8">
                {/* <ReactTyped strings={["My Education and Experience"]} typeSpeed={50} /> */}
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
                                        <div className="flex flex-col flex-grow text-sm md:text-lg" >
                                            <div className="font-knuckleslite text-white">VESIT</div>
                                            <p className="font-knuckleslite text-white">Bachelor's Degree <br/> in Computer Science</p>
                                            <p className="font-knuckleslite text-white">(2016 - 2020)</p>
                                            <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>Know MOre</button>
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
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
                                            <div className="font-knuckleslite text-white">JP Morgan Chase & Co.</div>
                                            <p className="font-knuckleslite text-white">(2020 - Present)</p>
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
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
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
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
                                            <div className="font-knuckleslite text-black">Software Engineer 2</div>
                                            <p className="font-knuckleslite text-black">(2023 - Present)</p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    
            </div></div>}
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-7xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        
        </div>


    );
});

export default Experience;


