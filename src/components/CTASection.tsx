import { useState } from "react";
import { Send, MessageCircle, Mail } from "lucide-react";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Let's Talk
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
              If your growth is creating complexity, let's fix the system behind it.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Schedule a free consultation to discuss your operational challenges 
              and explore how we can help.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                WhatsApp — Chat with us directly
              </a>
              <a
                href="mailto:hello@qryxtech.com"
                className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                hello@qryxtech.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                How can we help?
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us about your operational challenges..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
