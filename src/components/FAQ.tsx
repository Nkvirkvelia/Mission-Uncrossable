import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Mission Uncrossable provably fair?",
    answer: "Yes, absolutely. The game uses blockchain-based provably fair technology, allowing you to independently verify the randomness and fairness of each round. Every outcome is cryptographically secured and can be audited."
  },
  {
    question: "Can I play Mission Uncrossable on mobile?",
    answer: "Yes, the game is fully optimized for mobile devices. It works seamlessly on smartphones and tablets with responsive touch controls, quick load times, and the same features as the desktop version."
  },
  {
    question: "What's the difference between difficulty levels?",
    answer: "Each difficulty level changes the collision probability: Easy (1/25), Medium (3/25), Hard (5/25), and Daredevil (10/25). Higher difficulties offer bigger multipliers but lower survival odds. Choose based on your risk tolerance and experience level."
  },
  {
    question: "How do multipliers work?",
    answer: "Your multiplier increases with each lane you successfully cross. The growth rate depends on your chosen difficulty. You can cash out at any time to secure your current multiplier, or continue crossing for higher potential rewards."
  },
  {
    question: "What happens if I crash?",
    answer: "If your character collides with a car, the round ends immediately and you lose your bet. This is why timing your cash-out is crucial—knowing when to secure your winnings versus pushing for more."
  },
  {
    question: "Can I practice without risking real money?",
    answer: "Yes, Demo Mode lets you play with virtual credits to learn the game mechanics, test strategies, and get comfortable with the controls before playing with real money."
  },
  {
    question: "What are hotkeys and how do I use them?",
    answer: "Hotkeys are keyboard shortcuts for faster gameplay. Space to place bet, S to double bet, A to halve bet, D to zero bet, W to cash out, and E to move to the next lane. Enable them in game settings."
  },
  {
    question: "Is there a maximum win limit?",
    answer: "Yes, the maximum profit per game session is capped at $10,000. This limit ensures responsible gaming while still offering substantial winning potential."
  },
  {
    question: "What is RTP and why does it matter?",
    answer: "RTP (Return to Player) is 99%, meaning that theoretically, for every $100 wagered across all players, $99 is returned as winnings over time. This is one of the highest RTP rates in the industry."
  },
  {
    question: "Which casinos offer Mission Uncrossable?",
    answer: "Mission Uncrossable is available on major crypto casino platforms that support provably fair games. Check the casino's game library for availability. Always ensure you're playing on licensed and reputable platforms."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about playing Mission Uncrossable.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
