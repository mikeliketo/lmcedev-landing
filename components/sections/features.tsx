import { Flag, Heart, Zap, Shield, Globe, Sparkles } from "lucide-react";

const features = [
  {
    name: "Swedish Quality",
    description:
      "Built in Sweden with attention to detail and user experience. We take pride in crafting reliable, polished software.",
    icon: Flag,
  },
  {
    name: "Real Problem Solving",
    description:
      "We build what we need ourselves. Every app solves a real problem we've experienced as parents, coaches, and busy people.",
    icon: Heart,
  },
  {
    name: "Fast & Reliable",
    description:
      "Modern tech stack with Next.js and React. Your data is always available when you need it.",
    icon: Zap,
  },
  {
    name: "Secure & Private",
    description:
      "Your data is encrypted and stored securely. We never sell or share your information with third parties.",
    icon: Shield,
  },
  {
    name: "Multi-language",
    description:
      "Available in Swedish, English, Finnish, Czech, and German. More languages coming soon.",
    icon: Globe,
  },
  {
    name: "Always Improving",
    description:
      "Regular updates based on user feedback. We listen to our community and continuously improve.",
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <section className="relative border-t border-primary/20 py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 section-alt" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Accent line */}
        <div className="mx-auto mb-16 max-w-xs accent-line" />

        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose LMCE Dev
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build software with purpose. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="card-elevated group flex flex-col items-start gap-4 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shadow-md transition-colors group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
