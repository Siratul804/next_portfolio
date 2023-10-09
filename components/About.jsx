const About = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 L16 8 L8 16 L0 8 L8 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            About Me
          </p>
        </div>

        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-[20px] leadiing-10">
            Hi, My name is Siratul Islam. Here's a brief overview of expertise:
            Specialization With Full-Stack Proficiency in Next.js ⚪ , React.js
            🔵, Express.js ⚫, MongoDB 🟢, MySQL 🔵. Whether it's developing,
            redesigning, or customizing web applications. I have years of
            experience ensuring top-notch results. Beyond coding, I have
            creative talents that shine in UI/UX design and Editing Video. My
            work can streamline business processes, enhance communication,
            automate tasks, and make information accessible to everyone.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-full">
          <ul className="flex justify-between gap-10 flex-col md:flex-row">
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">
                  70+
                </h3>
                <span className="uppercase">Projects Completed</span>
              </div>
            </li>
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">
                  3+
                </h3>
                <span className="uppercase">Years of Experience</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
