import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden section-gradient">
      {/* Background gradient - more vibrant */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute right-1/4 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="animate-fade-in mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary" />
            Swedish Software Company
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Apps for{" "}
            <span className="text-primary text-glow">Sports</span> &{" "}
            <span className="text-primary text-glow">Family</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            We build tools that help coaches, players, and families organize
            their sports life. From hockey lineups to camp management.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="animate-pulse-breath">
              <Link href="/apps">
                Explore Our Apps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
