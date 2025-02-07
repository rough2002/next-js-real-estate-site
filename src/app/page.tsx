import FeaturedLocations from "@/components/landing-page/featured-locations";
import GoogleReviews from "@/components/landing-page/google-reviews";
import HeroSection from "@/components/landing-page/hero-section";
import Services from "@/components/landing-page/services";
import WhyChooseMe from "@/components/landing-page/why-choose-me";
// import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturedLocations />
      <WhyChooseMe />
      <Services />
      <GoogleReviews />
    </>
  );
}
