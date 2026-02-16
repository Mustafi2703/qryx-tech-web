const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary-foreground/10 rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">Q</span>
            </div>
            <span className="font-display font-bold text-sm text-primary-foreground tracking-tight">
              QRYX Tech Private Limited
            </span>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} QRYX Tech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
