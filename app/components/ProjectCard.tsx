import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

const ProjectCard = ({ title, description, image, alt }: ProjectCardProps) => {
  return (
    <div
      className="relative w-[32%] h-[330px] bg-base rounded-lg z-0"
      style={{
        backgroundImage:
          "url('https://c0.wallpaperflare.com/preview/902/404/8/blurred-background-close-up-colors-dark.jpg')",
      }}
    >
      <div className="hidden">
        <div className="bg-black opacity-20 absolute rounded-lg inset-0 z-1 h-full w-full" />
        <div className="absolute inset-0 flex px-4 py-2 pb-8 pr-8 flex-col justify-end gap-1 z-2 h-full w-full">
          <p className="font-bold text-lg text-white">{title}</p>
          <div className="bg-white h-0.5 rounded-sm" />
          <p className="font-medium text-sm text-white">{description}</p>
        </div>
      </div>
      <div className="p-8 w-full h-full flex justify-center items-center">
        <Image
          alt={alt}
          src={image}
          className="rounded-lg object-contain"
          width={2048}
          height={2048}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
