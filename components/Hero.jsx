"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/animations.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content-container">
        <div className="max-md:order-2 flex flex-col gap-5 z-40">
          <div className="text-4xl lg:text-6xl  " data-aos="fade-left">
            <h1>Hi, I'm Siratul a</h1>
            <span className="font-bold text-dark-red text-[35px] md:text-[45px]  relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black ">
              Software Developer
            </span>
            <h2 className=" mt-2 text-[35px] ">Create Solutions</h2>
            <p className="mt-5 text-[25px] md:text-[22px] font-sans  ">
              As a software developer, I have the power to create tools and
              solutions that simplify and improve people's lives.
              <br />
              My work can streamline business processes, enhance communication,
              automate tasks, and make information accessible to everyone.
            </p>
          </div>

          <div className="flex gap-4 max-md:justify-center">
            <Link href="#projects">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Projects
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        <Image
          src="/assets/profile.svg"
          width={400}
          height={400}
          alt="Antonio Rogers"
          className="z-10  animate-[bounce_20s_ease-in-out_infinite]"
        />
      </div>

      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;
