
import CKADLogo from '../images/CKAD-Logo.png';
import AWSLogo from '../images/AWS-Logo.png';
import { gsap } from 'gsap';
import React, { useRef, useEffect, useState } from 'react';
import { UilExternalLinkAlt } from '@iconscout/react-unicons'

export default function Certifications({ show }) {

    const certRef = useRef(null);
    const [showCert, setShowCert] = useState(false);

    useEffect(() => {
        //test
        if (show) {
            setShowCert(true);
            gsap.fromTo(certRef.current, { opacity: 0 }, { opacity: 1 });
        } else {
            gsap.fromTo(certRef.current, { opacity: 1 }, {
                opacity: 0, onComplete: () => {
                    setShowCert(false);
                }
            });
        }
    }, [show]);

    return ( //  bottom-2 md:bottom-10  || bottom-5 md:bottom-10 
        <div className="fixed left-0 right-0 flex justify-center"
            style={{ bottom: window.innerHeight > 750 ? '4rem' : (window.innerHeight > 600 ? '1rem' : '0.5rem') }} ref={certRef}>
            {showCert &&
                <div>
                    <div className="text-lg md:text-2xl font-knuckles text-center">
                        My Certifications
                    </div>
                    <div className="container mx-auto">
                        <table className="table-auto w-full border-collapse">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-1">
                                        <div className='w-12 h-12 rounded-full'><img
                                            className="w-full h-full rounded-full"
                                            src={CKADLogo}
                                        /></div>
                                    </td>
                                    <td className="px-4 py-2 text-sm md:text-lg font-knuckleslite">
                                        Certified Kubernetes Application Developer&nbsp;
                                        <a href="https://www.credly.com/badges/0e8e2c6d-63a1-4fff-a9d4-e8e42410c024" className="text-blue-900 underline" target="_blank" rel="noopener noreferrer">
                                            Verify&nbsp;<UilExternalLinkAlt size="14" className="inline" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-1">
                                        <div className='w-12 h-12 rounded-full'><img
                                            className="w-full h-full rounded-full"
                                            src={AWSLogo}
                                        /></div>
                                    </td>
                                    <td className="px-4 py-2 text-sm md:text-lg font-knuckleslite">
                                        AWS Certified Cloud Practitioner&nbsp;
                                        <a href="https://www.credly.com/badges/aa177f36-c419-4eb2-bf5c-2340cebcb788" className="text-blue-900 underline" target="_blank" rel="noopener noreferrer">
                                            Verify&nbsp;<UilExternalLinkAlt size="14" className="inline" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>










            }

        </div>
    );

}