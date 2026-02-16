import { Check } from "lucide-react";

const reasons = [
  {
    title: "Practical Transformation",
    desc: "We solve real problems with real solutions — no theoretical frameworks.",
  },
  {
    title: "No Heavy IT Overhaul",
    desc: "We work with your existing tools. No expensive migrations or new platforms.",
  },
  {
    title: "Business-First Thinking",
    desc: "Technology is a means, not an end. Every decision ties back to business outcomes.",
  },
  {
    title: "Step-by-Step Execution",
    desc: "Phased delivery so you see value quickly without disrupting operations.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent-foreground/70 tracking-widest uppercase mb-3">
            Why QRYX
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
            We don't sell technology.
            <br />
            We fix businesses.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {reasons.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-primary-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
