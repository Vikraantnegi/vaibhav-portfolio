import React from "react";
import Image from "next/image";

import AvatarImage from "@/assets/images/avatar.svg";

const AboutSection = () => {
  return (
    <section id="about" className="py-6 w-full md:py-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full gap-6 md:gap-0">
        <Image
          alt="cover"
          src={AvatarImage}
          width={300}
          height={300}
          priority
        />
        <div className="flex py-4 font-medium text-base w-full md:max-w-[65%] flex-col h-full justify-between">
          <div className="mb-4">
            <p className="text-center font-bold text-4xl mb-4">About Me</p>
            <ul className="text-justify">
              <li className="mb-3">
                Currently pursuing{" "}
                <span className="font-bold">
                  Animation - Digital and Production
                </span>{" "}
                from{" "}
                <span className="font-bold">
                  Durham College, Oshawa, Canada
                </span>
                ! I am very dedicated and determined towards the whole{" "}
                <span className="font-bold">3D Animation</span> world.
              </li>
              <li className="mb-3">
                I&apos;m currently focussed on deep diving into the industry,
                hence <span className="font-bold">seeking opportunities</span>{" "}
                where I can collaborate with industry professionals, absorb
                invaluable knowledge, and{" "}
                <span className="font-bold">
                  contribute to meaningful projects.
                </span>
                <br />
              </li>
              <li>
                I have a strong foundation in{" "}
                <span className="font-bold">
                  3D Animation, 3D Environment Building, and 3D Character
                  Creation
                </span>
                , thanks to my extensive coursework in these areas.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <span className="font-bold text-xl">Current Skilss: </span>
              Character Creation, Environment Building, Game Development,
              Modelling and Rigging
            </p>
            <p>
              <span className="font-bold text-xl">Tools: </span>
              Autodesk Maya, Blender, zBrush, Illustrator, After Effects,
              Photoshop
            </p>
            <p className="mt-4">
              When I&apos;m not crafting{" "}
              <span className="font-bold">digital worlds</span>, I&apos;m
              exploring{" "}
              <span className="font-bold">new techniques and tools</span> in the
              field, always eager to learn and evolve. My goal is to collaborate
              with you to{" "}
              <span className="font-bold">bring your visions to life</span>. So,
              let&apos;s embark on a journey into the realms of 3D together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
