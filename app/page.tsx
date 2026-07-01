import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
    </>
  );
}
