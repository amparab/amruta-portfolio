
import LinkedIn from '../images/icons/linkedin.png';
import Github from '../images/icons/github.png';
import { useEffect, useState, useRef } from 'react';
import '../input.css';
import { gsap } from 'gsap';
import { UilDownloadAlt } from '@iconscout/react-unicons'
import * as Utils from '../utils/util';

const ContactLinks = ({show, scrollToTop}) => {

    const contact = useRef(null);
    const [showContact, setShowContact] = useState(false);


    useEffect(() => {
        if(show){
            setShowContact(true);
            gsap.fromTo(contact.current, { opacity: 0 }, { opacity: 1, duration: 2 });
        } else {
            gsap.fromTo(contact.current, { opacity: 1 }, { opacity: 0, onComplete: () => {
                setShowContact(false);
            } });
        }  
      }, [show]);
    
    

    return (

<div className='fixed h-screen w-screen flex flex-col justify-center items-center' ref={contact}>
    {showContact && <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-16">
        <div id="skills-title" className="font-knuckles text-white text-2xl md:text-4xl">
            Get in touch!
            {/* <ReactTyped strings={["Get in touch!"]} typeSpeed={25} /> */}
        </div>
        <div className="w-full max-w-sm">
            <div className="flex flex-col justify-center items-center mt-6 space-y-4">
                <div className="flex justify-center items-center">                   
                    <div className="w-8 h-8">
                        <img className="object-cover" src={LinkedIn} alt="LinkedIn" />
                    </div>
                    <a href="https://www.linkedin.com/in/amruta-parab" target="_blank" rel="noopener noreferrer" className="text-white mr-2 ml-2 text-xl font-knuckleslite hover:underline">
                        LinkedIn
                    </a>
                </div>
                <div className="flex justify-center items-center">                   
                    <div className="w-8 h-8">
                        <img className="object-cover" src={Github} alt="Github" />
                    </div>
                    <a href="https://github.com/amparab" target="_blank" rel="noopener noreferrer" className="text-white mr-2 ml-2 text-xl font-knuckleslite hover:underline">
                        Github
                    </a>
                </div>
                <div className="flex justify-center items-center">                   
                    <UilDownloadAlt size="28" className="inline text-white" />
                    <a onClick={Utils.handleDownload} className="text-white mr-2 ml-2 text-xl font-knuckleslite hover:underline">
                        Download Resume
                    </a>
                </div>
                
            </div>
            <div className="flex justify-center items-center mt-8">          
                <button type="reset" onClick={scrollToTop} className="py-2 px-4 bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white rounded-md mr-4 font-knuckleslite">Scroll To Top</button>
            
                </div>
        </div>
    </div>}
</div>

    );
}

export default ContactLinks;
