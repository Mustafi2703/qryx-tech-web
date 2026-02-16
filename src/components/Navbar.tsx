import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">Q</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            QRYX Tech
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Approach", id: "approach" },
            { label: "Outcomes", id: "deliver" },
            { label: "Clients", id: "clients" },
            { label: "Why Us", id: "why" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
