"use client";

import React from "react";
import Image from "next/image";
import { LocationIcon, LinkedInIcon, EmailIcon } from "@/assets/icons";
import { scrollToSection } from "@/utils/common";
import Button from "./Button";

import CoverImage from "@/assets/images/cover-3d.png";
import SocialIcon from "./SocialIcon";

const HeroSection = () => {
  return (
    <section className="py-6 w-full md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="w-full md:max-w-[55%] font-semiBold leading-16 text-center md:text-left">
          <p className="text-3xl md:text-4xl">
            Hey, I&apos;m{" "}
            <span className="font-bold text-4xl md:text-6xl">Vaibhav Negi</span>
          </p>
          <div className="text-base md:text-lg mb-4 flex gap-1 items-center justify-center md:justify-start">
            <LocationIcon />
            Oshawa, Canada
          </div>
          <p className="text-xl md:text-2xl">
            A Passionate 3D Animator, experienced in Characters Creation,
            Environment Building, Modelling and Rigging!
          </p>
          <div className="my-4 flex items-center gap-2 justify-center md:justify-start">
            <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
              <EmailIcon />
            </SocialIcon>
          </div>
          <div className="pt-6 flex items-center gap-4 justify-center md:justify-start">
            <Button title="Download Resume" />
            <Button
              title="Contact Me"
              onClick={() => scrollToSection("contact")}
            />
          </div>
        </div>
        <div className="w-[80%] md:w-[40%] flex items-center justify-center">
          <Image
            src={CoverImage}
            alt="cover"
            width={1403}
            height={1778}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
