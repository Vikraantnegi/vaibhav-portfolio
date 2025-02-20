"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// Import all project images
import GamingSetup from "@/assets/images/GamingSetup.jpg";
import LivingRoom from "@/assets/images/LivingRoom.png";
import FightingRing from "@/assets/images/FightingRing.png";
import ChessBoard from "@/assets/images/ChessBoard.png";
import Octopus from "@/assets/images/Octopus.jpg";
import VespaScooter from "@/assets/images/VespaScooter.png";

const projects = [
  {
    title: "GAMING ROOM",
    description: "Gaming Setup designed and developed using 3D Maya.",
    image: GamingSetup,
    alt: "Gaming Room",
  },
  {
    title: "LIVING ROOM",
    description: "Living Room designed and developed using Blender.",
    image: LivingRoom,
    alt: "Living Room",
  },
  {
    title: "FIGHTING RING",
    description: "Fighting Ring designed and developed using Blender.",
    image: FightingRing,
    alt: "Fighting Ring",
  },
  {
    title: "CHESS BOARD",
    description: "Chess Board designed and developed using Blender.",
    image: ChessBoard,
    alt: "Chess Board",
  },
  {
    title: "OCTOPUS TOY",
    description: "Octopus Toy designed and developed using Maya.",
    image: Octopus,
    alt: "Octopus Toy",
  },
  {
    title: "VESPA SCOOTER",
    description: "Vespa Scooter designed and developed using Maya.",
    image: VespaScooter,
    alt: "Vespa Scooter",
  },
];

const ProjectsSection = () => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.swiper.autoplay.start();
      }, 500);
    }
  }, []);

  return (
    <section id="projects" className="py-6 w-full md:py-10">
      <div className="flex flex-col">
        <p className="text-3xl md:text-4xl font-bold text-center md:text-left">
          PERSONAL PROJECTS
        </p>
        <div className="bg-black mt-2 mb-6 h-0.5 rounded-sm" />

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !w-8 !h-1 !rounded-none !bg-gray-300",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-black",
            }}
            className="w-full pb-10"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={2000}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  alt={project.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex md:flex-row md:flex-wrap items-center justify-center w-full gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
