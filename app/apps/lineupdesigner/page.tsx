import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Users,
  Layers,
  Download,
  Sparkles,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LineupDesigner - LMCE Dev",
  description:
    "Create perfect hockey lineups in seconds. The ultimate tool for hockey coaches.",
};

const features = [
  {
    name: "5v5 Match Mode",
    description:
      "Create complete game lineups with 4 forward lines, 3 defense pairs, goalies, and all special teams (PP, PK, OT, Shootout).",
  },
  {
    name: "3v3 Multi-Team",
    description:
      "Perfect for practices and tournaments. Create multiple balanced teams and randomize between them.",
  },
  {
    name: "Camp Mode",
    description:
      "Handle 100+ players at camps. Auto-group by birth year, create match schedules, and balance teams automatically.",
  },
  {
    name: "Drag & Drop",
    description:
      "Intuitive interface for moving players between lines. See your lineup come together in real-time.",
  },
  {
    name: "Import Players",
    description:
      "Import your roster from Excel, CSV, or Google Forms. No manual entry required.",
  },
  {
    name: "AI Assistant",
    description:
      "Let AI suggest balanced teams based on player skills, positions, and chemistry.",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "$4.99",
    period: "/month",
    description: "For casual coaches",
    features: [
      "1 team, 50 players",
      "5v5 lines",
      "3v3 match mode",
      "Basic export",
    ],
  },
  {
    name: "Coach",
    price: "$7.99",
    period: "/month",
    description: "For serious coaches",
    features: [
      "3 teams, 75 players",
      "Defense pairs & goalies",
      "Special teams (PP, PK, OT)",
      "Training mode",
      "Import from Excel/CSV",
      "Full export with branding",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$12.99",
    period: "/month",
    description: "For camps & organizations",
    features: [
      "Unlimited teams & players",
      "AI team balancing",
      "Player skill levels",
      "Strengths & weaknesses",
      "Camp mode",
      "Schedule builder",
    ],
  },
];

export default function LineupDesignerPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            LineupDesigner
          </h1>
          <p className="mt-2 text-xl text-primary">
            Create perfect hockey lineups in seconds
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The ultimate tool for hockey coaches. Build balanced lines, manage
            special teams, and organize your roster with an intuitive drag & drop
            interface.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="animate-pulse-breath">
              <a
                href="https://lineupdesigner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
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
            Everything you need
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

        {/* Modes */}
        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Three powerful modes
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <Layers className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">5v5 Match</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Full game lineups with special teams
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <Users className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">3v3 Multi</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create and balance multiple teams
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <Download className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">Camp Mode</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Handle 100+ players at events
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Simple pricing
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Start free, upgrade when you&apos;re ready
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-lg border bg-card p-6 ${
                  tier.popular ? "border-primary" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  <a
                    href="https://lineupdesigner.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <Sparkles className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-6 text-2xl font-bold text-foreground">
            Ready to build better lineups?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of coaches who save time and create balanced teams with
            LineupDesigner.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a
              href="https://lineupdesigner.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Free Trial
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
