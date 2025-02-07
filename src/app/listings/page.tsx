"use client";

import { useState } from "react";
import PropertyCard from "@/components/property-card";
import Pagination from "@/components/Pagination";

// Sample data - replace with your actual data
const properties = [
  {
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
  },
  {
    id: 2,
    price: 499900,
    address: "135 Maple Street",
    city: "Halifax",
    province: "Nova Scotia",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    image: "/images/house-listing.jpg",
    isOpenHouse: true,
    mlsNumber: "202102347",
    propertyType: "Condo",
    communityName: "Halifax",
    amenitiesNearBy: ["Hospital", "Mall", "Restaurants", "Public Transit"],
    communityFeatures: ["Fitness Center", "Clubhouse"],
    features: ["Granite Countertops", "Balcony", "Hardwood Floors"],
    structure: "Condo Unit",
    viewType: "Cityscape",
    bedroomsAboveGround: 2,
    bedroomsBelowGround: 0,
    appliances: [
      "Stove",
      "Dishwasher",
      "Dryer",
      "Washer",
      "Microwave",
      "Refrigerator",
    ],
    architecturalStyle: "Contemporary",
    basementDevelopment: "None",
    basementType: "None",
    location: {
      lat: 44.6486,
      lng: -63.5752,
    },
  },
  {
    id: 3,
    price: 899900,
    address: "712 Pine Drive",
    city: "Dartmouth",
    province: "Nova Scotia",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3000,
    image: "/images/house-listing.jpg",
    isOpenHouse: false,
    mlsNumber: "202304587",
    propertyType: "Single Family",
    communityName: "Dartmouth",
    amenitiesNearBy: ["Park", "School", "Shopping", "Public Transit"],
    communityFeatures: ["Golf Course", "Walking Trails"],
    features: ["Hot Tub", "Fireplace", "Patio"],
    structure: "House",
    viewType: "Waterfront",
    bedroomsAboveGround: 3,
    bedroomsBelowGround: 1,
    appliances: [
      "Stove",
      "Dishwasher",
      "Dryer",
      "Washer",
      "Microwave Range Hood Combo",
      "Refrigerator",
    ],
    architecturalStyle: "Modern",
    basementDevelopment: "Fully Finished",
    basementType: "Walk-Out",
    location: {
      lat: 44.6653,
      lng: -63.5701,
    },
  },
  {
    id: 4,
    price: 379000,
    address: "320 Oakwood Crescent",
    city: "Truro",
    province: "Nova Scotia",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    image: "/images/house-listing.jpg",
    isOpenHouse: true,
    mlsNumber: "202402839",
    propertyType: "Single Family",
    communityName: "Truro",
    amenitiesNearBy: ["Park", "Public Transit", "Supermarket"],
    communityFeatures: ["Community Center"],
    features: ["Fireplace", "Shed", "Garden"],
    structure: "House",
    viewType: "Forest",
    bedroomsAboveGround: 2,
    bedroomsBelowGround: 0,
    appliances: ["Stove", "Dishwasher", "Washer", "Refrigerator"],
    architecturalStyle: "Cape Cod",
    basementDevelopment: "Unfinished",
    basementType: "None",
    location: {
      lat: 45.3686,
      lng: -63.2836,
    },
  },
  {
    id: 5,
    price: 1000000,
    address: "500 Beachside Drive",
    city: "Halifax",
    province: "Nova Scotia",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4000,
    image: "/images/house-listing.jpg",
    isOpenHouse: true,
    mlsNumber: "202309765",
    propertyType: "Luxury Home",
    communityName: "Halifax",
    amenitiesNearBy: ["Beach", "Restaurants", "Shops", "Fitness Centers"],
    communityFeatures: ["Private Beach", "Pool"],
    features: ["Infinity Pool", "Sauna", "Home Theatre", "Bar"],
    structure: "Mansion",
    viewType: "Ocean View",
    bedroomsAboveGround: 4,
    bedroomsBelowGround: 1,
    appliances: [
      "Stove",
      "Dishwasher",
      "Dryer",
      "Washer",
      "Refrigerator",
      "Wine Cooler",
    ],
    architecturalStyle: "Modern",
    basementDevelopment: "Fully Finished",
    basementType: "Walk-Out",
    location: {
      lat: 44.6694,
      lng: -63.5971,
    },
  },
  // Add more properties here...
];

const ITEMS_PER_PAGE = 6;

export default function PropertiesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = properties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 mt-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Available Properties
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
