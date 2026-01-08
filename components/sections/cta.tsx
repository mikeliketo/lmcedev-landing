import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 px-6 py-16 shadow-xl sm:px-16 md:py-24">
          {/* Background decoration - more vibrant */}
          <div className="absolute -left-20 -top-20 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-[80px]" />

          {/* Top accent line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Try our apps today. No credit card required for free tiers. Upgrade when you&apos;re ready.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="animate-pulse-breath">
                <Link href="/apps">
                  Explore Apps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
