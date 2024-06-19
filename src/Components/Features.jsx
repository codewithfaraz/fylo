import Access from "../images/icon-access-anywhere.svg";
import Any from "../images/icon-any-file.svg";
import Security from "../images/icon-security.svg";
import Collaboration from "../images/icon-collaboration.svg";
export default function Features() {
  return (
    <section id="features" className="bg-gray-50 dark:bg-darkBlue1">
      <div className=" p-4 flex flex-col items-center justify-center md:flex-row container mx-auto flex-wrap">
        {/* item 1 */}
        <div className="md:w-1/2 w-full flex flex-col items-center p-12 gap-2">
          <img src={Access} alt="" />
          <h1 className="text-gray-900 dark:text-white font-bold">
            Access your files from anywhere
          </h1>
          <p className="text-center max-w-md">
            The ability to use a smartphone, tablet or computer to access your
            account means your files follow you everywhere
          </p>
        </div>
        {/* item 2 */}
        <div className="md:w-1/2 w-full flex flex-col items-center p-12 gap-2">
          <img src={Security} alt="" />
          <h1 className="text-gray-900 dark:text-white font-bold">
            Security you can trust
          </h1>
          <p className="text-center max-w-md">
            2-factor authentication and euser-controlled encryption are just a
            couple of the security features we allow to help secure your files
          </p>
        </div>
        {/* item 3 */}
        <div className="md:w-1/2 w-full flex flex-col items-center p-12 gap-2">
          <img src={Collaboration} alt="" />
          <h1 className="text-gray-900 dark:text-white font-bold">
            Access your file from anywhere
          </h1>
          <p className="text-center max-w-md">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        {/* item 4 */}
        <div className="md:w-1/2 w-full flex flex-col items-center p-12 gap-2">
          <img src={Any} alt="" />
          <h1 className="text-gray-900 dark:text-white font-bold">
            Security you can trust
          </h1>
          <p className="text-center max-w-md">
            weather you're shairing holidays photos or work documents, Fylo has
            you covered allowing for all types to be securely stored and shared.
          </p>
        </div>
      </div>
    </section>
  );
}
