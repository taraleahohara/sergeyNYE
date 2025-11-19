import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Hero from "@/components/Hero";
import FireHorseEnergy from "@/components/FireHorseEnergy";
import TheRitual from "@/components/TheRitual";
import EventDetails from "@/components/EventDetails";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9F7]">
      <TopAnnouncementBar />
      <Hero />
      <FireHorseEnergy />
      <TheRitual />
      <EventDetails />
      <FAQ />
      <Footer />
    </main>
  );
}

