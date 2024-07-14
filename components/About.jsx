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
          <p className="mt-6 text-gray-600 text-[24px] leadiing-10 font-sans ">
            {/* ...... */}
            As a <b className="text-dark-red"> Software Developer</b>, I have
            the power to create tools and solutions that simplify and improve
            people's lives. Over 3+ years of experience, my work can streamline
            business processes, enhance communication, automate tasks, and make
            information accessible to everyone. <br /> <br /> Here's a brief
            overview of expertise: <br /> <br />{" "}
            <b>
              {" "}
              1) Specialization in JavaScript, React, React Native, and Next.js:{" "}
            </b>{" "}
            I am an expert in JavaScript and its popular libraries and
            frameworks, including React, React Native, and Next.js, making me
            adept at building dynamic and interactive web and mobile
            applications. <br /> <br /> <b>2) Full-Stack Proficiency:</b> With
            knowledge of Next.js, Node.js, Express.js, MongoDB, and MySQL I
            possess the skills to develop robust, scalable, and efficient
            full-stack applications. <br /> <br /> <b>3) Frontend Mastery:</b>{" "}
            Proficiency in Next.js, React.js, CSS, and its frameworks like
            Bootstrap, Tailwind, and Material UI allows me to craft visually
            appealing and user-friendly interfaces. <br /> <br />{" "}
            <b>4) Web Application Expertise:</b> Whether it's developing,
            redesigning, or customizing web applications, I have experience
            ensuring top-notch results. <br /> <br />{" "}
            <b> 5) Mobile Application Expertise:</b> From development and
            redesign to customization, I bring extensive experience in
            delivering exceptional mobile applications.
            <br /> <br /> <b> 6) Design and Conversion: </b> I excel in design,
            seamlessly converting designs from Fimga to Code and even to content
            management systems (CMS) for a polished online presence. <br />{" "}
            <br /> <b> 7) Graphic Design and Video Editing: </b> Beyond coding,
            I have creative talents that shine in UI/UX design and Editing
            Videos. <br /> <br /> <b> 8) Prompt Engineering: </b> I am skilled
            in prompt engineering, leveraging advanced techniques to create
            effective and engaging conversational AI models. <br /> <br />
            Thanks <br /> Siratul Islam
            {/* ...... */}
          </p>
        </div>
      </div>

      {/* <div className="mt-10">
        <div className="w-full">
          <ul className="flex justify-between gap-10 flex-col md:flex-row">
            <li className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">
                  35+
                </h3>
                <span className="uppercase">Projects Completed</span>
              </div>
            </li>
            <li className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">
                  3+
                </h3>
                <span className="uppercase">Years of Experience</span>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default About;
