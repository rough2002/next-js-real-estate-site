"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/listings" },
  // { name: "", href: "/about" },
  //   { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-[10000] md:text-white md:min-h-[50px] min-h-[60px] bg-black shadow-xl">
      <div className="px-3 md:px-6 md:h-24 w-full">
        <div className="flex justify-between items-center py-3 h-full px-6">
          {/* Logo */}
          <Logo variant="image" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="md:text-white text-black text-xl font-semibold hover:md:text-gray-300 hover:text-gray-600 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-4 rounded-lg text-lg font-semibold h-14"
            >
              Contact Us
            </Link>
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div className="container mx-auto px-4 py-4 flex justify-end">
              <button className="text-black" onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>

            {/* Mobile Links */}
            <motion.div
              className="flex flex-col items-center justify-center flex-grow space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black text-2xl font-semibold hover:text-gray-700 transition"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                key={"contact"}
                href={"/contact"}
                className="text-black text-2xl font-semibold hover:text-gray-700 transition"
                onClick={toggleMenu}
              >
                {"Contact"}
              </Link>
              {/* <Button size="lg" onClick={toggleMenu}>
                Get Started
              </Button> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ---------------- MenuItem Component (for Desktop Dropdowns) ---------------- */
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive("")}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            mass: 0.5,
            damping: 11.5,
            stiffness: 100,
            restDelta: 0.001,
            restSpeed: 0.001,
          }}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div className="w-max h-full p-4">{children}</motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
