"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Property } from "@/types";
import L from "leaflet";
import { Bath, Bed } from "lucide-react";

// You'll need to fetch the property data based on the ID
// This is sample data
const property: Property = {
  id: 1,
  price: 729900,
  address: "192 Olive Avenue",
  city: "Bedford",
  province: "Nova Scotia",
  bedrooms: 3,
  bathrooms: 3,
  sqft: 2400,
  image: "/images/house-listing.jpg",
  isOpenHouse: false,
  mlsNumber: "202501963",
  propertyType: "Single Family",
  communityName: "Bedford",
  amenitiesNearBy: ["Park", "Playground", "Public Transit", "Shopping"],
  communityFeatures: ["Recreational Facilities"],
  features: ["Sloping", "Level", "Sump Pump"],
  structure: "Shed",
  viewType: "Harbour",
  bedroomsAboveGround: 2,
  bedroomsBelowGround: 1,
  appliances: [
    "Stove",
    "Dishwasher",
    "Dryer",
    "Washer",
    "Microwave Range Hood Combo",
    "Refrigerator",
  ],
  architecturalStyle: "Bungalow",
  basementDevelopment: "Partially Finished",
  basementType: "Full (partially Finished)",
  location: {
    lat: 44.7289,
    lng: -63.6656,
  },
};

export default function PropertyDetail() {
  useEffect(() => {
    // Fix for Leaflet icon issue in Next.js
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image section - sticky on desktop */}
          <div className="relative lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)]">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-0">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.address}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Details section - scrollable on desktop */}
          <div className="lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:sticky lg:top-12 no-scrollbar bg-white rounded-lg">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {property.address}
              </h1>
              <p className="text-2xl font-bold text-primary mb-4">
                ${property.price.toLocaleString()}
              </p>

              {/* Property stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xl font-semibold flex items-center justify-center gap-2">
                    <span className="font-bold">{property.bedrooms}</span>
                    <Bed className="h-6 w-6" />
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Bedrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold flex items-center justify-center gap-2">
                    <span>{property.bathrooms}</span>
                    <Bath className="h-6 w-6" />
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Bathrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">{property.sqft}</p>
                  <p className="text-gray-600 dark:text-gray-400">Sq Ft</p>
                </div>
              </div>

              {/* Property details sections */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-3">
                    Property Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        MLS Number
                      </p>
                      <p className="font-medium">{property.mlsNumber}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Property Type
                      </p>
                      <p className="font-medium">{property.propertyType}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Community
                      </p>
                      <p className="font-medium">{property.communityName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Style</p>
                      <p className="font-medium">
                        {property.architecturalStyle}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">Features</h2>
                  <ul className="list-disc list-inside space-y-1.5">
                    {property.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">
                    Appliances Included
                  </h2>
                  <ul className="list-disc list-inside space-y-1.5">
                    {property.appliances.map((appliance, index) => (
                      <li
                        key={index}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {appliance}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map section - always full width at bottom */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <MapContainer
              center={[property.location.lat, property.location.lng]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[property.location.lat, property.location.lng]}>
                <Popup>{property.address}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
