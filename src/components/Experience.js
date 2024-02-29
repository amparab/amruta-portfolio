import VesitLogo from '../images/Vesit-Logo.png';
import JPLogo from '../images/JP-Logo.png';
import { ReactTyped } from 'react-typed';

export default function Experience () {
    return (
        <div className='fixed h-screen w-screen flex flex-col md:flex-row justify-center'>
        <div className="h-1/2 md:h-full w-full md:w-1/2 flex justify-start items-center order-1 md:order-2">
          {/* Content for the left side */}
        </div>
        <div className=" h-full w-full md:w-1/2 flex flex-col items-center order-1 md:order-2 relative mt-4 mb-36">
            <div id="skills-title" class=" text-lg md:text-3xl font-pixel mb-8">
                <ReactTyped strings={["My Education and Experience"]} typeSpeed={50} />
            </div>
            <div className="w-px bg-black h-full fixed"></div>
            <div className=" w-6 h-6 rounded-full bg-black relative top-12">.</div>
            
            
            <div className="flex ml-8 items-center rounded-md bg-gradient-to-br from-black via-cyan-950 to-cyan-700 p-4 self-start top-12">
                    <div className="w-24 h-24 mr-4 shadow-xl flex-shrink-0">
                        <img className="w-full h-full rounded-full" src={VesitLogo} />
                    </div>
                    <div>
                        <div className="font-pixel text-white">VESIT</div>
                        <p className="font-pixel text-xs text-white">Bachelor's Degree <br/> in Computer Science</p>
                        <p className="font-pixel text-xs text-white">(2016 - 2020)</p>
                    </div>
                    
                </div>

            {/* JP */}

            <div className=" w-6 h-6 rounded-full bg-black relative top-20">.</div>

            <div className="mt-8 flex mr-16 items-center rounded-md bg-gradient-to-br from-black via-cyan-950 to-cyan-700 p-4 self-end top-12">
                <div className='mr-4'>
                    <div className="font-pixel text-white">JP Morgan <br/> Chase & Co.</div>
                    <p className="font-pixel text-xs text-white">(2020 - Present)</p>
                </div>
                <div className="w-24 h-24 shadow-xl">
                    <img className="w-full h-full rounded-full" src={JPLogo} />
                </div>
            </div>

            {/* New */}

            <div className=" w-6 h-6 rounded-full bg-black relative top-20">.</div>

            <div className="mt-8 flex mr-20 items-center p-4 self-end top-12">
                <div className='mr-4'>
                    <div className="font-pixel text-black">Software Engineer I</div>
                    <p className="font-pixel text-xs text-black">(2021 - 2023)</p>
                </div>
            </div>

            {/* New */}

            <div className=" w-6 h-6 rounded-full bg-black relative top-20">.</div>

            <div className="mt-8 flex mr-20 items-center p-4 self-end top-12">
                <div className='mr-4'>
                    <div className="font-pixel text-black">Software Engineer II</div>
                    <p className="font-pixel text-xs text-black">(2023 - Present)</p>
                </div>
            </div>
          
        </div>
      </div>





    );

}