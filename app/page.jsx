import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DownaloadApp from "./components/DownaloadApp";
import Backgraound from "./components/Backgraound";
import { Star } from "@/public/assets";

export default function Home() {
  return (
    <div className=" w-[100vw]  flex flex-col justify-center items-center font-clash  py-10 overflow-x-clip relative">
      <Backgraound />

      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <DownaloadApp />
      <Footer />
    </div>
  );
}
