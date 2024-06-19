import Image from "../images/illustration-intro.png";
export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-cover p-12 "
    >
      <div className="container mx-auto text-center">
        <img src={Image} alt="" className="max-w-sm mx-auto mb-10" />
        <h1 className="text-4xl font-bold  max-w-s mx-auto text-gray-900 dark:text-white md:max-w-xl leading-normal">
          All Your files in one secure location, assessible anywhere.
        </h1>
        <p className="text-center mt-5 text-xl text-gray-900 dark:text-white  md:max-w-3xl mx-auto">
          Fylo stores all your most important files in one secure location.
          Access them whereever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="bg-accentCyan py-3 px-6 rounded-full my-4 hover:scale-95">
          Get Started
        </button>
      </div>
    </section>
  );
}
