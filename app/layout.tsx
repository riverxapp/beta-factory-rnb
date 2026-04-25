import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiteStack Technologies | Modern Digital Agency",
  description:
    "LiteStack Technologies is a modern digital agency specializing in web development, UI/UX design, and scalable cloud solutions. Build faster with LiteStack.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">LiteStack</span>
        </a>
        <nav className="hidden md:flex">
          <NavigationMenu>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </NavigationMenu>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#services" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="#testimonials" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
                <a href="#faq" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
                <a href="#contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-3">LiteStack Technologies</h3>
            <p className="text-sm text-muted-foreground">
              Modern digital agency specializing in web development, UI/UX design, and scalable cloud solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LiteStack Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}