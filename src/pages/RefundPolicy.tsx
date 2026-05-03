import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "3 May 2026";

const RefundPolicy = () => {
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

      <main className="container mx-auto px-6 lg:px-8 py-16 max-w-3xl">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Overview</h2>
            <p className="text-muted-foreground">
              This Refund &amp; Cancellation Policy applies to all consulting and technology services provided
              by <strong className="text-foreground">QRYX Tech Private Limited</strong> ("QRYX Tech"). We
              are committed to delivering measurable value to every client. Please read this policy carefully
              before engaging our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Free Consultations</h2>
            <p className="text-muted-foreground">
              Initial discovery calls and consultations offered through our Website are complimentary and
              involve no obligation or payment. These sessions may be cancelled or rescheduled at any time
              without penalty.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Paid Engagements</h2>
            <p className="text-muted-foreground">
              Once a formal engagement has been agreed upon and a Statement of Work (SOW) or contract has
              been signed:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2 ml-2">
              <li>
                <strong className="text-foreground">Retainer / milestone-based projects:</strong> A retainer
                or advance payment secures our time and resources. This amount is non-refundable once work
                has commenced, except where we are unable to deliver the agreed scope due to circumstances
                within our control.
              </li>
              <li>
                <strong className="text-foreground">Milestone deliverables:</strong> Payment for completed
                milestones or deliverables that have been accepted by the client is non-refundable.
              </li>
              <li>
                <strong className="text-foreground">Incomplete milestones:</strong> If a project is
                cancelled by the client before a milestone is completed, we will invoice for work done
                up to the cancellation date on a pro-rata basis. Any advance in excess of this amount
                will be refunded within 14 business days.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Cancellation by Client</h2>
            <p className="text-muted-foreground">
              To cancel an engagement, the client must notify QRYX Tech in writing via email to{" "}
              <a href="mailto:connect@qryxtech.com" className="text-accent underline underline-offset-2 hover:opacity-80">
                connect@qryxtech.com
              </a>.
              Cancellations become effective upon written acknowledgement from our side.
              The following notice periods apply:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs border border-border rounded-md">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left px-4 py-2 font-semibold text-foreground border-b border-border">Project Stage</th>
                    <th className="text-left px-4 py-2 font-semibold text-foreground border-b border-border">Notice Required</th>
                    <th className="text-left px-4 py-2 font-semibold text-foreground border-b border-border">Refund Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="px-4 py-2">Before work has started</td>
                    <td className="px-4 py-2">Any time</td>
                    <td className="px-4 py-2">Full refund of advance</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2">Within first 7 days of work</td>
                    <td className="px-4 py-2">Written notice</td>
                    <td className="px-4 py-2">Pro-rata refund of unused advance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">After 7 days of work</td>
                    <td className="px-4 py-2">14 days written notice</td>
                    <td className="px-4 py-2">No refund; final invoice for work done</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Cancellation by QRYX Tech</h2>
            <p className="text-muted-foreground">
              In the rare event that we are unable to fulfil an engagement, we will promptly notify the
              client and provide a full refund of any amounts paid for undelivered work. We accept no
              further liability beyond this refund obligation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Dispute Resolution</h2>
            <p className="text-muted-foreground">
              If you are dissatisfied with any aspect of our service, please contact us at{" "}
              <a href="mailto:connect@qryxtech.com" className="text-accent underline underline-offset-2 hover:opacity-80">
                connect@qryxtech.com
              </a>{" "}
              before raising a dispute. We aim to resolve all issues within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <div className="p-5 bg-secondary rounded-lg border border-border space-y-2">
              <p className="font-semibold text-foreground">QRYX Tech Private Limited</p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a href="mailto:connect@qryxtech.com" className="text-accent hover:opacity-80">
                  connect@qryxtech.com
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

export default RefundPolicy;
