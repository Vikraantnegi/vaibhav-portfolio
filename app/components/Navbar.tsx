"use client";

import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedInIcon, EmailIcon } from "@/assets/icons";
import SocialIcon from "./SocialIcon";
import { navigationItems } from "@/utils/constants";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = (section: string) => {
    router.push(`/${section}`);
    setIsOpen(false);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between py-4 relative">
      <div onClick={() => handleClick("")} className="cursor-pointer">
        <h2 className="font-extrabold text-xl">VAIBHAV NEGI</h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden flex-row items-center justify-between gap-3 md:flex">
        <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
          <LinkedInIcon />
        </SocialIcon>
        <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
          <EmailIcon />
        </SocialIcon>
        {navigationItems.map((item) => (
          <Button
            key={item.section}
            title={item.title}
            onClick={() => handleClick(item.section)}
          />
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-center gap-2">
        <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
          <LinkedInIcon height={18} width={18} />
        </SocialIcon>
        <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
          <EmailIcon height={18} width={18} />
        </SocialIcon>
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
                <div className="flex gap-3 mb-4">
                  <SocialIcon href="https://www.linkedin.com/in/vaibhavnegi04">
                    <LinkedInIcon />
                  </SocialIcon>
                  <SocialIcon href="mailto:vaibhavnegi111@gmail.com">
                    <EmailIcon />
                  </SocialIcon>
                </div>
                <Button
                  title="Download Resume"
                  className="w-full md:w-auto"
                  href="https://drive.google.com/uc?export=download&id=19XSrm3UMq990NthfiIMzFF75Kx3q7GHw"
                  download="VaibhavNegi_Resume.pdf"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
