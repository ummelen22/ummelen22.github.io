import { Heart, Users, Mountain, Award } from "lucide-react";
import womenTrekkingImage from "@/assets/women-trekking.jpg";

const stats = [
  { icon: Heart, value: "100%", label: "Women-led" },
  { icon: Users, value: "500+", label: "Happy Trekkers" },
  { icon: Mountain, value: "50+", label: "Routes" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={womenTrekkingImage}
                alt="Women trekkers on Himalayan trail"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-10 blur-xl" />
          </div>

          {/* Content */}
          <div>
            <p className="font-sans text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Our Mission
            </p>
            <h2 className="font-serif text-foreground text-4xl md:text-5xl font-semibold mb-6 nepali-border pb-8">
              Empowering Women, One Summit at a Time
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Daughters of the Himalaya was founded with a revolutionary vision: to create sustainable employment opportunities for Nepali women in the traditionally male-dominated trekking industry.
              </p>
              <p>
                Our all-women team of certified guides and porters bring a unique perspective to mountain adventures—combining expert knowledge with warmth, cultural insight, and an unwavering commitment to your safety and comfort.
              </p>
              <p>
                When you trek with us, you're not just exploring the Himalayas. You're supporting women's economic independence, challenging stereotypes, and becoming part of a movement for change.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-secondary hover-lift"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-serif text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="font-sans text-muted-foreground text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
