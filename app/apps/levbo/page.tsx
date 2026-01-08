import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Home,
  Calculator,
  TrendingUp,
  FileText,
  Sparkles,
  Bell,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Levbo - LMCE Dev",
  description:
    "Smart home buying platform for Sweden. Analyze costs, compare properties, and get AI-driven price insights.",
};

const features = [
  {
    name: "Loan Calculations",
    description:
      "Swedish amortization rules built-in. LTV calculations, monthly costs, and time to payment milestones.",
  },
  {
    name: "Purchase Cost Analysis",
    description:
      "Complete breakdown of all costs: stamp duty, mortgage fees, inspections, and more.",
  },
  {
    name: "Running Costs",
    description:
      "Estimate monthly costs based on heating type, energy class, size, and municipal fees.",
  },
  {
    name: "Property Comparison",
    description:
      "Compare properties side by side with all costs, monthly expenses, and key metrics.",
  },
  {
    name: "Renovation Tracking",
    description:
      "Log renovations, categorize as improvements or repairs, track tax-deductible costs.",
  },
  {
    name: "AI Price Analysis",
    description:
      "Claude-powered analysis comparing listing price to recently sold properties in the area.",
  },
];

const highlights = [
  "Swedish amortization rules (2%, 1%, 0%)",
  "Capital gains tax calculations",
  "Deferral rules (uppskov)",
  "ROT deduction included",
  "Property fee caps",
  "Current stamp duty rates",
];

export default function LevboPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Home className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Coming Soon badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Bell className="h-4 w-4" />
            Coming Soon
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Levbo
          </h1>
          <p className="mt-2 text-xl text-primary">
            Smart home buying in Sweden
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Complete platform for Swedish home buyers. Analyze purchase costs,
            compare properties, and get AI-driven price insights. All Swedish
            rules and regulations built-in.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="animate-pulse-breath">
              <a
                href="https://levbo.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Notified at Launch
                <Bell className="ml-2 h-4 w-4" />
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
            Everything for your home purchase
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key capabilities */}
        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Three powerful tools
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <Calculator className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">Calculate</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Loans, costs, and monthly expenses
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <TrendingUp className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">Compare</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Properties side by side
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <Sparkles className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">AI Analyze</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get price insights with AI
              </p>
            </div>
          </div>
        </div>

        {/* Swedish rules */}
        <div className="mx-auto mt-24 max-w-3xl">
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Swedish rules built-in
              </h2>
            </div>
            <p className="mt-4 text-center text-muted-foreground">
              All Swedish financial regulations are automatically applied
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <Bell className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-6 text-2xl font-bold text-foreground">
            Be the first to know
          </h2>
          <p className="mt-4 text-muted-foreground">
            Levbo is coming soon. Sign up to get notified when we launch.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a
              href="https://levbo.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Notified at Launch
              <Bell className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
