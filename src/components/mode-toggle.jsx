import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import clsx from "clsx";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-3">
      <Sun
        onClick={() => setTheme("light")}
        className={clsx(
          "h-5 w-5 cursor-pointer transition",
          theme === "light"
            ? "text-yellow-400"
            : "text-muted-foreground hover:text-foreground"
        )}
      />

      <Moon
        onClick={() => setTheme("dark")}
        className={clsx(
          "h-5 w-5 cursor-pointer transition",
          theme === "dark"
            ? "text-blue-400"
            : "text-muted-foreground hover:text-foreground"
        )}
      />
    </div>
  );
}
