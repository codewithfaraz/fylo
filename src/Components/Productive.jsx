import ProductoveIllustration from "../images/illustration-stay-productive.png";
export default function Productive() {
  return (
    <section id="productive" className="bg-gray-50 dark:bg-darkBlue1">
      <div className="flex flex-col md:flex-row items-center p-12">
        <img src={ProductoveIllustration} alt="" className="w-full md:w-1/2" />
        <div className="p-12 md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h1 className="max-w-sm text-gray-900 dark:text-white text-4xl">
            Stay Productive, Whereever you are
          </h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            covered for all your life storage need.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a
            href=""
            className="text-accentCyan underline block underline-offset-8 hover:underline-offset-[10px] duration-100"
          >
            See how fylo works
          </a>
        </div>
      </div>
    </section>
  );
}
