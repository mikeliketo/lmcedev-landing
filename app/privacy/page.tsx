import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - LMCE Dev",
  description: "Privacy Policy for LMCE Dev and our applications.",
};

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: January 2025
        </p>

        <div className="mt-12 space-y-8 text-muted-foreground">
          {/* Company Info */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Data Controller
            </h2>
            <div className="mt-4 rounded-lg border border-border bg-card p-6">
              <p className="font-medium text-foreground">
                MP Ton & Produktion AB
              </p>
              <p className="mt-2">Vintergatan 10</p>
              <p>541 33 Skövde</p>
              <p>Sweden</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@lmcedev.com"
                  className="text-primary hover:underline"
                >
                  info@lmcedev.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://lmcedev.com"
                  className="text-primary hover:underline"
                >
                  lmcedev.com
                </a>
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Introduction
            </h2>
            <p className="mt-4">
              This Privacy Policy explains how LMCE Dev (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your
              personal data when you use our websites and applications
              (LineupDesigner, CampDesigner, HockeyCampFinder, HockeyHeart, and
              Levbo).
            </p>
            <p className="mt-4">
              We are committed to protecting your privacy and complying with the
              EU General Data Protection Regulation (GDPR) and Swedish data
              protection laws.
            </p>
          </section>

          {/* Data We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Data We Collect
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-foreground">Account Data</h3>
                <p className="mt-2">
                  When you create an account, we collect your email address and
                  name. This is necessary to provide our services.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Usage Data</h3>
                <p className="mt-2">
                  We collect information about how you use our applications,
                  including features used and actions taken. This helps us
                  improve our services.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Payment Data</h3>
                <p className="mt-2">
                  Payment processing is handled by Stripe (Swedish apps) or
                  LemonSqueezy (global hockey apps). We do not store your credit
                  card details. The respective payment processor&apos;s privacy
                  policy applies to payment data.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  Application Data
                </h3>
                <p className="mt-2">
                  Data you enter into our applications (such as player rosters,
                  camp registrations, or property calculations) is stored
                  securely and only accessible to you.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              How We Use Your Data
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process payments and manage subscriptions</li>
              <li>To send service-related communications</li>
              <li>To improve our applications based on usage patterns</li>
              <li>To respond to support requests</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Legal Basis for Processing
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                <strong>Contract:</strong> Processing necessary to fulfill our
                service agreement with you
              </li>
              <li>
                <strong>Legitimate Interest:</strong> Improving our services and
                preventing fraud
              </li>
              <li>
                <strong>Legal Obligation:</strong> Compliance with applicable
                laws
              </li>
              <li>
                <strong>Consent:</strong> Where you have given explicit consent
                (e.g., marketing emails)
              </li>
            </ul>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Data Storage and Security
            </h2>
            <p className="mt-4">
              Your data is stored securely on servers within the EU (Sweden).
              We use industry-standard encryption and security measures to
              protect your information.
            </p>
            <p className="mt-4">
              We retain your data for as long as your account is active. You can
              request deletion of your data at any time.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Data Sharing
            </h2>
            <p className="mt-4">
              We do not sell your personal data. We only share data with:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                <strong>Service Providers:</strong> Stripe and LemonSqueezy
                (payments), Supabase (database), Vercel (hosting)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Your Rights (GDPR)
            </h2>
            <p className="mt-4">Under GDPR, you have the right to:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> Correct inaccurate data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a portable
                format
              </li>
              <li>
                <strong>Object:</strong> Object to certain processing activities
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent at any time
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:info@lmcedev.com"
                className="text-primary hover:underline"
              >
                info@lmcedev.com
              </a>
              .
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
            <p className="mt-4">
              We use essential cookies to maintain your session and preferences.
              We do not use tracking or advertising cookies.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p className="mt-4">
              We may update this policy from time to time. We will notify you of
              significant changes by email or through our applications.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-4">
              For questions about this Privacy Policy or your data, contact us
              at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:info@lmcedev.com"
                className="text-primary hover:underline"
              >
                info@lmcedev.com
              </a>
            </p>
            <p className="mt-4">
              You also have the right to lodge a complaint with the Swedish
              Authority for Privacy Protection (IMY) at{" "}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.imy.se
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
