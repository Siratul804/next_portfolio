import Image from "next/image";

const Skills = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
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
            Skills
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 grid-cols-2 max-xs:grid-cols-1 mt-10">
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <Image
              src="/assets/js.png"
              width={100}
              height={100}
              alt="javascript"
              className="mb-2"
            />
            <span>Javascript</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/react.png"
              width={100}
              height={100}
              alt="react"
              className="mb-2"
            />
            <span>React</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/next.svg"
              width={100}
              height={100}
              alt="next"
              className="mb-2"
            />
            <span>Next</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/css.png"
              width={100}
              height={100}
              alt="css"
              className="mb-2"
            />
            <span>CSS</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/boot.svg"
              width={100}
              height={100}
              alt="bootstarp"
              className="mb-2"
            />
            <span>Bootstrap</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/tail.svg"
              width={100}
              height={100}
              alt="tailwind"
              className="mb-2"
            />
            <span>Tailwind</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/node.png"
              width={100}
              height={100}
              alt="node.js"
              className="mb-2"
            />
            <span>Node</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/express.svg"
              width={100}
              height={100}
              alt="express.js"
              className="mb-2"
            />
            <span>JS</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/mongo.png"
              width={100}
              height={100}
              alt="mongodb"
              className="mb-2"
            />
            <span>Database</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/sql.svg"
              width={100}
              height={100}
              alt="CSS"
              className="mb-2"
            />
            <span>Database</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/git.png"
              width={100}
              height={100}
              alt="CSS"
              className="mb-2"
            />
            <span>Git</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/cp.svg"
              width={100}
              height={100}
              alt="CSS"
              className="mb-2"
            />
            <span>Hosting</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/vercel.svg"
              width={100}
              height={100}
              alt="CSS"
              className="mb-2"
            />
            <span>Vercel</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/figma.svg"
              width={100}
              height={100}
              alt="figma"
              className="mb-2"
            />
            <span>Figma</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/canva.svg"
              width={100}
              height={100}
              alt="canva"
              className="mb-2"
            />
            <span>Editor</span>
          </div>
          <div className="bg-light-bg p-8  rounded-md text-center flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/assets/prompt.svg"
              width={100}
              height={100}
              alt="prompt"
              className="mb-2"
            />
            <span>Prompt Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
