import JPLogo from '../../images/JP-Logo.png';
import { UilExternalLinkAlt } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'

const ExperienceModal = ({closeExpModal}) => {



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
                            <img className="w-full h-full object-cover rounded-full" src={JPLogo} alt="JP Logo" />
                        </div>
                        <div className="flex flex-col flex-grow font-knuckleslite">
                            <div className="text-2xl">JP Morgan Chase & Co.</div>
                            <p>(2020 - Present)</p>
                        </div>
                        <div className="flex flex-col font-knuckleslite self-start justify-end hover:opacity-50"> {/* Updated classes here */}
                            <button onClick={closeExpModal}><UilMultiply /></button>
                        </div>
                    </div>
                </div>


                {/*body*/}
                <div className="relative p-6 flex-auto font-cambria">
                  <p>
                    <b>Software Engineer : </b><br/>
                    <ul className="list-disc">
                        <li className="ml-10">
                        Managed the end-to-end process, from requirement gathering with stakeholders to the
                        continuous development and delivery of new features and APIs for a trade enrichment system
                        processing around 1.5M events daily. Led the migration of this system from a remote server to a
                        cloud-based <b>Kubernetes</b> platform, including the migration of production data consisting of 250M
                        records. Technologies used include <b>Java, Spring Boot, Messaging Queues, SQL</b>.
                        </li>
                        <li className="ml-10">
                        Developed multiple <b>React</b>-based user interfaces integrated with a Java and Spring Boot backend,
                        leveraging SQL databases. These interfaces significantly streamlined operations by enabling users
                        to automate tasks, reducing manual effort.
                        </li>
                        <li className="ml-10">
                        Implemented a migration strategy to transition a legacy system from utilizing <b>REST API</b> for
                        asynchronous communication to <b>Kafka</b>. This migration optimized the process of interacting with
                        an external system for risk checks on transactions, significantly reducing timeout issues during
                        callbacks and improving overall production stability.
                        </li>
                        <li className="ml-10">
                        Contributed to the development of a comprehensive <b>microservice</b> architecture-based platform,
                        an end-to-end solution aimed at facilitating the adoption of new ISO20022 SWIFT payment
                        standards. Primarily focused on Java and Spring.
                        </li>
                        <li className="ml-10">
                        Collaborated with team members to ensure timely delivery of requirements and prompt
                        resolution of issues.
                        </li>
                    </ul>
                  </p><br/>
                  <p>
                    <b>Other Achievments : </b>
                    <ul className="list-disc">
                        <li className="ml-10">
                            Runner Up in Code For Good Hackathon 2019
                        </li>
                        <li className="ml-10">
                            2nd Runner Up in AWS Deepracer JPMC Global Championship 2021
                        </li>
                    </ul>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent px-6 py-2 outline-none mr-1 mb-1 font-knuckles text-base hover:opacity-50"
                    type="button"
                    onClick={closeExpModal}
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
export default ExperienceModal;