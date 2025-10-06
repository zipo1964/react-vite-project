import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const MOBILE_BREAKPOINT = 640;

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle viewport + enforce mobile dark lock
  useEffect(() => {
    const applyThemeForViewport = () => {
      if (typeof window === "undefined") return;
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (mobile) {
        // Always dark on mobile
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        return;
      }

      // Desktop/tablet: respect stored preference
      const storedTheme = localStorage.getItem("theme");
      const shouldBeDark = storedTheme === "dark";
      setIsDarkMode(shouldBeDark);
      document.documentElement.classList.toggle("dark", shouldBeDark);
    };

    applyThemeForViewport();
    window.addEventListener("resize", applyThemeForViewport);
    return () => window.removeEventListener("resize", applyThemeForViewport);
  }, []);

  const handleToggle = () => {
    if (isMobile) return; // Locked on mobile
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isMobile}
      aria-label={isMobile ? "Dark mode locked on mobile" : (isDarkMode ? "Activate light mode" : "Activate dark mode")}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
        "bg-secondary text-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring focus-visible:ring-ring/40",
        "border border-border",
        isMobile && "opacity-60 cursor-not-allowed pointer-events-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </button>
  );
};