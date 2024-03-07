import VesitLogo from '../images/Vesit-Logo.png';
import LinkedIn from '../images/icons/linkedin.png';
import Github from '../images/icons/github.png';
import Instagram from '../images/icons/instagram.png';
import { ReactTyped } from 'react-typed';
import { useEffect, useState } from 'react';
import '../input.css';


export default function ContactLinks() {

    return (

        <div className='fixed h-screen w-screen flex flex-col md:flex-row justify-center'>
        <div id="form" className="h-full w-1/2 flex flex-col justify-center items-center">
        <form className="w-full max-w-sm">
            <div className="flex flex-col mt-6">
            <label htmlFor="name" className="font-bold">Name:</label>
            <input type="text" id="name" name="name" className="py-2 px-4 bg-white border-2 border-black rounded-md mt-2" />
            </div>
            <div className="flex flex-col mt-6">
            <label htmlFor="email" className=" font-bold">Email ID:</label>
            <input type="email" id="email" name="email" className="py-2 px-4 bg-white border-2 border-black rounded-md mt-2" />
            </div>
            <div className="flex flex-col mt-6">
            <label htmlFor="message" className=" font-bold">Message:</label>
            <textarea id="message" name="message" rows="4" className="py-2 px-4 bg-white border-2 border-black rounded-md mt-2"></textarea>
            </div>
            <div className="flex justify-center mt-6">
            <button type="reset" className="py-2 px-4 bg-white text-black border border-black rounded-md mr-4">Reset</button>
            <button type="submit" className="py-2 px-4 bg-black text-white rounded-md">Send Message</button>
            </div>
        </form>
        </div>


        <div className="h-full w-1/2 flex flex-col justify-center items-center">
            <div id="contact-title" className="text-3xl font-pixel text-white">
            <ReactTyped strings={["Get in Touch"]} typeSpeed={50} />
            </div>
            <div className="flex justify-center items-center">
            <div className="w-12 h-12 overflow-hidden flex-shrink-0 mt-6 mr-6">
                <img className="object-cover" src={LinkedIn} alt="LinkedIn" />
            </div>
            <div className="w-12 h-12 overflow-hidden flex-shrink-0 mt-6 mr-6">
                <img className="object-cover" src={Github} alt="Github" />
            </div>
            <div className="w-12 h-12 overflow-hidden flex-shrink-0 mt-6 mr-6">
                <img className="object-cover" src={Instagram} alt="INstagram" />
            </div>
            </div>
        </div>
        </div>





    );
}
