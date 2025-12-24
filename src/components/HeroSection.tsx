import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Himalayan mountains at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/40 via-slate-deep/30 to-slate-deep/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-saffron text-sm md:text-base uppercase tracking-[0.3em] mb-6 animate-fade-up [animation-fill-mode:forwards] [animation-delay:200ms]">
            Women-led adventures in Nepal
          </p>
          
          <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6 animate-fade-up [animation-fill-mode:forwards] [animation-delay:400ms]">
            Daughters of the
            <span className="block text-saffron">Himalaya</span>
          </h1>
          
          <p className="font-sans text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up [animation-fill-mode:forwards] [animation-delay:600ms]">
            Experience the majesty of Nepal's mountains with our all-women team of expert guides and porters. Empowering journeys, one trek at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-fill-mode:forwards] [animation-delay:800ms]">
            <a href="#treks">
              <Button variant="hero" size="xl">
                Explore Our Treks
              </Button>
            </a>
            <a href="#about">
              <Button variant="heroOutline" size="xl">
                Our Story
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors">
          <span className="font-sans text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
