import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center md:py-32">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Build Better. Ship Faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            LiteStack Technologies crafts high-performance digital products for
            modern businesses. From concept to launch, we deliver results.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Start Your Project
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Our Work
            </a>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="border-y bg-muted/50 px-6 py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">30+</p>
              <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4.9</p>
              <p className="mt-1 text-sm text-muted-foreground">Avg. Client Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">99%</p>
              <p className="mt-1 text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              End-to-end digital services designed to accelerate your growth.
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
                <p className="mt-2 text-muted-foreground">
                  Fast, accessible, and scalable web applications using modern
                  frameworks like Next.js and React.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Mobile Apps</h3>
                <p className="mt-2 text-muted-foreground">
                  Cross-platform mobile experiences built with React Native for
                  iOS and Android.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">UI/UX Design</h3>
                <p className="mt-2 text-muted-foreground">
                  User-centered design that balances aesthetics with
                  usability to drive engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="bg-muted/50 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <p className="text-muted-foreground italic">
                  "LiteStack transformed our outdated platform into a modern,
                  blazing-fast experience. Our users love it."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, TechFlow</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <p className="text-muted-foreground italic">
                  "Professional, responsive, and incredibly talented. They
                  delivered our mobile app ahead of schedule."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Marcus Rivera</p>
                    <p className="text-sm text-muted-foreground">Founder, ScaleUp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-12 space-y-4">
              <details className="group rounded-lg border p-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  What is the typical project timeline?
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Most projects take 6–12 weeks from kickoff to launch, depending on
                  scope and complexity.
                </p>
              </details>
              <details className="group rounded-lg border p-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  Do you offer ongoing support?
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Yes, we provide maintenance and support packages to keep your
                  product running smoothly post-launch.
                </p>
              </details>
              <details className="group rounded-lg border p-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  How do you handle project communication?
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-muted-foreground">
                  We use weekly standups, shared project boards, and a dedicated
                  Slack channel for real-time updates.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
