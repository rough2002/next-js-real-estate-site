"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "text" | "image";
}

export default function Logo({ variant = "image" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }} // Animation on load
        animate={{ opacity: 1, scale: 1, rotate: 0 }} // Final state
        whileHover={{ scale: 1.1, rotate: 3 }} // Hover effect
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {variant === "image" ? (
          <Image
            src="/images/logo.png"
            alt="Your Company Logo"
            width={100}
            height={100}
            className="w-[8rem] h-[2.5rem] md:h-14 md:w-40"
            priority
          />
        ) : (
          <span className="text-2xl font-bold text-black dark:text-white">
            YourLogo
          </span>
        )}
      </motion.div>
    </Link>
  );
}
