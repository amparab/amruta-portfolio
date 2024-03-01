import VesitLogo from '../images/Vesit-Logo.png';
import JPLogo from '../images/JP-Logo.png';
import { ReactTyped } from 'react-typed';
import { useEffect, useState } from 'react';
import '../input.css';

export default function Experience() {

    return (

        <div className='fixed h-screen w-screen flex flex-col md:flex-row justify-center'>
            <div className="md:h-full w-full md:w-1/2 flex justify-start items-center order-1 md:order-2 fixed"></div>
            <div className="h-full w-full md:w-1/2 flex flex-col items-center order-1 md:order-2 fixed mt-4 mb-4">
                <div id="skills-title" className="text-lg md:text-3xl relative left-1/2 font-pixel mb-8">
                <ReactTyped strings={["Education and Experience"]} typeSpeed={50} />
                </div>
                <div className="w-px bg-black relative left-1/3 flex items-center h-40">
                    <div className="section-1 ml-6 p-4 rounded-md flex items-center bg-gradient-to-br from-black via-pink-950 to-pink-700" style={{ minWidth: '300px', width: 'fit-content' }}>
                        <div className="w-24 h-24 mr-4 shadow-xl rounded-full overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover rounded-full" src={VesitLogo} alt="Vesit Logo" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="font-pixel text-white">VESIT</div>
                            <p className="font-pixel text-xs text-white">Bachelor's Degree <br/> in Computer Science</p>
                            <p className="font-pixel text-xs text-white">(2016 - 2020)</p>
                        </div>
                    </div>
                    <div className="circle-1 w-3 h-3 rounded-full bg-black absolute left-1/2 transform -translate-x-1/2"></div> {/* Circle for Vesit */}
                </div>
                <div className="w-px bg-black relative left-1/3 flex items-center h-40">
                    <div className="section-2 ml-6 p-4 rounded-md flex items-center bg-gradient-to-br from-black via-pink-950 to-pink-700" style={{ minWidth: '300px', width: 'fit-content' }}>
                        <div className="w-24 h-24 mr-4 shadow-xl rounded-full overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover rounded-full" src={JPLogo} alt="JP Logo" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="font-pixel text-white">JP</div>
                            <p className="font-pixel text-xs text-white">Some Degree <br/> in Something</p>
                            <p className="font-pixel text-xs text-white">(2016 - 2020)</p>
                        </div>
                    </div>
                    <div className="circle-2 w-3 h-3 rounded-full bg-black absolute left-1/2 transform -translate-x-1/2"></div> {/* Circle for JP */}
                </div>
                <div className="w-px bg-black relative left-1/3 flex items-center h-32" >
                    <div className="section-3 ml-6 flex items-center" style={{ minWidth: '300px', width: 'fit-content' }}>
                        <div className="flex flex-col flex-grow">
                            <div className="font-pixel text-black">Position 1</div>
                            <p className="font-pixel text-xs text-black">Job Description 1</p>
                            <p className="font-pixel text-xs text-black">(2016 - 2020)</p>
                        </div>
                    </div>
                    <div className="circle-3 w-3 h-3 rounded-full bg-black absolute left-1/2 transform -translate-x-1/2"></div> {/* Circle for Position 1 */}
                </div>
                <div className="w-px bg-black relative left-1/3 flex items-center h-32">
                    <div className="section-4 ml-6 flex items-center" style={{ minWidth: '300px', width: 'fit-content' }}>
                        <div className="flex flex-col flex-grow">
                            <div className="font-pixel text-black">Position 2</div>
                            <p className="font-pixel text-xs text-black">Job Description 2</p>
                            <p className="font-pixel text-xs text-black">(2016 - 2020)</p>
                        </div>
                    </div>
                    <div className="circle-4 w-3 h-3 rounded-full bg-black absolute left-1/2 transform -translate-x-1/2"></div> {/* Circle for Position 2 */}
                </div>
            </div>
        </div>




    );
}
