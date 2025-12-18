import guidePortrait from "@/assets/guide-portrait-1.jpg";

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-sans text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Meet Our Team
            </p>
            <h2 className="font-serif text-foreground text-4xl md:text-5xl font-semibold mb-6">
              Trailblazers Who Lead the Way
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Our guides aren't just experts in mountain navigation—they're pioneers breaking barriers in Nepal's outdoor industry. Each woman on our team has undergone rigorous training and certification.
              </p>
              <p>
                They bring invaluable local knowledge passed down through generations, combined with modern mountaineering skills. More importantly, they bring heart, determination, and the spirit of the Himalayas to every journey.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-secondary rounded-2xl p-6 border-l-4 border-saffron">
              <blockquote className="font-serif text-xl italic text-foreground mb-4">
                "Being a guide allows me to support my family while showing the world that Nepali women can do anything we set our minds to."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={guidePortrait}
                    alt="Sunita Tamang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">Sunita Tamang</p>
                  <p className="font-sans text-sm text-muted-foreground">Lead Guide, 8 years experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={guidePortrait}
                    alt="Woman guide portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <p className="font-serif text-3xl font-semibold mb-1">85%</p>
                  <p className="font-sans text-sm opacity-90">of our staff are women from rural Nepal</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-saffron rounded-2xl p-6 text-foreground">
                  <p className="font-serif text-3xl font-semibold mb-1">25+</p>
                  <p className="font-sans text-sm">certified women guides</p>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&auto=format&fit=crop&q=80"
                    alt="Trekking guide helping climber"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-gold opacity-10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
