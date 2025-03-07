/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors (modern and pleasing with red accents)
        "light-primary": "#ffffff",
        "light-secondary": "#f8f9fc",
        "light-accent": "#F0F4F8",
        "light-text": "#2d3748",
        "light-muted": "#718096",
        "light-border": "#e2e8f0",
        "light-red": "#fed7d7",
        "light-red-accent": "#f56565",

        // Dark mode colors (deeper and richer with red accents)
        "dark-primary": "#1a202c",
        "dark-secondary": "#2d3748",
        "dark-accent": "#4a5568",
        "dark-text": "#f7fafc",
        "dark-muted": "#a0aec0",
        "dark-border": "#4a5568",
        "dark-red": "#742a2a",
        "dark-red-accent": "#e53e3e",

        // Accent colors (updated with more red)
        "accent-1": "#3182ce", // blue
        "accent-2": "#d53f8c", // pink
        "accent-3": "#38a169", // green
        "accent-4": "#dd6b20", // orange
        "accent-5": "#e53e3e", // red
        "accent-6": "#805ad5", // purple

        // Priority colors
        "priority-low": "#38a169",
        "priority-medium": "#dd6b20",
        "priority-high": "#e53e3e",

        // Dynamic theme colors
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        "card-hover": "var(--color-card-hover)",
        "card-foreground": "var(--color-card-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
        "primary-red": "var(--color-primary-red)",
      },

      backgroundImage: {
        // Light mode gradients (updated with red)
        "gradient-primary-light": "linear-gradient(to right, #3182ce, #d53f8c)",
        "gradient-secondary-light":
          "linear-gradient(to right, #0ea5e9, #3182ce)",
        "gradient-accent-light": "linear-gradient(to right, #d53f8c, #805ad5)",
        "gradient-red-light": "linear-gradient(to right, #e53e3e, #d53f8c)",

        // Dark mode gradients (updated with red)
        "gradient-primary-dark": "linear-gradient(to right, #4299e1, #e53e3e)",
        "gradient-secondary-dark":
          "linear-gradient(to right, #2b6cb0, #4299e1)",
        "gradient-accent-dark": "linear-gradient(to right, #b83280, #6b46c1)",
        "gradient-red-dark": "linear-gradient(to right, #c53030, #b83280)",

        // Dynamic gradients
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-red": "var(--gradient-red)",
      },

      boxShadow: {
        "card-light":
          "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "card-dark":
          "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
        card: "var(--shadow-card)",
      },

      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },

      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
