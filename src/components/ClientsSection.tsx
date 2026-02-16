import { Factory, Truck, Briefcase, TrendingUp } from "lucide-react";

const segments = [
  { icon: TrendingUp, label: "Growing MSMEs", desc: "Scaling from 10 to 500+ employees" },
  { icon: Factory, label: "Manufacturing", desc: "Production, inventory & supply chain" },
  { icon: Truck, label: "Distribution", desc: "Logistics, warehousing & fulfillment" },
  { icon: Briefcase, label: "Service Businesses", desc: "Operations, delivery & client management" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
            Who We Work With
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            Built for businesses in motion.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We partner with companies that are growing fast and need their operations to keep pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {segments.map((item) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-lg border border-border bg-surface hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
