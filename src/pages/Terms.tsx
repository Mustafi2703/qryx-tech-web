import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "3 May 2026";

const policyPageHeader = (title: string) => (
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
);

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {policyPageHeader("Terms & Conditions")}

      <main className="container mx-auto px-6 lg:px-8 py-16 max-w-3xl">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the website at <strong className="text-foreground">qryxtech.com</strong> (the "Website")
              or engaging with any services provided by <strong className="text-foreground">QRYX Tech Private Limited</strong>
              {" "}("QRYX Tech", "we", "us", or "our"), you agree to be bound by these Terms &amp; Conditions
              ("Terms"). If you do not agree, please do not use the Website or our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Services</h2>
            <p className="text-muted-foreground">
              QRYX Tech provides technology consulting services to micro, small, and medium enterprises (MSMEs),
              including but not limited to workflow analysis, software integration, process automation, and
              dashboard design. The scope of any engagement is defined in a separate Statement of Work or
              Consulting Agreement signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Use of the Website</h2>
            <p className="text-muted-foreground">You agree to use the Website only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
              <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
              <li>Attempt to gain unauthorised access to any part of the Website or its systems</li>
              <li>Use the Website in any way that could damage, disable, or impair it</li>
              <li>Scrape, crawl, or harvest any content from the Website without prior written consent</li>
              <li>Misrepresent your identity or affiliation when submitting enquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on the Website — including text, graphics, logos, icons, and code — is the property
              of QRYX Tech Private Limited or its content suppliers and is protected under applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works without our express
              written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              The Website and all information provided on it are offered on an "as is" and "as available" basis
              without any warranty of any kind, express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the
              Website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by applicable law, QRYX Tech Private Limited shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages arising out of or in
              connection with your use of the Website, even if we have been advised of the possibility of such
              damages. Our total liability to you for any claim shall not exceed the amount paid by you to us,
              if any, in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Confidentiality</h2>
            <p className="text-muted-foreground">
              Any business information, operational data, or other materials shared with us during a consultation
              or engagement will be treated as confidential. We will not disclose such information to third parties
              without your prior written consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Third-Party Links</h2>
            <p className="text-muted-foreground">
              The Website may contain links to third-party websites. These links are provided for convenience only.
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices
              of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
              arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of
              the courts in India.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Changes to These Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Changes will be effective when posted on
              this page with an updated "Last updated" date. Your continued use of the Website constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">11. Contact</h2>
            <p className="text-muted-foreground">
              For any questions regarding these Terms, please contact us at:
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

export default Terms;
