"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/listings" },
  // { name: "", href: "/about" },
  //   { name: "Contact", href: "/contact" },
];

const buyingItems = [
  {
    title: "First Time Home Buyer",
    href: "/buying/first-time-home-buyer",
    description: "Essential guide for those purchasing their first home.",
  },
  {
    title: "Home Buyers Guide",
    href: "/buying/home-buyers-guide",
    description: "Complete walkthrough of the home buying process.",
  },
  {
    title: "Military Relocation",
    href: "/buying/military-relocation",
    description: "Specialized assistance for military families relocating.",
  },
  {
    title: "New Housing Projects",
    href: "/buying/new-housing-projects",
    description: "Explore the latest new construction developments.",
  },
];

const sellingItems = [
  {
    title: "Home Staging",
    href: "/selling/home-staging",
    description: "Prepare your home to maximize its selling potential.",
  },
  {
    title: "Selling Guide",
    href: "/selling/selling-guide",
    description: "Step-by-step process to sell your property effectively.",
  },
  {
    title: "Resizing",
    href: "/selling/resizing",
    description: "Guidance for downsizing or upgrading your living space.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-[10000] md:text-white md:min-h-[50px] min-h-[60px] bg-black shadow-xl">
      <div className="px-3 md:px-6 md:h-24 w-full">
        <div className="flex justify-between items-center py-3 h-full px-6 pr-20">
          {/* Logo */}
          <Logo variant="image" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu className="pr-24">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-white text-xl font-semibold hover:text-gray-300 bg-transparent hover:bg-transparent"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                  <Link href="/listings" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-white text-xl font-semibold hover:text-gray-300 bg-transparent hover:bg-transparent",
                      )}
                    >
                      Properties
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}

                {/* Buying Navigation */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white text-xl font-semibold hover:text-gray-300 bg-transparent hover:bg-transparent">
                    <Link href="/buying" legacyBehavior passHref>
                      Buying
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-6 w-[600px]">
                      {buyingItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                        >
                          <div className="text-lg font-medium leading-none">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Selling Navigation */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white text-xl font-semibold hover:text-gray-300 bg-transparent hover:bg-transparent">
                    <Link href="/selling" legacyBehavior passHref>
                      Selling
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px]">
                      {sellingItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                        >
                          <div className="text-lg font-medium leading-none">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/contact"
              className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-4 rounded-lg text-lg font-semibold h-14 ml-6"
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
              className="flex flex-col items-start justify-center flex-grow space-y-6 px-12"
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
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="buying"
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-black text-2xl font-semibold hover:text-gray-700 transition py-2">
                    <Link href="/buying" legacyBehavior passHref>
                      Buying
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 pt-2">
                      <Link
                        key={"sell"}
                        href={"/buying"}
                        className="text-black hover:text-gray-700 transition"
                        onClick={toggleMenu}
                      >
                        <div className="text-xl font-medium">Buying Info</div>
                      </Link>
                      {buyingItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-black hover:text-gray-700 transition"
                          onClick={toggleMenu}
                        >
                          <div className="text-xl font-medium">
                            {item.title}
                          </div>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Selling Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="selling"
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-black text-2xl font-semibold hover:text-gray-700 transition py-2">
                    <Link href="/selling" legacyBehavior passHref>
                      Selling
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 pt-2">
                      <Link
                        key={"sell"}
                        href={"/selling"}
                        className="text-black hover:text-gray-700 transition"
                        onClick={toggleMenu}
                      >
                        <div className="text-xl font-medium">Selling Info</div>
                      </Link>
                      {sellingItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-black hover:text-gray-700 transition"
                          onClick={toggleMenu}
                        >
                          <div className="text-xl font-medium">
                            {item.title}
                          </div>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
