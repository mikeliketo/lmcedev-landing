import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  CreditCard,
  Mail,
  Users,
  ClipboardList,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CampDesigner - LMCE Dev",
  description:
    "Manage sports camps with ease. Complete platform for registration and payments.",
};

const features = [
  {
    name: "Player Registration",
    description:
      "Custom registration forms with all the fields you need. Collect player info, emergency contacts, and medical details.",
    icon: ClipboardList,
  },
  {
    name: "Payment Integration",
    description:
      "Accept payments via Swish, Klarna, and Stripe. Automatic invoicing and receipt generation.",
    icon: CreditCard,
  },
  {
    name: "Schedule Management",
    description:
      "Create and manage camp schedules. Assign groups, activities, and instructors.",
    icon: Calendar,
  },
  {
    name: "Email Notifications",
    description:
      "Automatic confirmation emails, reminders, and updates. Keep parents informed.",
    icon: Mail,
  },
  {
    name: "Waitlist Handling",
    description:
      "Automatic waitlist management. When spots open up, next in line gets notified.",
    icon: Clock,
  },
  {
    name: "Group Management",
    description:
      "Organize participants into groups by age, skill level, or custom criteria.",
    icon: Users,
  },
];

export default function CampDesignerPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            CampDesigner
          </h1>
          <p className="mt-2 text-xl text-primary">
            Manage sports camps with ease
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Complete platform for managing sports camps. From registration to
            payment, we handle everything so you can focus on running a great
            camp.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="animate-pulse-breath">
              <a
                href="https://campdesigner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/apps">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Apps
              </Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Everything for camp management
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            How it works
          </h2>
          <div className="mt-12 space-y-8">
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Create your camp
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Set up dates, pricing, and capacity. Customize your
                  registration form with the fields you need.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Share your registration page
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get a public registration link to share with parents. They can
                  sign up and pay in minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Manage participants
                </h3>
                <p className="mt-2 text-muted-foreground">
                  See all registrations in one place. Export rosters, send
                  updates, and organize groups.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Run your camp
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Focus on what matters - the players. We handle the admin work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="mx-auto mt-24 max-w-3xl">
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <CreditCard className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">
              Payments made easy
            </h2>
            <p className="mt-4 text-muted-foreground">
              Accept payments the way your customers prefer. Swish for quick
              mobile payments, Klarna for flexible options, and Stripe for
              international cards.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                Swish
              </div>
              <div className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                Klarna
              </div>
              <div className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                Stripe
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to simplify camp management?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact us to learn more about CampDesigner and how it can help your
            organization.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a
                href="https://campdesigner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit CampDesigner
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
