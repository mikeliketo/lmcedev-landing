import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Video,
  Target,
  TrendingUp,
  Users,
  MessageSquare,
  Calendar,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HockeyHeart - LMCE Dev",
  description:
    "AI-powered hockey coaching. Video analysis and personalized training plans.",
};

const features = [
  {
    name: "AI Video Analysis",
    description:
      "Upload your game or practice videos. Our AI analyzes your technique and provides detailed feedback.",
    icon: Video,
  },
  {
    name: "Personalized Plans",
    description:
      "Get training plans tailored to your skill level and goals. Focus on what matters most.",
    icon: Target,
  },
  {
    name: "Track Progress",
    description:
      "See your improvement over time. Track metrics, milestones, and achievements.",
    icon: TrendingUp,
  },
  {
    name: "AI Coach Chat",
    description:
      "Ask questions and get instant feedback. Your AI coach is available 24/7.",
    icon: MessageSquare,
  },
  {
    name: "Coach Portal",
    description:
      "For coaches: manage your team, assign drills, and track player development.",
    icon: Users,
  },
  {
    name: "Smart Insights",
    description:
      "AI-powered insights about your game. Discover patterns and areas for improvement.",
    icon: Brain,
  },
];

export default function HockeyHeartPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            HockeyHeart
          </h1>
          <p className="mt-2 text-xl text-primary">AI-powered hockey coaching</p>

          {/* Coming Soon Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Calendar className="h-4 w-4" />
            Coming Soon
          </div>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Take your game to the next level with AI-powered video analysis,
            personalized training plans, and real-time feedback. Your virtual
            coach, available 24/7.
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

        {/* How it works */}
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
                    Upload your video
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Record yourself during practice or games. Upload the video to
                    HockeyHeart for AI analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    AI analyzes your game
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our AI breaks down your technique, positioning, and decision
                    making with detailed feedback.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Get personalized training
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Receive a custom training plan to improve your weak areas and
                    build on your strengths.
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
            HockeyHeart is coming soon. Contact us to be notified when we
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
