"use client";

import { Moon, Sun, PanelLeftClose, ChevronRight, Eye } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b bg-card px-4 flex items-center justify-between shrink-0 sticky top-0 z-10">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <PanelLeftClose size={20} />
        </button>

        {/* Breadcrumbs (simplified) */}
        <div className="hidden sm:flex items-center text-sm font-medium">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
          <ChevronRight size={16} className="mx-1 text-muted-foreground" />
          <span className="text-foreground">
            {pathname === "/" ? "Resumen" : pathname.split('/').filter(Boolean).pop()?.replace(/^\w/, c => c.toUpperCase())}
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Theme toggle switch */}
        {mounted && (
          <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 rounded-full px-2 py-1">
            <Moon size={14} className={theme === 'dark' ? 'text-primary' : ''} />
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-8 h-4 rounded-full bg-border relative transition-colors"
            >
              <div className={cn(
                "absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform shadow-sm",
                theme === 'dark' ? "translate-x-4 bg-primary" : "translate-x-0.5"
              )} />
            </button>
            <Sun size={14} className={theme === 'light' ? 'text-primary' : ''} />
          </div>
        )}

        {/* Roles */}
        <div className="flex items-center bg-secondary/50 p-1 rounded-full text-xs font-medium">
          <button className="px-3 py-1 rounded-full text-muted-foreground hover:text-foreground transition-colors">
            Empleado
          </button>
          <button className="px-3 py-1 rounded-full text-muted-foreground hover:text-foreground transition-colors">
            Dueño
          </button>
          <button className="px-3 py-1 rounded-full bg-primary text-primary-foreground flex items-center gap-1 shadow-sm">
            <Eye size={12} />
            Administrador
          </button>
        </div>
      </div>
    </header>
  );
}
