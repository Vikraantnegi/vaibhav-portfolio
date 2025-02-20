"use client";

import { scrollToSection } from "@/utils/common";
import React from "react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between py-4">
      <h2 className="font-extrabold text-xl">VAIBHAV NEGI</h2>
      <div className="hidden flex-row items-center justify-between gap-3 md:flex">
        <Button title="About" onClick={() => scrollToSection("about")} />
        <Button title="Projects" onClick={() => scrollToSection("projects")} />
        <Button title="Contact" onClick={() => scrollToSection("contact")} />
      </div>
    </div>
  );
};

export default Navbar;
