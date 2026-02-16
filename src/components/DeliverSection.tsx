import { ShieldCheck, BarChart2, Layers, ScanEye } from "lucide-react";

const outcomes = [
  {
    icon: ShieldCheck,
    title: "Reduced Operational Chaos",
    desc: "Streamlined workflows that eliminate bottlenecks and manual workarounds.",
  },
  {
    icon: BarChart2,
    title: "Clear Decision Dashboards",
    desc: "Real-time visibility into the metrics that actually matter for your business.",
  },
  {
    icon: Layers,
    title: "Scalable Business Systems",
    desc: "Infrastructure that grows with you — no more rebuilding every time you scale.",
  },
  {
    icon: ScanEye,
    title: "Improved Visibility & Control",
    desc: "Know what's happening across your operations at any given moment.",
  },
];

const DeliverSection = () => {
  return (
    <section id="deliver" className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
            What We Deliver
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            Outcomes, not outputs.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We measure success by the impact on your business — not the number of features shipped.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 bg-surface border border-border rounded-lg p-6"
            >
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;
