import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className="flex gap-3">
        <Sun
          onClick={() => setTheme("light")}
          className="h-[1.2rem] w-[1.2rem] transition-all "
        />
        <Moon
          onClick={() => setTheme("dark")}
          className="h-[1.2rem] w-[1.2rem] transition-all"
        />
      </div>
    </div>
  );
}
