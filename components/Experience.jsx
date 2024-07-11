import Image from "next/image";

const Experience = () => {
  return (
    <section
      className="w-full h-fit px-[35px] py-16 max-xs:px-[20px] relative bg-white"
      id="experience"
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
            Experience
          </p>
        </div>

        <div className="content  flex justify-between py-10 ">
          <div className="">
            <Image src="/assets/grit.jpeg" alt="" width={80} height={80} />
            <h1 className="text-[22px] pt-2 font-bold ">Software Developer</h1>
            <h2 className="text-[18px] pt-2 text-slate-600 ">
              Grit System - Part Time
            </h2>
            <span className="text-[18px] pt-2 text-slate-600 ">
              Dhaka,Bangladesh - Hybrid
            </span>
          </div>
          <div className="">
            <Image src="/assets/stb.jpeg" alt="" width={80} height={80} />
            <h1 className="text-[22px] pt-2 font-bold ">
              Senior Software Executive
            </h1>
            <h2 className="text-[18px] pt-2 text-slate-600 ">
              Seed to BIG - Part-time
            </h2>
            <span className="text-[18px] pt-2 text-slate-600 ">
              Dhaka,Bangladesh - Remote
            </span>
          </div>
          <div className="">
            <Image src="/assets/uap.jpeg" alt="" width={80} height={80} />
            <h1 className="text-[22px] pt-2 font-bold ">
              Bachelor of Engineering in CSE
            </h1>
            <h2 className="text-[18px] pt-2 text-slate-600 ">
              University of Asia Pacific
            </h2>
            <span className="text-[18px] pt-2 text-slate-600 ">
              Dhaka,Bangladesh
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
