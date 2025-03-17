import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import FeatureSectionSaveBuddy from "./_components/Features";
import CardGroupSaveBuddy from "./_components/Stats";
import SaveBuddyTeam from "./_components/Team";
import ContactForm from "./_components/Contact";
import FooterSimple from "./_components/Footer";
// import Hero from '@/components/landing/hero';
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureSectionSaveBuddy />
      <CardGroupSaveBuddy />
      <SaveBuddyTeam />
      <ContactForm />
      <FooterSimple />
    </div>
  );
}
