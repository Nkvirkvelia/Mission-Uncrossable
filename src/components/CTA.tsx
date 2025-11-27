import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-card to-muted border-2 border-primary/30 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-secondary">Mission</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Navigate dangerous lanes, multiply your winnings, and decide when to cash out. 
            Every crossing brings you closer to massive rewards—or ends it all.
          </p>
          <Button size="lg" className="text-lg px-10 py-6 shadow-neon hover:shadow-neon-glow">
            Play Demo Free
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            18+ only. Gamble responsibly. Play for entertainment, not profit.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
