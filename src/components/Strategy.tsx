import { Card } from "@/components/ui/card";
import { Lightbulb, Eye, Target, Shield } from "lucide-react";

const tips = [
  {
    icon: Shield,
    title: "Start Conservative",
    description: "Begin with Easy or Medium difficulty to understand the game flow. Make 2-3 safe crossings and cash out early while learning. Build your bankroll before taking bigger risks."
  },
  {
    icon: Eye,
    title: "Watch the Patterns",
    description: "Traffic isn't completely random. Take a moment to observe the lane before crossing. Recognizing rhythm and timing can be the difference between winning and losing."
  },
  {
    icon: Target,
    title: "Set Clear Limits",
    description: "Define your session budget and stick to it. Decide in advance how many rounds you'll play and what profit target you're aiming for. Discipline beats emotion every time."
  },
  {
    icon: Lightbulb,
    title: "Know When to Stop",
    description: "The temptation to go 'just one more lane' is real—and dangerous. If you've doubled or tripled your bet, that's often a smart exit point. Greed is the enemy of profit."
  }
];

const Strategy = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Winning <span className="text-secondary">Strategy Tips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            There's no guaranteed formula, but smart decisions and patience go a long way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {tips.map((tip, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-secondary/50 transition-all"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card border-2 border-primary/30 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Remember: The House Always Has an Edge</h3>
            <p className="text-muted-foreground leading-relaxed">
              While Mission Uncrossable offers an impressive 99% RTP (Return to Player), no strategy guarantees wins. 
              The game is designed for entertainment, and outcomes are ultimately determined by chance. 
              Play responsibly, never chase losses, and only bet what you can afford to lose. 
              Smart bankroll management and knowing when to walk away are your best strategies.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Strategy;
