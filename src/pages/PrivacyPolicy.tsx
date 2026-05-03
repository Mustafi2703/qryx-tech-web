import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "3 May 2025";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface sticky top-0 z-10">
        <div className="container mx-auto px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">Q</span>
            </div>
            <span className="font-display font-bold text-sm text-foreground tracking-tight">
              QRYX Tech Private Limited
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 max-w-3xl">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-neutral max-w-none space-y-10 text-sm leading-relaxed text-foreground">

          {/* 1. Introduction */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground">
              This Privacy Policy describes how <strong className="text-foreground">QRYX Tech Private Limited</strong>
              {" "}("QRYX Tech", "we", "us", or "our") collects, uses, and shares information about you when
              you visit our website at <strong className="text-foreground">qryxtech.com</strong> (the "Website"),
              contact us, or engage with our technology consulting services.
            </p>
            <p className="text-muted-foreground mt-3">
              By using our Website, you agree to the collection and use of information in accordance with this policy.
              If you do not agree with any part of this policy, please do not use our Website.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-foreground mb-2">2.1 Information You Provide Directly</h3>
            <p className="text-muted-foreground">
              When you fill out our contact form or reach out to us, we collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li>Full name</li>
              <li>Business email address</li>
              <li>Company or business name</li>
              <li>Your message or enquiry</li>
            </ul>

            <h3 className="font-semibold text-foreground mt-5 mb-2">2.2 Information Collected Automatically</h3>
            <p className="text-muted-foreground">
              When you visit our Website, we may automatically collect certain technical information including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URLs</li>
              <li>Date and time of your visit</li>
            </ul>

            <h3 className="font-semibold text-foreground mt-5 mb-2">2.3 Cookies and Tracking Technologies</h3>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies (such as pixels and web beacons) to operate
              and improve our Website and services. These may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li><strong className="text-foreground">Essential cookies:</strong> Required for the Website to function correctly.</li>
              <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors interact with our Website (e.g., Google Analytics).</li>
              <li><strong className="text-foreground">Advertising cookies:</strong> Used to deliver relevant advertisements and measure campaign performance (e.g., Meta Pixel / Facebook Pixel).</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              You can control cookie preferences through your browser settings. Note that disabling certain
              cookies may affect Website functionality.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li>Respond to your enquiries and provide our consulting services</li>
              <li>Schedule and conduct consultations</li>
              <li>Send service-related communications and updates (you may opt out at any time)</li>
              <li>Analyse Website traffic and improve user experience</li>
              <li>Deliver and measure the effectiveness of our advertising campaigns on platforms such as Meta (Facebook and Instagram)</li>
              <li>Comply with applicable legal obligations</li>
              <li>Prevent fraud and ensure the security of our Website</li>
            </ul>
          </section>

          {/* 4. Meta Pixel and Advertising */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Meta Pixel and Third-Party Advertising</h2>
            <p className="text-muted-foreground">
              Our Website uses the <strong className="text-foreground">Meta Pixel</strong> (also known as the Facebook Pixel),
              a technology provided by Meta Platforms, Inc. The Meta Pixel allows us to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li>Measure the effectiveness of our advertisements on Facebook and Instagram</li>
              <li>Build and target custom audiences for our advertising campaigns</li>
              <li>Understand actions people take on our Website after clicking our ads</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              The Meta Pixel may collect your IP address, browser information, and browsing behaviour on
              our Website. This data is shared with Meta and processed in accordance with Meta's own
              Data Policy, available at{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:opacity-80"
              >
                https://www.facebook.com/privacy/policy/
              </a>.
            </p>
            <p className="text-muted-foreground mt-3">
              You can opt out of Meta's use of cookies for advertising purposes by visiting{" "}
              <a
                href="https://www.facebook.com/help/568137493302217"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:opacity-80"
              >
                Meta's Ad Preferences
              </a>.
            </p>
          </section>

          {/* 5. How We Share Your Information */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. How We Share Your Information</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li>
                <strong className="text-foreground">Service providers:</strong> Third-party vendors who assist us in
                operating our Website or conducting our business (e.g., email platforms, analytics providers),
                subject to confidentiality obligations.
              </li>
              <li>
                <strong className="text-foreground">Advertising platforms:</strong> Meta (Facebook) and other
                advertising networks for the purposes described in Section 4.
              </li>
              <li>
                <strong className="text-foreground">Legal requirements:</strong> When required to comply with
                applicable laws, regulations, court orders, or government requests.
              </li>
              <li>
                <strong className="text-foreground">Business transfers:</strong> In connection with a merger,
                acquisition, or sale of all or part of our assets, subject to the acquirer honouring this policy.
              </li>
            </ul>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfil the purposes described
              in this policy, or as required by law. Contact form submissions are retained for up to{" "}
              <strong className="text-foreground">2 years</strong> from the date of submission, after which
              they are securely deleted unless an active business relationship exists.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
            <p className="text-muted-foreground">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li><strong className="text-foreground">Access</strong> the personal information we hold about you</li>
              <li><strong className="text-foreground">Correct</strong> inaccurate or incomplete information</li>
              <li><strong className="text-foreground">Request deletion</strong> of your personal information ("right to be forgotten")</li>
              <li><strong className="text-foreground">Object</strong> to or restrict the processing of your information</li>
              <li><strong className="text-foreground">Data portability</strong> — receive your data in a structured, machine-readable format</li>
              <li><strong className="text-foreground">Withdraw consent</strong> at any time where processing is based on consent</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@qryxtech.com" className="text-accent underline underline-offset-2 hover:opacity-80">
                hello@qryxtech.com
              </a>.
              We will respond within 30 days.
            </p>
          </section>

          {/* 8. Data Security */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction. However, no
              internet transmission or electronic storage method is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our Website may contain links to external websites (e.g., WhatsApp, social media profiles).
              We are not responsible for the privacy practices or content of those third-party sites. We
              encourage you to review the privacy policies of any site you visit.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our Website and services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from minors. If you believe we have inadvertently
              collected such information, please contact us immediately and we will delete it.
            </p>
          </section>

          {/* 11. Changes */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will indicate the date of the most
              recent revision at the top of this page. We encourage you to review this policy periodically.
              Continued use of the Website following any updates constitutes your acceptance of the changes.
            </p>
          </section>

          {/* 12. Contact */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">12. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions, concerns, or requests regarding this Privacy Policy or the way we
              handle your data, please contact us:
            </p>
            <div className="mt-4 p-5 bg-secondary rounded-lg border border-border space-y-2">
              <p className="font-semibold text-foreground">QRYX Tech Private Limited</p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a href="mailto:hello@qryxtech.com" className="text-accent hover:opacity-80">
                  hello@qryxtech.com
                </a>
              </p>
              <p className="text-muted-foreground">Website: qryxtech.com</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} QRYX Tech Private Limited. All rights reserved.
          </p>
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← Back to qryxtech.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
