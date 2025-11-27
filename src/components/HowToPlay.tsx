import { Card } from "@/components/ui/card";
import { Coins, Target, MousePointer, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Coins,
    title: "Set Your Bet",
    description: "Choose your wager from $0.01 to $100. Start small to learn the game or go big for higher rewards. Your bet determines your potential payout with each successful crossing."
  },
  {
    icon: Target,
    title: "Select Difficulty",
    description: "Pick your risk level: Easy (1/25 crash), Medium (3/25), Hard (5/25), or Daredevil (10/25). Higher risk means bigger multipliers but lower survival odds."
  },
  {
    icon: MousePointer,
    title: "Make Your Move",
    description: "Tap or click to advance through traffic lanes. Each lane crossed increases your multiplier. Watch the patterns, time your moves, and avoid collisions at all costs."
  },
  {
    icon: DollarSign,
    title: "Cash Out or Continue",
    description: "Secure your winnings anytime by cashing out, or push forward for bigger multipliers. The choice is yours—play it safe or risk it all for maximum rewards."
  }
];

const HowToPlay = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to <span className="text-secondary">Play</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple to learn, challenging to master. Follow these steps to start your mission.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-neon group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
