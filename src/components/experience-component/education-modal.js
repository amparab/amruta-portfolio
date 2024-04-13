import VesitLogo from '../../images/Vesit-Logo.png';
import { UilExternalLinkAlt } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'

const EducationModal = ({ closeEduModal }) => {



  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-5xl max-h-screen">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 md:w-24 md:h-24 mr-4 rounded-full overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover rounded-full" src={VesitLogo} alt="Vesit Logo" />
                </div>
                <div className="flex flex-col flex-grow font-knuckleslite">
                  <div className="text-2xl lg:text-3xl">VESIT</div>
                  <p className="lg:text-xl">Bachelor's Degree in Computer Science</p>
                  <p className="lg:text-xl">(2016 - 2020)</p>
                </div>
                <div className="flex flex-col font-knuckleslite self-start justify-end hover:opacity-50"> {/* Updated classes here */}
                  <button onClick={closeEduModal}><UilMultiply /></button>
                </div>
              </div>
            </div>


            {/*body*/}
            <div className="relative p-6 flex-auto font-cambria md:text-lg">
              <p>
                <b>Projects : </b><br />
                <b>Flood Prediction System For Mumbai : </b>
                We received a grant of $5000 USD from Microsoft Azure for this project.
                As a part of this project, we developed a system to predict floods in Mumbai using Machine Learning.
                It also included a flood map indicating the severity of floods and an alert message about the flood to their contacts, via whatsapp, mail etc.
                <br /><b>Audio caption generation from images using Deep Learning for Visually impaired people : </b>
                An Android application that generates captions automatically for a clicked image and also converts the generated caption into an audio format so that visually impaired people can listen to generated captions.
              </p><br />
              <p>
                <b>Publication : </b>
                Authored a research paper titled "Performance Evaluation of Different Machine Learning
                Based Algorithms for Flood Prediction and Model for Real-Time Flood Prediction". It was
                published by IEEE in Sep. 2019.
                &nbsp;<a href="https://ieeexplore.ieee.org/document/9128379" target="_blank" rel="noopener noreferrer" className=" text-blue-800 underline" >Show Publication&nbsp;
                  <UilExternalLinkAlt size="18" className="inline" /></a>
              </p><br />
              <b>Extra Curricular Activities : </b>
              <ul className="list-disc">
                <li className="ml-10">
                  <b>Deputy Cultural Secretory : </b>
                  Led the planning and execution of college fests and events,
                  contributing to a vibrant campus culture.
                </li>
                <li className="ml-10">
                  <b>VESIT Dance Crew : </b>
                  Represented our college in numerous intercollegiate dance competitions where we achieved several victories,
                  bringing acclaim to our institution.
                </li>
              </ul>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="background-transparent px-6 py-2 outline-none mr-1 mb-1 font-knuckles text-base hover:opacity-50"
                type="button"
                onClick={closeEduModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
export default EducationModal;