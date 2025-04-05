import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-5 right-5 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
}
