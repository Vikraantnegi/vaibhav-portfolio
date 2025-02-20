import React from "react";
import Image from "next/image";
import collaborationImage from "@/assets/images/collaboration.svg";
import { LinkedInIcon, EmailIcon } from "@/assets/icons";
import SocialIcon from "./SocialIcon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-6 w-full md:py-10">
      <div className="flex flex-col gap-2">
        <p className="text-2xl md:text-3xl text-center md:text-left">
          It all starts with a{" "}
          <span className="font-bold text-3xl md:text-4xl">HELLO</span>
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="flex flex-col w-full md:w-[55%]">
            <div className="text-justify md:text-left">
              <p>
                Are you looking for someone who is committed to{" "}
                <span className="font-bold">adding value to your product</span>{" "}
                and is capable of bringing your ideas to life through the{" "}
                <span className="font-bold">magic of 3D animation</span>?
                <div className="mb-3" />
                Interested in{" "}
                <span className="font-bold">
                  collaborating on a 3D animation project
                </span>{" "}
                or have any questions?
                <br />
              </p>
              <p className="mt-4 text-justify md:text-left">
                Feel free to connect with me or drop an email to discuss
                potential opportunities, share your ideas, or simply say hello.
                I&apos;m always open to new projects and eager to explore the
                world of 3D with you. Let&apos;s create something amazing
                together!
              </p>
            </div>
            <div className="my-4 flex items-center gap-2 justify-center md:justify-start">
              <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
                <EmailIcon />
              </SocialIcon>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex items-center justify-center">
            <div className="w-full md:w-[75%] mt-0 md:mt-[-15%]">
              <Image
                alt="collaboration"
                src={collaborationImage}
                width={678}
                height={624}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
