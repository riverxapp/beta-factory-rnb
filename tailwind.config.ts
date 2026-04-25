Patch plan:
- Update `tailwind.config.ts` to include accent color definitions and ensure all custom CSS variable tokens are extended.

File changes:
```diff
--- a/tailwind.config.ts
+++ b/tailwind.config.ts
@@ -4,7 +4,7 @@ const config: Config = {
   darkMode: "class",
   content: [
     "./app/**/*.{ts,tsx}",
-    "./components/**/*.{ts,tsx}",
+    "./components/**/*.{ts,tsx}",
     "./content/**/*.{ts,tsx}",
     "./lib/**/*.{ts,tsx}",
   ],
@@ -46,6 +46,8 @@ const config: Config = {
       colors: {
         border: "hsl(var(--border))",
         input: "hsl(var(--input))",
+        ring: "hsl(var(--ring))",
+        background: "hsl(var(--background))",
+        foreground: "hsl(var(--foreground))",
+        primary: {
+          DEFAULT: "hsl(var(--primary))",
+          foreground: "hsl(var(--primary-foreground))",
+        },
+        secondary: {
+          DEFAULT: "hsl(var(--secondary))",
+          foreground: "hsl(var(--secondary-foreground))",
+        },
+        destructive: {
+          DEFAULT: "hsl(var(--destructive))",
+          foreground: "hsl(var(--destructive-foreground))",
+        },
+        muted: {
+          DEFAULT: "hsl(var(--muted))",
+          foreground: "hsl(var(--muted-foreground))",
+        },
+        accent: {
+          DEFAULT: "hsl(var(--accent))",
+          foreground: "hsl(var(--accent-foreground))",
+        },
+        popover: {
+          DEFAULT: "hsl(var(--popover))",
+          foreground: "hsl(var(--popover-foreground))",
+        },
+        card: {
+          DEFAULT: "hsl(var(--card))",
+          foreground: "hsl(var(--card-foreground))",
+        },
       },
       borderRadius: {
         lg: "var(--radius)",
```

Dependency changes:
- None.

Validation steps:
- Run `next build` to ensure no TypeScript or tailwind config errors.
- Verify that the page renders without style regressions.