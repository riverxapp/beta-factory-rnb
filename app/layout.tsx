--- app/layout.tsx
+++ app/layout.tsx
@@ -1,13 +1,13 @@
 import type { Metadata } from "next";
 import { Inter } from "next/font/google";
 import { ThemeProvider } from "@/components/theme/theme-provider";
-import { NavigationMenu } from "@/components/ui/navigation-menu";
-import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
-import { Button } from "@/components/ui/button";
 import "./globals.css";
 
 const inter = Inter({ subsets: ["latin"] });
 
 export const metadata: Metadata = {
   title: "LiteStack Technologies | Modern Digital Agency",
   description:
     "LiteStack Technologies is a modern digital agency specializing in web development, UI/UX design, and scalable cloud solutions. Build faster with LiteStack.",
 
 function Header() {
   return (
     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
       <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
         <a href="/" className="flex items-center space-x-2">
           <span className="text-xl font-bold">LiteStack</span>
         </a>
         <nav className="hidden md:flex">
-          <NavigationMenu>
-            <ul className="flex space-x-4">
-              <li><a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
-              <li><a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a></li>
-              <li><a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
-              <li><a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
-            </ul>
-          </NavigationMenu>
+          <ul className="flex space-x-4">
+            <li>
+              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
+                Services
+              </a>
+            </li>
+            <li>
+              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
+                Testimonials
+              </a>
+            </li>
+            <li>
+              <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
+                FAQ
+              </a>
+            </li>
+            <li>
+              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
+                Contact
+              </a>
+            </li>
+          </ul>
         </nav>
         <div className="md:hidden">
-          <Sheet>
-            <SheetTrigger asChild>
-              <Button variant="outline" size="icon">
+          <div className="relative" id="mobile-menu">
+            <button
+              className="inline-flex items-center justify-center rounded-md border border-input bg-background p-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
+              onClick={() => {
+                const menu = document.getElementById('mobile-menu-content');
+                if (menu) {
+                  menu.classList.toggle('hidden');
+                }
+              }}
+              aria-label="Toggle navigation menu"
+            >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
@@ -45,20 +63,27 @@
               >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
               <span className="sr-only">Toggle navigation menu</span>
-              </Button>
-            </SheetTrigger>
-            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
-              <nav className="flex flex-col space-y-4 mt-8">
-                <a href="#services" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
-                <a href="#testimonials" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
-                <a href="#faq" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
-                <a href="#contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
-              </nav>
-            </SheetContent>
-          </Sheet>
+            </button>
+            <div
+              id="mobile-menu-content"
+              className="hidden absolute right-0 mt-2 w-56 rounded-md border bg-background shadow-lg"
+            >
+              <div className="flex flex-col p-2 space-y-2">
+                <a href="#services" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">Services</a>
+                <a href="#testimonials" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">Testimonials</a>
+                <a href="#faq" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">FAQ</a>
+                <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">Contact</a>
+              </div>
+            </div>
+          </div>
         </div>
       </div>
     </header>
   );
 }
 
 function Footer() {
