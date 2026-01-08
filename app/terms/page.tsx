import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - LMCE Dev",
  description: "Terms of Service for LMCE Dev and our applications.",
};

export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: January 2025
        </p>

        <div className="mt-12 space-y-8 text-muted-foreground">
          {/* Company Info */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Service Provider
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
            </div>
          </section>

          {/* Acceptance */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4">
              By accessing or using any LMCE Dev application (LineupDesigner,
              CampDesigner, HockeyCampFinder, HockeyHeart, Levbo, or
              lmcedev.com), you agree to be bound by these Terms of Service. If
              you do not agree, please do not use our services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Our Services
            </h2>
            <p className="mt-4">
              LMCE Dev provides software applications for sports management,
              coaching, and personal productivity. Our services include:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>LineupDesigner - Hockey lineup management</li>
              <li>CampDesigner - Sports camp registration and management</li>
              <li>HockeyCampFinder - Hockey camp search platform</li>
              <li>HockeyHeart - AI-powered hockey coaching</li>
              <li>Levbo - Home buying analysis for Sweden</li>
            </ul>
          </section>

          {/* Account */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. User Accounts
            </h2>
            <p className="mt-4">
              To use certain features, you must create an account. You are
              responsible for:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>Providing accurate account information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          {/* Subscriptions */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Subscriptions and Payments
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-foreground">Billing</h3>
                <p className="mt-2">
                  Paid subscriptions are billed in advance on a monthly or
                  yearly basis. Payment is processed securely through Stripe
                  (Swedish apps) or LemonSqueezy (global hockey apps).
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Free Trials</h3>
                <p className="mt-2">
                  Some services offer free trials. You will not be charged until
                  the trial period ends and you choose to continue.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Cancellation</h3>
                <p className="mt-2">
                  You may cancel your subscription at any time. Access continues
                  until the end of your current billing period. No refunds are
                  provided for partial periods.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Price Changes</h3>
                <p className="mt-2">
                  We may change prices with 30 days notice. Continued use after
                  the change constitutes acceptance of the new price.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Acceptable Use
            </h2>
            <p className="mt-4">You agree not to:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>Use our services for any illegal purpose</li>
              <li>
                Attempt to gain unauthorized access to our systems or other
                users&apos; accounts
              </li>
              <li>Interfere with or disrupt our services</li>
              <li>
                Copy, modify, or distribute our software without permission
              </li>
              <li>Use automated systems to access our services excessively</li>
              <li>Resell or redistribute our services without authorization</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. Intellectual Property
            </h2>
            <p className="mt-4">
              All content, features, and functionality of our services are owned
              by LMCE Dev and protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p className="mt-4">
              You retain ownership of data you enter into our applications. By
              using our services, you grant us a license to store and process
              that data to provide the service.
            </p>
          </section>

          {/* Your Data */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Your Data
            </h2>
            <p className="mt-4">
              You are responsible for the data you enter into our applications.
              We recommend maintaining your own backups of important data.
            </p>
            <p className="mt-4">
              Our handling of your personal data is described in our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Disclaimer of Warranties
            </h2>
            <p className="mt-4">
              Our services are provided &quot;as is&quot; without warranties of
              any kind. We do not guarantee that our services will be
              uninterrupted, error-free, or secure.
            </p>
            <p className="mt-4">
              For Levbo specifically: Our calculations and AI analyses are for
              informational purposes only and should not be considered financial
              or legal advice. Always consult qualified professionals for
              important financial decisions.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Limitation of Liability
            </h2>
            <p className="mt-4">
              To the maximum extent permitted by law, LMCE Dev shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of our services.
            </p>
            <p className="mt-4">
              Our total liability for any claims related to our services is
              limited to the amount you paid us in the 12 months preceding the
              claim.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              10. Termination
            </h2>
            <p className="mt-4">
              We may suspend or terminate your access to our services if you
              violate these terms or engage in fraudulent or illegal activity.
            </p>
            <p className="mt-4">
              You may terminate your account at any time by contacting us or
              using the account settings in our applications.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              11. Changes to Terms
            </h2>
            <p className="mt-4">
              We may update these terms from time to time. We will notify you of
              significant changes by email or through our applications.
              Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              12. Governing Law
            </h2>
            <p className="mt-4">
              These terms are governed by Swedish law. Any disputes shall be
              resolved in Swedish courts, with Skövde District Court as the
              first instance.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              13. Contact
            </h2>
            <p className="mt-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:info@lmcedev.com"
                className="text-primary hover:underline"
              >
                info@lmcedev.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
