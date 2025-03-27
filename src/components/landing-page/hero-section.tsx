"use client";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  AnimatedText,
  fadeInUpVariants,
  zoomInVariants,
} from "@/components/animated-components";
import { motion } from "motion/react";
// import Navbar from "../navbar";

export default function HeroSection() {
  const isAnimationEnabled =
    process.env.NEXT_PUBLIC_ANIMATION_ENABLED === "true";
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/listings");
  };

  return (
    <>
      <Head>
        <title>Top Real Estate Agent | Buy & Sell Luxury Homes</title>
        <meta
          name="description"
          content="Find your dream home with expert real estate guidance. Elevate your property experience with Jatender Sachdev, a trusted Realtor in Nova Scotia."
        />
        <meta
          name="keywords"
          content="real estate, homes for sale, luxury homes, buy house, sell property, realtor"
        />
        <meta
          property="og:title"
          content="Top Real Estate Agent in Nova Scotia"
        />
        <meta
          property="og:description"
          content="Buy & sell properties with confidence. Explore luxury real estate with top-rated Realtor, Jatender Sachdev."
        />
        <meta property="og:image" content="/images/house-2.jpg" />
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
        <meta name="robots" content="index, follow" />
      </Head>
      {/* <Navbar /> */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={isAnimationEnabled ? "hidden" : "visible"}
          animate="visible"
          variants={zoomInVariants}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src="/images/house-2.jpg"
            alt="Luxury real estate"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
            priority
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <AnimatedText
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
            initial={isAnimationEnabled ? "hidden" : "visible"}
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate Your Real Estate Experience
          </AnimatedText>
          <AnimatedText
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={isAnimationEnabled ? "hidden" : "visible"}
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Expert guidance for discerning buyers and sellers
          </AnimatedText>
          <Button
            size="lg"
            onClick={handleButtonClick}
            className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition md:h-16 border-white border-1 text-lg"
          >
            Browse Luxury Homes
            <ArrowRight size={20} />
          </Button>
        </div>

        {/* Trust Badges */}
        {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-white z-20">
              <span className="text-sm font-semibold">Certified Realtor</span>
              <span className="text-sm font-semibold">100+ Transactions</span>
              <span className="text-sm font-semibold">5-Star Rated</span>
            </div> */}
      </section>
    </>
  );
}
