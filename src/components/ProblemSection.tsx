import { AlertTriangle, Database, GitBranch, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: GitBranch,
    label: "Disconnected Workflows",
    desc: "Teams working in silos with no unified process flow",
  },
  {
    icon: Database,
    label: "Data Silos",
    desc: "Critical information trapped in spreadsheets and isolated tools",
  },
  {
    icon: AlertTriangle,
    label: "Manual Bottlenecks",
    desc: "Repetitive tasks eating into productive hours every day",
  },
  {
    icon: BarChart3,
    label: "No Visibility",
    desc: "Decisions made on gut feel instead of real-time data",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
            The Challenge
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            Growth creates complexity.
            <br />
            Complexity creates chaos.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            As MSMEs scale, operational gaps widen. What worked at 10 employees 
            breaks at 50. Systems that were "good enough" become the bottleneck.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => (
            <div
              key={item.label}
              className="group bg-background border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5 text-steel group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
