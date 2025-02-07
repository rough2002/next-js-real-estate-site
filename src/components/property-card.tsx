"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Link href={`/listings/${property.id}`}>
        <div className="relative h-64">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.address}
            layout="fill"
            objectFit="cover"
            className="transition-transform hover:scale-105"
          />
          {property.isOpenHouse && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md">
              OPEN HOUSE
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
              ${property.price.toLocaleString()}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {property.address}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {property.city}, {property.province}
          </p>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{property.bedrooms} Bedroom</span>
            <span>{property.bathrooms} Bathroom</span>
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
