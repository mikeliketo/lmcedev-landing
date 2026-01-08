import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Search, Brain, Clock, Home } from "lucide-react";

const apps = [
  {
    name: "LineupDesigner",
    tagline: "Create perfect hockey lineups in seconds",
    description:
      "The ultimate tool for hockey coaches to create lines, manage players, and organize practices. Supports 5v5 games, 3v3 tournaments, and camp mode.",
    href: "/apps/lineupdesigner",
    externalHref: "https://lineupdesigner.com",
    icon: Users,
    features: ["Drag & drop builder", "Special teams (PP, PK)", "AI-assisted balancing"],
    status: "live",
  },
  {
    name: "CampDesigner",
    tagline: "Manage sports camps with ease",
    description:
      "Complete platform for managing sports camps - from registration to payment. Handle player sign-ups, schedules, and automated confirmations.",
    href: "/apps/campdesigner",
    externalHref: "https://campdesigner.com",
    icon: Calendar,
    features: ["Player registration", "Payment integration", "Schedule management"],
    status: "live",
  },
  {
    name: "HockeyCampFinder",
    tagline: "Find the perfect hockey camp",
    description:
      "Search platform for finding and comparing hockey camps in Sweden and the Nordics. Filter by location, age, skill level, and more.",
    href: "/apps/hockeycampfinder",
    externalHref: "https://hockeycampfinder.com",
    icon: Search,
    features: ["Camp search", "Compare programs", "Easy booking"],
    status: "coming-soon",
  },
  {
    name: "HockeyHeart",
    tagline: "AI-powered hockey coaching",
    description:
      "AI platform for hockey players and coaches with video analysis and personalized coaching. Get feedback on your technique and performance.",
    href: "/apps/hockeyheart",
    externalHref: "https://hockeyheart.com",
    icon: Brain,
    features: ["AI video analysis", "Personal training plans", "Coach portal"],
    status: "coming-soon",
  },
  {
    name: "Levbo",
    tagline: "Smart home buying in Sweden",
    description:
      "Complete platform for Swedish home buyers. Analyze costs, compare properties, and get AI-driven price insights. All Swedish rules built-in.",
    href: "/apps/levbo",
    externalHref: "https://levbo.se",
    icon: Home,
    features: ["Loan calculations", "Cost analysis", "AI price insights"],
    status: "coming-soon",
  },
];

export function AppsShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Apps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built with care for the sports community. Each app solves real problems for coaches, players, and families.
          </p>
        </div>

        {/* Apps grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <Card
                key={app.name}
                className="card-elevated group relative overflow-hidden bg-card/80 backdrop-blur-sm transition-all"
              >
                {/* Status badge */}
                {app.status === "coming-soon" && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Clock className="h-3 w-3" />
                    Coming Soon
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{app.name}</CardTitle>
                      <CardDescription className="text-primary">
                        {app.tagline}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">{app.description}</p>

                  {/* Features */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {app.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <Button asChild variant="outline" size="sm">
                      <Link href={app.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {app.status === "live" && (
                      <Button asChild size="sm">
                        <a
                          href={app.externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="animate-color-wash absolute inset-0" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
