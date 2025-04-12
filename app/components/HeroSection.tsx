"use client";

import React from "react";
import Image from "next/image";
import { LinkedInIcon, EmailIcon } from "@/assets/icons";
import Button from "./Button";
import SocialIcon from "./SocialIcon";
import CoverImage from "@/assets/images/cover-3d.png";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="py-6 pt-10 w-full md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="w-full md:max-w-[55%] font-semiBold leading-16 text-left">
          <p className="text-3xl md:text-4xl">
            Hey, I&apos;m{" "}
            <span className="font-bold text-4xl md:text-6xl">Vaibhav Negi</span>
          </p>
          {/* <div className="text-base md:text-lg mb-4 flex gap-1 items-center">
            <LocationIcon />
            Oshawa, Canada
          </div> */}
          <p className="text-xl md:text-2xl">
            A Passionate 3D Animator, experienced in Characters Creation,
            Environment Building, Modelling and Rigging!
          </p>
          <div className="my-4 flex items-center gap-2">
            <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
              <EmailIcon />
            </SocialIcon>
          </div>
          <div className="pt-6 flex items-start md:items-center gap-4">
            <Button
              title="Download Resume"
              className="w-full md:w-auto"
              href="https://drive.google.com/uc?export=download&id=192yoLvC9FR454Q-mFbiLeUGngkptVOME"
              download="VaibhavNegi_Resume.pdf"
            />
            <Button
              title="Contact Me"
              onClick={() => router.push("/contact")}
              className="w-full md:w-auto"
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
