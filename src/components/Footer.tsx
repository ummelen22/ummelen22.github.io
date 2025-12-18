import { Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-deep text-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Mountain className="w-6 h-6 text-saffron" />
            <span className="font-serif text-lg">Daughters of the Himalaya</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-cream/70">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">Cookie Policy</a>
          </div>
          
          <p className="font-sans text-sm text-cream/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
