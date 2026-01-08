import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  MapPin,
  Calendar,
  Star,
  Filter,
  Heart,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HockeyCampFinder - LMCE Dev",
  description:
    "Find the perfect hockey camp. Search and compare camps in Sweden and the Nordics.",
};

const features = [
  {
    name: "Search by Location",
    description:
      "Find camps near you or in your preferred region. Filter by city, county, or country.",
    icon: MapPin,
  },
  {
    name: "Filter by Age & Level",
    description:
      "Find camps for your player's age group and skill level. From beginners to elite.",
    icon: Filter,
  },
  {
    name: "Compare Camps",
    description:
      "Side-by-side comparison of camps. Compare dates, prices, and what's included.",
    icon: Search,
  },
  {
    name: "Read Reviews",
    description:
      "Real reviews from other parents and players. Make informed decisions.",
    icon: Star,
  },
  {
    name: "Save Favorites",
    description:
      "Bookmark camps you're interested in. Come back and compare later.",
    icon: Heart,
  },
  {
    name: "Get Notified",
    description:
      "Set up alerts for new camps or when registration opens for your favorites.",
    icon: Bell,
  },
];

export default function HockeyCampFinderPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Search className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            HockeyCampFinder
          </h1>
          <p className="mt-2 text-xl text-primary">
            Find the perfect hockey camp
          </p>

          {/* Coming Soon Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Calendar className="h-4 w-4" />
            Coming Soon
          </div>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The easiest way to find and compare hockey camps in Sweden and the
            Nordics. Search by location, age, skill level, and more.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Bell className="mr-2 h-4 w-4" />
                Get Notified at Launch
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
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
            What to expect
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

        {/* Preview */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-center text-2xl font-bold text-foreground">
              Preview: How it will work
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Search for camps
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Enter your location, dates, and player details. We&apos;ll show
                    you matching camps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Compare options
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    See all the details side-by-side. Compare prices, schedules,
                    and what&apos;s included.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Book with confidence
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Read reviews from other families. Then register directly with
                    the camp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Be the first to know
          </h2>
          <p className="mt-4 text-muted-foreground">
            HockeyCampFinder is coming soon. Contact us to be notified when we
            launch.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              <Bell className="mr-2 h-4 w-4" />
              Get Notified
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
