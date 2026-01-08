import { Metadata } from "next";
import { Mail, MapPin, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact - LMCE Dev",
  description: "Get in touch with LMCE Dev. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? Want to give feedback? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Send us a message
            </h2>
            <form className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  className="mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="mt-2"
                />
              </div>
              <Button type="submit" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Get in touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                We typically respond within 24 hours. For urgent matters, please
                indicate so in your message.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a
                      href="mailto:info@lmcedev.com"
                      className="font-medium text-foreground hover:text-primary"
                    >
                      info@lmcedev.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">Sweden</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Website</div>
                    <a
                      href="https://lmcedev.com"
                      className="font-medium text-foreground hover:text-primary"
                    >
                      lmcedev.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Frequently Asked
              </h3>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="font-medium text-foreground">
                    How do I get started?
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    Visit our Apps page and choose the app that fits your needs.
                    All apps have free tiers to get started.
                  </div>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    Do you offer support?
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    Yes! All paid plans include email support. Pro users get
                    priority support.
                  </div>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    Can I request features?
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    Absolutely! We love hearing from users. Send us your ideas
                    using the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
