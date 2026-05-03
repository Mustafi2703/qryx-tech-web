import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-8 space-y-6">
        {/* Brand + tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 bg-primary-foreground/10 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xs">Q</span>
              </div>
              <span className="font-display font-bold text-sm text-primary-foreground tracking-tight">
                QRYX Tech Private Limited
              </span>
            </div>
            <p className="text-xs text-primary-foreground/50 ml-9">
              Technology Consulting for Growing MSMEs
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <Link to="/privacy-policy" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/refund-policy" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} QRYX Tech Private Limited. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs text-primary-foreground/40">
            <span>CIN: <span className="font-mono">U72900XXXXXXXXXX</span></span>
            <a href="mailto:hello@qryxtech.com" className="hover:text-primary-foreground/70 transition-colors">
              hello@qryxtech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
