import { Metadata } from "next";
import { Flag, Heart, Users, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About - LMCE Dev",
  description:
    "Learn about LMCE Dev, a Swedish software company building apps for sports and family.",
};

const values = [
  {
    name: "Quality First",
    description:
      "We believe in building software that just works. Every feature is tested, polished, and designed with the user in mind.",
    icon: Flag,
  },
  {
    name: "Problem Solvers",
    description:
      "We build what's missing. As parents and coaches with busy lives, we create the tools we wish existed.",
    icon: Heart,
  },
  {
    name: "User Focused",
    description:
      "Our users drive our roadmap. We listen to feedback, iterate quickly, and always prioritize what matters most to our community.",
    icon: Users,
  },
  {
    name: "Modern Tech",
    description:
      "Built with the latest technologies: Next.js, React, TypeScript, and AI. Fast, reliable, and ready for the future.",
    icon: Code2,
  },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About LMCE Dev
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We&apos;re a Swedish software company with a simple mission: everything
            we feel is missing in our world with children, sports, and hectic
            schedules - we build it.
          </p>
        </div>

        {/* Story */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                We&apos;re parents, coaches, and players ourselves. We know the chaos
                of juggling kids&apos; schedules, managing teams, organizing camps, and
                trying to keep track of everything. When we couldn&apos;t find the
                tools we needed, we built them.
              </p>
              <p>
                What started as a side project to create hockey lineups quickly grew
                into a suite of apps. LineupDesigner helps thousands of coaches
                create balanced lines. CampDesigner handles registrations and
                payments. And we&apos;re just getting started.
              </p>
              <p>
                Based in Sweden, we believe in clean, functional design. Every
                feature we build solves a real problem that we&apos;ve experienced
                ourselves. If it doesn&apos;t exist and we need it - we build it.
              </p>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="mx-auto mt-24 max-w-3xl">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-center text-2xl font-bold text-foreground">
              The Founder
            </h2>
            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              {/* Photo placeholder */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm text-muted-foreground">
                Photo coming soon
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  [Name coming soon]
                </h3>
                <p className="text-primary">[Title coming soon]</p>
                <p className="mt-4 text-muted-foreground">
                  [Bio coming soon - hockey coach, parent, and developer who got
                  tired of spreadsheets and started building the tools he needed.]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.name}
                  className="flex gap-4 rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-center text-2xl font-bold text-foreground">
              By the Numbers
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="mt-1 text-sm text-muted-foreground">Apps Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="mt-1 text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
