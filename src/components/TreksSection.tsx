import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, MapPin } from "lucide-react";

const treks = [
  {
    name: "Everest Base Camp",
    duration: "14 Days",
    difficulty: "Challenging",
    region: "Khumbu",
    description: "Journey to the foot of the world's highest peak through legendary Sherpa villages.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Annapurna Circuit",
    duration: "18 Days",
    difficulty: "Moderate",
    region: "Annapurna",
    description: "The classic Nepal trek crossing diverse landscapes and the famous Thorong La Pass.",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Langtang Valley",
    duration: "10 Days",
    difficulty: "Moderate",
    region: "Langtang",
    description: "Discover the 'Valley of Glaciers' with stunning mountain scenery and Tamang culture.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80",
  },
];

const TreksSection = () => {
  return (
    <section id="treks" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-sans text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Featured Adventures
          </p>
          <h2 className="font-serif text-foreground text-4xl md:text-5xl font-semibold mb-6">
            Discover Our Signature Treks
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            Each journey is carefully crafted to showcase Nepal's breathtaking beauty while supporting local women's communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <div
              key={trek.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={trek.image}
                  alt={trek.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-saffron/90 text-sm font-sans font-medium text-foreground">
                    {trek.region}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-3">
                  {trek.name}
                </h3>
                <p className="font-sans text-muted-foreground mb-4">
                  {trek.description}
                </p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {trek.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {trek.difficulty}
                  </span>
                </div>
                
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Treks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreksSection;
