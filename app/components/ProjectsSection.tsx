import React from "react";

// Import ProjectCard component
import ProjectCard from "./ProjectCard";

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
  return (
    <section id="projects" className="py-6 w-full md:py-10">
      <div className="flex flex-col">
        <p className="text-4xl font-bold">PERSONAL PROJECTS</p>
        <div className="bg-black mt-2 mb-6 h-0.5 rounded-sm" />
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4">
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
