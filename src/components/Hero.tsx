import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import gameLogo from "@/assets/game-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={gameLogo} 
            alt="Mission Uncrossable" 
            className="w-full max-w-2xl h-auto"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Navigate through dangerous lanes of traffic in this high-stakes crypto-powered arcade game. 
          Every successful crossing multiplies your winnings. One collision ends it all.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="text-lg px-8 py-6 shadow-neon hover:shadow-neon-glow transition-all">
            Play Demo Now
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-card">
            Learn How to Play
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">RTP Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">$1M</div>
            <div className="text-sm text-muted-foreground">Max Win</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Risk Levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Play Anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
