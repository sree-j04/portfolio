/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (driven by CSS variables in index.css)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Earthy brand palette
        cream: "hsl(var(--cream))",
        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          deep: "hsl(var(--terracotta-deep))",
        },
        forest: {
          DEFAULT: "hsl(var(--forest))",
          soft: "hsl(var(--forest-soft))",
        },
        sage: "hsl(var(--sage))",
        teal: "hsl(var(--teal))",
        clay: "hsl(var(--clay))",
        walnut: "hsl(var(--walnut))",
        espresso: "hsl(var(--espresso))",
        mustard: "hsl(var(--mustard))",
        gold: "hsl(var(--gold))",

        // Legacy aliases — keeps old classes working
        ochre: "hsl(var(--sage))",
        charcoal: "hsl(var(--walnut))",
        line: "hsl(var(--border))",
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
