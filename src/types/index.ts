export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
};

export interface Property {
  id: number;
  price: number;
  address: string;
  city: string;
  province: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  isOpenHouse?: boolean;
  mlsNumber: string;
  propertyType: string;
  communityName: string;
  amenitiesNearBy: string[];
  communityFeatures: string[];
  features: string[];
  structure: string;
  viewType: string;
  bedroomsAboveGround: number;
  bedroomsBelowGround: number;
  appliances: string[];
  architecturalStyle: string;
  basementDevelopment: string;
  basementType: string;
  location: {
    lat: number;
    lng: number;
  };
}
