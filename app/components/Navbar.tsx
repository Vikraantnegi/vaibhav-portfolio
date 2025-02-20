"use client";

import { scrollToSection } from "@/utils/common";
import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedInIcon, EmailIcon } from "@/assets/icons";
import SocialIcon from "./SocialIcon";

const navigationItems = [
  { title: "About", section: "about" },
  { title: "Projects", section: "projects" },
  { title: "Contact", section: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between py-4 relative">
      <h2 className="font-extrabold text-xl">VAIBHAV NEGI</h2>

      {/* Desktop Navigation */}
      <div className="hidden flex-row items-center justify-between gap-3 md:flex">
        {navigationItems.map((item) => (
          <Button
            key={item.section}
            title={item.title}
            onClick={() => scrollToSection(item.section)}
          />
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden border border-black rounded-full w-fit p-2 cursor-pointer hover:scale-110 transition duration-300 ease-in-out z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-3 h-3 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-64 bg-white z-40 shadow-lg flex flex-col"
            >
              <div className="flex flex-col p-6 pt-20 flex-1">
                {navigationItems.map((item, index) => (
                  <React.Fragment key={item.section}>
                    <Button
                      title={item.title}
                      variant="text"
                      onClick={() => handleClick(item.section)}
                      className="!justify-start"
                    />
                    {index < navigationItems.length - 1 && (
                      <div className="h-[1px] bg-gray-300" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Reach Out Section */}
              <div className="p-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-4">Reach out to me</p>
                <div className="flex gap-3">
                  <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
                    <LinkedInIcon />
                  </SocialIcon>
                  <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
                    <EmailIcon />
                  </SocialIcon>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
