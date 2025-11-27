import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Casinos = () => {
  // Template: Add your casino data here
  const casinos = [
    {
      id: 1,
      name: "Roobet",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjun-m093Qp5BWyDw_OKkz0-JdcbP07Ap_bA&s", // Replace with actual logo path
      url: "https://roobet.com/", // Replace with actual casino URL
    },
    {
      id: 2,
      name: "Player City",
      logo: "data:image/jpeg;base64,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", // Replace with actual logo path
      url: "https://player.city/", // Replace with actual casino URL
    },
    {
      id: 3,
      name: "Casino Name 3",
      logo: "/placeholder.svg", // Replace with actual logo path
      url: "https://example.com", // Replace with actual casino URL
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where to <span className="text-secondary">Play</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mission Uncrossable is available at these trusted casino partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {casinos.map((casino) => (
            <Card
              key={casino.id}
              className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-full h-24 flex items-center justify-center bg-background/50 rounded-lg">
                  <img
                    src={casino.logo}
                    alt={`${casino.name} logo`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">{casino.name}</h3>
                <Button
                  asChild
                  className="w-full shadow-neon hover:shadow-neon-glow"
                >
                  <a
                    href={casino.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Now
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Casinos;
