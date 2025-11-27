import Hero from "@/components/Hero";
import HowToPlay from "@/components/HowToPlay";
import Features from "@/components/Features";
import RiskLevels from "@/components/RiskLevels";
import Strategy from "@/components/Strategy";
import GameStats from "@/components/GameStats";
import Casinos from "@/components/Casinos";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowToPlay />
      <Features />
      <RiskLevels />
      <Strategy />
      <GameStats />
      <Casinos />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
