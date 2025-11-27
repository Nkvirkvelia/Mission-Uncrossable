import { Card } from "@/components/ui/card";
import { Shield, Smartphone, TrendingUp, Gamepad2, CreditCard, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Multiple Control Options",
    description: "Play with tap/click controls or enable hotkeys for lightning-fast gameplay. Space to bet, W to cash out, E to advance—full control at your fingertips."
  },
  {
    icon: TrendingUp,
    title: "Dynamic Multipliers",
    description: "Watch your winnings grow with every lane you cross. Multipliers stack progressively, with potential payouts reaching up to x3134.87 in Daredevil mode."
  },
  {
    icon: Shield,
    title: "Provably Fair",
    description: "Built on blockchain technology with transparent, verifiable fairness. Every round is cryptographically secure and independently auditable."
  },
  {
    icon: Sparkles,
    title: "Demo Mode",
    description: "Practice without risk using demo credits. Perfect for testing strategies, learning the game mechanics, and building confidence before playing with real money."
  },
  {
    icon: CreditCard,
    title: "Cash Out Anytime",
    description: "You're always in control. Secure your winnings at any point during the game. No forced rounds—decide when to play it safe or push for more."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Seamless experience across all devices. Quick load times, responsive controls, and perfect for on-the-go gaming sessions or extended play."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Game <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for an engaging, fair, and thrilling gaming experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-neon group"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
