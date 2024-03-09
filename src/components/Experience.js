import VesitLogo from '../images/Vesit-Logo.png';
import JPLogo from '../images/JP-Logo.png';
import { ReactTyped } from 'react-typed';
import { useEffect, useState, useRef } from 'react';
import '../input.css';
import { gsap } from 'gsap';

export default function Experience({show}) {

    const expRef = useRef(null);
    const [showExp, setShowExp] = useState(false);

    useEffect(() => {
        if(show){
            setShowExp(true);
            gsap.fromTo(expRef.current, { opacity: 0 }, { opacity: 1 });
        } else {
            gsap.fromTo(expRef.current, { opacity: 1 }, { opacity: 0, onComplete: () => {
                setShowExp(false);
            } });
        }  
      }, [show]);

    return (

       <div className="fixed inset-0 overflow-auto p-5 flex flex-col justify-center items-center" ref={expRef}>
            {showExp && <div>
                <div id="skills-title" className="text-xl md:text-4xl font-knuckles text-center">
                <ReactTyped strings={["My Education and Experience"]} typeSpeed={50} />
            </div>


                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    <div class="flex md:contents flex-row-reverse">
                    <div
                                    class="relative my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto shadow-xl">
                                    <div className="p-2 rounded-md flex items-center bg-cyan-600">
                                        <div className="w-8 h-8 md:w-16 md:h-16 mr-4 shadow-xl rounded-full overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover rounded-full" src={VesitLogo} alt="Vesit Logo" />
                                        </div>
                                        <div className="flex flex-col flex-grow text-sm md:text-lg">
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
                        <div class="relative my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto shadow-xl">
                                    <div className="p-2 rounded-md flex items-center bg-cyan-600" >
                                        <div className="w-8 h-8 md:w-16 md:h-16 mr-4 shadow-xl rounded-full overflow-hidden flex-shrink-0">
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
                        <div class="relative p-2 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
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
                        <div class="relative p-2 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
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
}
