@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 227 80% 99%;
    --foreground: 228 50% 6%;
    --card: 0 0% 100%;
    --card-foreground: 228 50% 6%;
    --popover: 0 0% 100%;
    --popover-foreground: 228 50% 6%;
    --primary: 252 87% 64%;
    --primary-foreground: 0 0% 100%;
    --secondary: 252 30% 96%;
    --secondary-foreground: 228 50% 6%;
    --muted: 220 10% 94%;
    --muted-foreground: 220 9% 46%;
    --accent: 252 70% 96%;
    --accent-foreground: 252 87% 30%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --success: 142 71% 45%;
    --success-foreground: 0 0% 100%;
    --warning: 38 92% 50%;
    --warning-foreground: 0 0% 100%;
    --info: 199 89% 48%;
    --info-foreground: 0 0% 100%;
    --border: 252 10% 88%;
    --input: 252 10% 88%;
    --ring: 252 87% 64%;
    --radius: 0.75rem;
    --gradient-start: 252 87% 64%;
    --gradient-end: 217 91% 60%;
  }

  .dark {
    --background: 228 50% 4%;
    --foreground: 210 40% 98%;
    --card: 228 50% 6%;
    --card-foreground: 210 40% 98%;
    --popover: 228 50% 6%;
    --popover-foreground: 210 40% 98%;
    --primary: 252 87% 64%;
    --primary-foreground: 0 0% 100%;
    --secondary: 252 30% 14%;
    --secondary-foreground: 210 40% 98%;
    --muted: 228 25% 12%;
    --muted-foreground: 220 9% 65%;
    --accent: 252 70% 16%;
    --accent-foreground: 252 87% 80%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 0 0% 100%;
    --success: 142 71% 35%;
    --success-foreground: 0 0% 100%;
    --warning: 38 92% 40%;
    --warning-foreground: 0 0% 100%;
    --info: 199 89% 38%;
    --info-foreground: 0 0% 100%;
    --border: 252 10% 20%;
    --input: 252 10% 20%;
    --ring: 252 87% 64%;
    --radius: 0.75rem;
    --gradient-start: 252 87% 64%;
    --gradient-end: 217 91% 60%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  }

  ::selection {
    background-color: hsl(var(--primary) / 0.3);
    color: hsl(var(--primary));
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  .text-gradient {
    background: linear-gradient(
      to right,
      hsl(var(--gradient-start)),
      hsl(var(--gradient-end))
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bg-gradient-primary {
    background: linear-gradient(
      to right,
      hsl(var(--gradient-start)),
      hsl(var(--gradient-end))
    );
  }

  .bg-gradient-subtle {
    background: linear-gradient(
      to bottom right,
      hsl(var(--primary) / 0.05),
      hsl(var(--accent) / 0.05),
      transparent
    );
  }
}
