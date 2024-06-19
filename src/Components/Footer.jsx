import Location from "../images/icon-location.svg";
import Phone from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";

export default function Footer() {
  return (
    <footer id="footer" className="dark:bg-darkBlue bg-gray-100 p-24">
      <div className="max-w-6xl mx-auto">
        <div className="mt-4 bg-logo-light-mode dark:bg-logo-dark-mode w-52 h-24 bg-no-repeat"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 text-center md:text-left md:space-y-0 md:items-start">
          <div className="flex gap-3">
            <img src={Location} alt="" className="w-6 h-6" />
            <p className="max-w-sm text-gray-900 dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique itaque, natus rem reiciendis odit fugit asperiores
              consequuntur rerum officiis explicabo.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="flex gap-3">
              <img src={Phone} className="w-6 h-6" alt="" />
              +923246827267
            </p>
            <p className="flex gap-3">
              <img src={Email} className="w-6 h-6" alt="" />
              farazmaqsood97@gmail.com
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="">About</a>
            <a href="">Jobs</a>
            <a href="">Press</a>
            <a href="">Blogs</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="">Contact us</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
          </div>
          <div className="flex space-x-3">
            <img
              src={Facebook}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-gray-900 dark:border-white"
            />
            <img
              src={Instagram}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-gray-900 dark:border-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
