import TestimonialIcon from "../images/bg-quotes.png";
import Profile1 from "../images/profile-1.jpg";
import Profile2 from "../images/profile-2.jpg";
import Profile3 from "../images/profile-3.jpg";
export default function Testimonials() {
  return (
    <section id="restimonials" className="bg-gray-50 dark:bg-darkBlue1">
      <div className="relative max-w-6xl mx-auto  p-4">
        <img src={TestimonialIcon} alt="" className="" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 my-12">
          {/* testimonial 1 */}
          <div className="space-y-6 bg-gray-100 dark:bg-darkBlue3 rounded-md flex flex-col md:w-1/4 p-6 w-full">
            <p className="max-w-xs">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-3">
              <img
                src={Profile1}
                alt=""
                className="rounded-full w-12 h-12 ring-2"
              />
              <div>
                <h1>Satish Patel</h1>
                <p className="max-w-xs">Founder & CEO. Huddle</p>
              </div>
            </div>
          </div>
          {/* testimonial 2 */}
          <div className="space-y-6 bg-gray-100 dark:bg-darkBlue3 rounded-md flex flex-col md:w-1/4 p-6 w-full">
            <p className="max-w-xs">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-3">
              <img
                src={Profile2}
                alt=""
                className="rounded-full w-12 h-12 ring-2"
              />
              <div>
                <h1>Satish Patel</h1>
                <p className="max-w-xs">Founder & CEO. Huddle</p>
              </div>
            </div>
          </div>
          {/* testimonial 3 */}
          <div className="space-y-6 bg-gray-100 dark:bg-darkBlue3 rounded-md flex flex-col md:w-1/4 p-6 w-full">
            <p className="max-w-xs">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-3">
              <img
                src={Profile3}
                alt=""
                className="rounded-full w-12 h-12 ring-2"
              />
              <div>
                <h1>Satish Patel</h1>
                <p className="max-w-xs">Founder & CEO. Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
