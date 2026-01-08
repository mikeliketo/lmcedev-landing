import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Search, Brain, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Apps - LMCE Dev",
  description:
    "Explore our suite of apps for sports and family. LineupDesigner, CampDesigner, HockeyCampFinder, and HockeyHeart.",
};

const apps = [
  {
    name: "LineupDesigner",
    tagline: "Create perfect hockey lineups in seconds",
    description:
      "The ultimate tool for hockey coaches to create lines, manage players, and organize practices. Supports 5v5 games, 3v3 tournaments, and camp mode with AI-assisted balancing.",
    href: "/apps/lineupdesigner",
    externalHref: "https://lineupdesigner.com",
    icon: Users,
    features: [
      "Drag & drop lineup builder",
      "5v5 with special teams (PP, PK, OT)",
      "3v3 multi-team mode",
      "Import from Excel/CSV",
      "AI-assisted team balancing",
      "Camp mode for large events",
      "Export with team branding",
    ],
    pricing: "From $4.99/month",
    status: "live",
  },
  {
    name: "CampDesigner",
    tagline: "Manage sports camps with ease",
    description:
      "Complete platform for managing sports camps - from registration to payment. Handle player sign-ups, schedules, and automated confirmations with integrated payment solutions.",
    href: "/apps/campdesigner",
    externalHref: "https://campdesigner.com",
    icon: Calendar,
    features: [
      "Player registration forms",
      "Payment integration (Swish, Klarna, Stripe)",
      "Automatic confirmations",
      "Schedule management",
      "Waitlist handling",
      "Email notifications",
    ],
    pricing: "Contact for pricing",
    status: "live",
  },
  {
    name: "HockeyCampFinder",
    tagline: "Find the perfect hockey camp",
    description:
      "Search platform for finding and comparing hockey camps in Sweden and the Nordics. Filter by location, age, skill level, dates, and more to find the perfect camp for your player.",
    href: "/apps/hockeycampfinder",
    externalHref: "https://hockeycampfinder.com",
    icon: Search,
    features: [
      "Search camps by location",
      "Filter by age and skill level",
      "Compare multiple camps",
      "Read reviews and ratings",
      "Easy booking process",
      "Save favorites",
    ],
    pricing: "Free to use",
    status: "coming-soon",
  },
  {
    name: "HockeyHeart",
    tagline: "AI-powered hockey coaching",
    description:
      "AI platform for hockey players and coaches with video analysis and personalized coaching. Get feedback on your technique, track your development, and improve your game.",
    href: "/apps/hockeyheart",
    externalHref: "https://hockeyheart.com",
    icon: Brain,
    features: [
      "AI video analysis",
      "Personalized training plans",
      "Technique feedback",
      "Development tracking",
      "Coach portal",
      "Team management",
    ],
    pricing: "From $9.99/month",
    status: "live",
  },
];

export default function AppsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Apps
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Built with care for the sports community. Each app solves real problems
            for coaches, players, and families.
          </p>
        </div>

        {/* Apps list */}
        <div className="mx-auto mt-16 max-w-5xl space-y-8">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <Card
                key={app.name}
                className="group relative overflow-hidden transition-all hover:border-primary/50"
              >
                {/* Status badge */}
                {app.status === "coming-soon" && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Clock className="h-3 w-3" />
                    Coming Soon
                  </div>
                )}

                <div className="flex flex-col lg:flex-row">
                  <CardHeader className="lg:w-1/3">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{app.name}</CardTitle>
                        <CardDescription className="text-primary">
                          {app.tagline}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">{app.description}</p>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-primary">
                        {app.pricing}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-between lg:w-2/3 lg:border-l lg:border-border">
                    <div className="pt-6 lg:pt-0">
                      <h4 className="text-sm font-medium text-foreground">
                        Features
                      </h4>
                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {app.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button asChild variant="outline">
                        <Link href={app.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {app.status === "live" && (
                        <Button asChild>
                          <a
                            href={app.externalHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Site
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
