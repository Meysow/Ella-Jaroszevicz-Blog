import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      {/* <HeroSection />

      <ContactSection /> */}
    </div>
  );
}
