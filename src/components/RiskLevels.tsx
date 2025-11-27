import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Flame, Skull } from "lucide-react";

const levels = [
  {
    icon: AlertCircle,
    name: "Easy",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
    collision: "1 in 25",
    bestFor: "Beginners or cautious players",
    risk: "Very Low",
    reward: "Lower multipliers, easier to stack wins",
    maxMultiplier: "x1.5"
  },
  {
    icon: TrendingUp,
    name: "Medium",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    collision: "3 in 25",
    bestFor: "Balanced risk-takers",
    risk: "Moderate",
    reward: "Good multiplier growth with fair odds",
    maxMultiplier: "x5.2"
  },
  {
    icon: Flame,
    name: "Hard",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
    collision: "5 in 25",
    bestFor: "Experienced players",
    risk: "High",
    reward: "High multipliers with each crossing",
    maxMultiplier: "x42.8"
  },
  {
    icon: Skull,
    name: "Daredevil",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
    collision: "10 in 25",
    bestFor: "High-stakes thrill-seekers",
    risk: "Extreme",
    reward: "Massive multipliers—up to x3134.87",
    maxMultiplier: "x3134.87"
  }
];

const RiskLevels = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Risk Level</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four difficulty modes, each with unique challenges and rewards. Higher risk means bigger payouts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card border-2 ${level.borderColor} hover:shadow-lg transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-lg ${level.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <level.icon className={`w-7 h-7 ${level.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{level.name}</h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${level.bgColor} ${level.color}`}>
                      {level.maxMultiplier}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{level.bestFor}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Collision Chance</span>
                  <span className="font-semibold">{level.collision}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Risk Level</span>
                  <span className={`font-semibold ${level.color}`}>{level.risk}</span>
                </div>
                <div className="py-2 border-t border-border/50">
                  <span className="text-sm text-muted-foreground block mb-1">Reward</span>
                  <span className="text-sm">{level.reward}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">Pro Tip:</strong> Start with Easy mode to understand the game mechanics, 
            then gradually increase difficulty as you develop your timing and strategy. Daredevil mode is not for the faint of heart!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiskLevels;
