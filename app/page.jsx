import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className=" w-[100vw] max-w-[1440px] flex flex-col justify-center items-center font-clash px-24 py-10">
      <Navbar />
    </div>
  );
}
