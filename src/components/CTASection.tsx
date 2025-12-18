import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor" className="text-cream" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CTA Content */}
          <div>
            <h2 className="font-serif text-primary-foreground text-4xl md:text-5xl font-semibold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-sans text-primary-foreground/90 text-lg mb-8">
              Join us for an adventure that transforms both landscapes and lives. Let our daughters of the mountains show you Nepal as only they can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-cream text-foreground hover:bg-cream/90"
              >
                Plan Your Trek
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg"
                className="border-cream/50 text-cream hover:bg-cream/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:hello@daughtersofthehimalaya.com" 
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-sans">hello@daughtersofthehimalaya.com</span>
              </a>
              <a 
                href="tel:+9771234567890" 
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-sans">+977 1 234 567 890</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <MapPin className="w-5 h-5" />
                <span className="font-sans">Thamel, Kathmandu, Nepal</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
