"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneIcon as WhatsApp,
} from "lucide-react";
// import dynamic from "next/dynamic";

// Dynamically import the MapContainer from react-leaflet to disable SSR (Server-Side Rendering)
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">
              Let&apos;s Get in Touch!
            </h1>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Full Name"
                  className="bg-neutral-800 border-amber-500 text-white placeholder:text-neutral-400"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-neutral-800 border-amber-500 text-white placeholder:text-neutral-400"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone No"
                  className="bg-neutral-800 border-amber-500 text-white placeholder:text-neutral-400"
                  required
                />
              </div>
              <Textarea
                placeholder="Message"
                className="min-h-[150px] bg-neutral-800 border-amber-500 text-white placeholder:text-neutral-400"
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600 h-14 font-semibold text-white text-xl">
                Send
              </Button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8 text-white flex flex-col">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold">For inquiries contact:</h2>
              <p>
                <a
                  href="tel:+1902-989-5205"
                  className="hover:text-amber-500 text-xl"
                >
                  + 1 (902) 989-5205
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-amber-500 text-xl"
                >
                  info@sachdevgroup.ca
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Corporate Headquarters</h2>
              <p>2 Beechville Park Drive,</p>
              <p>Unit 3 Beechville, NS B3T 1L7</p>
            </div>

            {/* Map Placeholder */}
            {/* <div className=" w-full h-96  bg-neutral-700 rounded-lg">
              <MapContainer
                center={[44.6899673, -63.68741]}
                zoom={20}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[44.6899673, -63.68741]}>
                  <Popup>
                    {"6363 Lady Hammond Rd, Halifax NS B3K 2S2, Canada"}
                  </Popup>
                </Marker>
              </MapContainer>
            </div> */}

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <WhatsApp className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
