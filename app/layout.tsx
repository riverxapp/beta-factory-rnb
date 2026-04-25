import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <details className="relative">
            <summary
              className="inline-flex cursor-pointer list-none items-center justify-center rounded-md border border-input bg-background p-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </summary>

            <div className="absolute right-0 mt-2 w-56 rounded-md border bg-background shadow-lg">
              <nav className="flex flex-col space-y-2 p-2">
                <a
                  href="#services"
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  Contact
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LiteStack Technologies. All rights reserved.
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
