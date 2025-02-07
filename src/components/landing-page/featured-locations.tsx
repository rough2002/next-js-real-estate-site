"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const locations = [
  {
    id: 1,
    name: "Halifax",
    image: "/images/halifax.jpg",
    link: "/listings?location=halifax",
  },
  {
    id: 2,
    name: "Sackville",
    image: "/images/sackville.jpg",
    link: "/listings?location=sackville",
  },
  {
    id: 3,
    name: "Bedford",
    image: "/images/bedford.jpg",
    link: "/listings?location=bedford",
  },
  {
    id: 4,
    name: "Dartmouth",
    image: "/images/dartmouth.jpg",
    link: "/listings?location=dartmouth",
  },
  {
    id: 5,
    name: "Cole Harbour",
    image: "/images/cole-harbour.jpg",
    link: "/listings?location=cole-harbour",
  },
  {
    id: 6,
    name: "Timberlea",
    image: "/images/timberlea.jpg",
    link: "/listings?location=timberlea",
  },
];

export default function FeaturedLocations() {
  return (
    <section className="py-16 bg-[#e1d5c6]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Properties by Location
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={location.link}>
                <div className="relative h-64">
                  <Image
                    src={location.image}
                    alt={location.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
                    {location.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
