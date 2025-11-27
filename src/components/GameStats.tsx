import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: Target,
    label: "Risk Levels",
    value: "4",
    description: "Easy, Medium, Hard, Daredevil"
  },
  {
    icon: DollarSign,
    label: "Max Bet",
    value: "$100",
    description: "Set your stakes high"
  },
  {
    icon: TrendingUp,
    label: "Max Profit",
    value: "$10,000",
    description: "Per game session"
  },
  {
    icon: Zap,
    label: "RTP",
    value: "99%",
    description: "Industry-leading return rate"
  }
];

const GameStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Game <span className="text-primary">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential information about betting limits and game mechanics.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-2 border-border hover:border-primary/50 transition-all text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6 bg-muted/50 border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Betting Range & Flexibility</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Minimum Bet</h4>
                <p className="text-sm text-muted-foreground">
                  Start from just $0.01 per round, making the game accessible for all players. 
                  Perfect for beginners testing strategies or experienced players playing conservatively.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Maximum Bet</h4>
                <p className="text-sm text-muted-foreground">
                  High rollers can wager up to $100 per round. Combined with high multipliers, 
                  this creates opportunities for substantial wins—up to $10,000 in a single session.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GameStats;
