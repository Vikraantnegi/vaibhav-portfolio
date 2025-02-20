import Link from "next/link";
import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => {
  return (
    <div className="relative border border-black rounded-full w-fit p-1.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
      <Link href={href} target="_blank" className="absolute inset-0" />
      {children}
    </div>
  );
};

export default SocialIcon;
