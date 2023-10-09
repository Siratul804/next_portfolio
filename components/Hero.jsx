"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/animations.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content-container">
        <div className="max-md:order-2 flex flex-col gap-5 z-40">
          <div className="text-4xl lg:text-6xl">
            <h1>Hi, I'm Siratul a</h1>
            <span className="font-bold text-dark-red text-[45px] ">
              Software Developer
            </span>
            <h2 className=" mt-2 text-[35px] ">Bridging Knowledge Gaps</h2>
            <p className="mt-5 text-xl">
              As a software developer, I have the power to create tools and
              solutions that simplify and improve people's lives.
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
          src="/assets/hero.png"
          width={400}
          height={400}
          alt="Antonio Rogers"
          className="z-10"
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
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;
