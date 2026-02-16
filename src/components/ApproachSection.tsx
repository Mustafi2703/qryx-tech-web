import { Search, Link, Eye } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnose Workflows",
    desc: "We map your current processes end-to-end, identifying friction points, redundancies, and disconnected handoffs that slow your team down.",
  },
  {
    number: "02",
    icon: Link,
    title: "Connect Systems",
    desc: "We integrate your existing tools and software into a unified operational layer — no rip-and-replace, just smart connections.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Create Decision Clarity",
    desc: "We build actionable dashboards and automated reporting so you make decisions based on real data, not guesswork.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
            Our Approach
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            A structured path from
            <br />
            chaos to clarity.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We follow a proven three-step methodology that transforms operational 
            complexity into streamlined, data-driven systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <span className="font-display text-5xl font-extrabold text-secondary select-none">
                  {step.number}
                </span>
                <div className="pt-2">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
