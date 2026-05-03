import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "qryx_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Slight delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-surface border border-border rounded-lg shadow-xl p-5"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-[10px]">Q</span>
          </div>
          <span className="text-sm font-semibold text-foreground">Cookies & Privacy</span>
        </div>
        <button
          onClick={decline}
          aria-label="Close"
          className="text-muted-foreground hover:text-foreground transition-colors mt-0.5"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        We use cookies and the Meta Pixel to improve your experience and to show you relevant content.
        By clicking <strong className="text-foreground">"Accept All"</strong>, you consent to our use of cookies.
        Read our{" "}
        <Link to="/privacy-policy" className="text-accent underline underline-offset-2 hover:opacity-80">
          Privacy Policy
        </Link>{" "}
        for more details.
      </p>

      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-primary text-primary-foreground text-xs font-semibold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
        >
          Accept All
        </button>
        <button
          onClick={decline}
          className="flex-1 border border-border text-foreground text-xs font-semibold py-2 px-4 rounded-md hover:bg-secondary transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
