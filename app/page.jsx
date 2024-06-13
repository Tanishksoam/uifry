import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DownaloadApp from "./components/DownaloadApp";

export default function Home() {
  return (
    <div className=" w-[100vw] max-w-[1440px] flex flex-col justify-center items-center font-clash  py-10 overflow-visible">
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
