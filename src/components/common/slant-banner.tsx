"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Banner from "./banner";

interface BannerProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const SlantBanner: React.FC<BannerProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if mobile view (stack vertically)
  const isMobile = windowWidth < 768;
  return (
    <>
      <div className="hidden md:block relative w-full overflow-hidden h-[400px] md:h-[450px]">
        {/* Image background - full width */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Slanted overlay */}
        <div
          className="absolute inset-0 w-full md:w-[48%] bg-teal-500 text-white p-6 md:p-16 md:pr-20 flex flex-col justify-center z-10"
          style={{
            clipPath: isMobile
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-lg">{description}</p>
        </div>
      </div>
      <div className="block md:hidden">
        <Banner
          imageSrc={imageSrc}
          altText={altText}
          title={title}
          description={description}
        />
      </div>
    </>
  );
};

export default SlantBanner;
