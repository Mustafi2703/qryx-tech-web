import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      
      <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Technology Consulting for MSMEs
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Your business is growing.
            <br />
            <span className="text-steel">Your systems shouldn't hold it back.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
            We help growing MSMEs integrate workflows, connect disconnected software, 
            and build decision-ready dashboards — so your operations scale with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("approach")}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-secondary transition-colors"
            >
              See How We Work
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("problem")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
