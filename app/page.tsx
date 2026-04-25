import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center md:pb-32 md:pt-36 lg:pt-44">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
            Trusted by 30+ companies worldwide
          </Badge>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Build Better.{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ship Faster.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl">
            LiteStack Technologies crafts high-performance digital products for
            modern businesses. From concept to launch, we deliver measurable results.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-10 py-6 text-base font-semibold shadow-lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-base font-semibold">
              View Our Work
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              No credit card required
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Free consultation
            </span>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="border-y bg-muted/50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary md:text-5xl">50+</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary md:text-5xl">30+</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary md:text-5xl">4.9</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Avg. Client Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary md:text-5xl">99%</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Uptime Guarantee</p>
            </div>
          </div>
        </section>

        {/* Features/Benefits Section */}
        <section className="px-6 py-28 md:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Everything you need to scale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                End-to-end digital services designed to accelerate your growth. We combine
                strategy, design, and engineering to deliver exceptional results.
              </p>
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-3">
              <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary ring-1 ring-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Web Development</CardTitle>
                  <CardDescription className="text-base">
                    Fast, accessible, and scalable web applications using modern
                    frameworks like Next.js and React.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Server-side rendering
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      API integration
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 text-purple-600 ring-1 ring-purple-500/20 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Mobile Apps</CardTitle>
                  <CardDescription className="text-base">
                    Cross-platform mobile experiences built with React Native for
                    iOS and Android.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Push notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Offline support
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 text-pink-600 ring-1 ring-pink-500/20 dark:text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">UI/UX Design</CardTitle>
                  <CardDescription className="text-base">
                    User-centered design that balances aesthetics with
                    usability to drive engagement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      User research
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Prototyping
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gradient-to-b from-muted/30 to-muted/50 px-6 py-28 md:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our proven process ensures transparency, collaboration, and exceptional results.
              </p>
            </div>
            <div className="mt-20 grid gap-12 md:grid-cols-3">
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  1
                </div>
                <h3 className="mt-6 text-xl font-bold">Discovery</h3>
                <p className="mt-3 text-muted-foreground">
                  We dive deep into your business goals, target audience, and market landscape to define the strategy.
                </p>
              </div>
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  2
                </div>
                <h3 className="mt-6 text-xl font-bold">Design & Build</h3>
                <p className="mt-3 text-muted-foreground">
                  Our team designs and develops your product iteratively, with continuous feedback loops.
                </p>
              </div>
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  3
                </div>
                <h3 className="mt-6 text-xl font-bold">Launch & Scale</h3>
                <p className="mt-3 text-muted-foreground">
                  We deploy, monitor, and optimize your product for growth, providing ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-28 md:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from our clients about their experience working with us.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 bg-background p-6 shadow-sm">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;LiteStack transformed our outdated platform into a modern,
                  blazing-fast experience. Our users love it.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/40?u=sarah" alt="Sarah Chen" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, TechFlow</p>
                  </div>
                </div>
              </Card>
              <Card className="border-2 bg-background p-6 shadow-sm">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;Professional, responsive, and incredibly talented. They
                  delivered our mobile app ahead of schedule.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/40?u=marcus" alt="Marcus Rivera" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Marcus Rivera</p>
                    <p className="text-sm text-muted-foreground">Founder, ScaleUp</p>
                  </div>
                </div>
              </Card>
              <Card className="border-2 bg-background p-6 shadow-sm md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;Their UI/UX expertise completely elevated our product. User
                  engagement increased by 40% within the first month.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/40?u=emily" alt="Emily Torres" />
                    <AvatarFallback>ET</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Emily Torres</p>
                    <p className="text-sm text-muted-foreground">CPO, NexGen</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 px-6 py-28 md:py-36">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know before getting started.
              </p>
            </div>
            <div className="mt-16">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="rounded-lg border bg-background px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What is the typical project timeline?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most projects take 6–12 weeks from kickoff to launch, depending on
                    scope and complexity. We&apos;ll provide a detailed timeline during our
                    initial consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="rounded-lg border bg-background px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Do you offer ongoing support?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we provide maintenance and support packages to keep your
                    product running smoothly post-launch. We offer monthly and annual
                    plans tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="rounded-lg border bg-background px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    How do you handle project communication?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We use weekly standups, shared project boards, and a dedicated
                    Slack channel for real-time updates. You&apos;ll always know exactly
                    where your project stands.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="rounded-lg border bg-background px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What is your pricing model?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer project-based and retainer pricing depending on your needs.
                    Every engagement begins with a free consultation to scope the work
                    and provide a transparent estimate.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative px-6 py-28 md:py-36">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Ready to build something amazing?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Let&apos;s discuss your project over a free, no-obligation consultation.
              We&apos;ll help you turn your vision into reality.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="px-12 py-6 text-base font-semibold shadow-lg">
                Get Your Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-base font-semibold">
                View Our Portfolio
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              No commitment required. Start with a 30-minute discovery call.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold">LiteStack</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Modern digital agency helping businesses build better products and ship faster.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} LiteStack Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}