"use client";

import React from "react";
import Image from "next/image";
import { LocationIcon, LinkedInIcon, EmailIcon } from "@/assets/icons";
import { scrollToSection } from "@/utils/common";
import Button from "./Button";

import CoverImage from "@/assets/images/cover-3d.png";

const HeroSection = () => {
  return (
    <section className="py-6 w-full md:py-10">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full max-w-[55%] font-semiBold leading-16">
          <p className="text-4xl">
            Hey, I&apos;m{" "}
            <span className="font-bold text-6xl">Vaibhav Negi</span>
          </p>
          <div className="text-lg mb-4 flex gap-1 items-center">
            <LocationIcon />
            Oshawa, Canada
          </div>
          <p className="text-2xl">
            A Passionate 3D Animator, experienced in Characters Creation,
            Environment Building, Modelling and Rigging!
          </p>
          <div className="my-4 flex items-center gap-2">
            <div className="relative border border-black rounded-full w-fit p-1.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
              <a
                className="absolute inset-0"
                href="https://www.linkedin.com/in/vaibhavnegi04"
                target="_blank"
                rel="noopener noreferrer"
              />
              <LinkedInIcon />
            </div>
            <div className="relative border border-black rounded-full w-fit p-1.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
              <a
                className="absolute inset-0"
                href="mailto:vaibhavnegi111@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              />
              <EmailIcon />
            </div>
          </div>
          <div className="pt-6 flex items-center gap-4">
            <Button title="Download Resume" />
            <Button
              title="Contact Me"
              onClick={() => scrollToSection("contact")}
            />
          </div>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <Image
            src={CoverImage}
            alt="cover"
            width={1403}
            height={1778}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
