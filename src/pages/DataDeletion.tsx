import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DataDeletion = () => {
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
          User Data Deletion Request
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          QRYX Tech Private Limited
        </p>

        <div className="prose prose-neutral max-w-none space-y-10 text-sm leading-relaxed text-foreground">

          <section>
            <p className="text-muted-foreground">
              At <strong className="text-foreground">QRYX Tech Private Limited</strong>, we value your privacy and
              are committed to protecting your personal information. If you would like to request the deletion of
              your data stored with us, please follow the instructions below.
            </p>
          </section>

          {/* Step 1 */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              1. Submit a Deletion Request
            </h2>
            <p className="text-muted-foreground mb-4">
              You can request the deletion of your personal data by contacting us via email at{" "}
              <a
                href="mailto:connect@qryxtech.com"
                className="text-primary hover:underline"
              >
                connect@qryxtech.com
              </a>
              . Please include the following information in your request:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
              <li>Your full name</li>
              <li>Your account information (if applicable)</li>
              <li>A brief description of the data you wish to be deleted</li>
            </ul>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              2. Confirmation
            </h2>
            <p className="text-muted-foreground">
              Once we receive your deletion request, we will verify your identity and process your request.
              You will receive a confirmation email once your data has been successfully deleted.
            </p>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              3. Processing Time
            </h2>
            <p className="text-muted-foreground">
              Please allow us <strong className="text-foreground">30 days</strong> to process your deletion request.
            </p>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              4. Data Retention
            </h2>
            <p className="text-muted-foreground">
              Please note that certain data may be retained as required by law or for legitimate business
              purposes, even after deletion requests are processed.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions or require further assistance, please feel free to reach out to us:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:connect@qryxtech.com"
                  className="text-primary hover:underline"
                >
                  connect@qryxtech.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+919879351499"
                  className="text-primary hover:underline"
                >
                  +91 98793 51499
                </a>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              Thank you for trusting <strong className="text-foreground">QRYX Tech Private Limited</strong> with your information.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default DataDeletion;
