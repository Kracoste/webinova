import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import { Offer } from "@/components/home/Offer";
import { Portfolio } from "@/components/home/Portfolio";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offer />
      <Stats />
      <Portfolio />
      <Process />
      <CallToAction />
    </main>
  );
}
