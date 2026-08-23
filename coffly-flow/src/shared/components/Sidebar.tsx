"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calculator,
  UtensilsCrossed,
  Users,
  MonitorPlay,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-card border-r transition-all duration-300 z-20 group relative",
        isExpanded ? "w-64" : "w-16 hover:w-64"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Brand */}
      <div className="h-16 flex items-center px-4 border-b shrink-0 gap-3 overflow-hidden">
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
          C
        </div>
        <div className={cn(
          "flex flex-col whitespace-nowrap transition-opacity duration-300",
          !isExpanded && "opacity-0 group-hover:opacity-100"
        )}>
          <span className="font-semibold text-sm">Coffly Flow</span>
          <span className="text-xs text-muted-foreground">Plataforma Empresarial</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        <NavItem
          href="/"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          isActive={pathname === "/"}
          isExpanded={isExpanded}
        />
        <NavItem
          href="/pos"
          icon={<Calculator size={20} />}
          label="POS"
          isActive={pathname?.startsWith("/pos")}
          isExpanded={isExpanded}
        />
        <NavItem
          href="/menu"
          icon={<UtensilsCrossed size={20} />}
          label="Menú"
          isActive={pathname?.startsWith("/menu")}
          isExpanded={isExpanded}
        />

        {/* Personal section */}
        <div className="pt-2">
          <button
            onClick={() => setIsPersonalOpen(!isPersonalOpen)}
            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-muted-foreground"><Users size={20} /></span>
              <span className={cn(
                "whitespace-nowrap font-medium text-sm transition-opacity duration-300",
                !isExpanded && "opacity-0 group-hover:opacity-100"
              )}>
                Personal
              </span>
            </div>
            {isExpanded && (
              <ChevronDown size={16} className={cn("transition-transform", isPersonalOpen ? "rotate-180" : "")} />
            )}
          </button>

          <div className={cn(
            "overflow-hidden transition-all duration-300",
            (isPersonalOpen && isExpanded) ? "max-h-40" : "max-h-0",
            !isExpanded && "group-hover:max-h-40"
          )}>
            <div className="pl-11 pr-2 py-2 space-y-2">
              <Link href="/personal/asistencia" className="block text-sm text-muted-foreground hover:text-foreground">
                Control de Asistencia
              </Link>
              <Link href="/personal/roles" className="block text-sm text-muted-foreground hover:text-foreground">
                Roles y Permisos
              </Link>
              <Link href="/personal/turnos" className="block text-sm text-muted-foreground hover:text-foreground">
                Gestión de Turnos
              </Link>
            </div>
          </div>
        </div>

        <NavItem
          href="/kds"
          icon={<MonitorPlay size={20} />}
          label="KDS"
          isActive={pathname?.startsWith("/kds")}
          isExpanded={isExpanded}
        />
      </div>

      {/* User profile */}
      <div className="p-4 border-t shrink-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-secondary text-foreground flex items-center justify-center font-bold shrink-0">
            JP
          </div>
          <div className={cn(
            "flex flex-col whitespace-nowrap transition-opacity duration-300",
            !isExpanded && "opacity-0 group-hover:opacity-100"
          )}>
            <span className="font-semibold text-sm">Jomar Peralta</span>
            <span className="text-xs text-muted-foreground">Administrador</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  href,
  icon,
  label,
  isActive,
  isExpanded
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isExpanded: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 p-2 rounded-lg transition-colors group/item",
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "text-foreground hover:bg-secondary"
      )}
    >
      <span className={cn(
        "shrink-0",
        isActive ? "text-primary" : "text-muted-foreground group-hover/item:text-foreground"
      )}>
        {icon}
      </span>
      <span className={cn(
        "whitespace-nowrap text-sm transition-opacity duration-300",
        !isExpanded && "opacity-0 group-hover:opacity-100"
      )}>
        {label}
      </span>
    </Link>
  );
}
