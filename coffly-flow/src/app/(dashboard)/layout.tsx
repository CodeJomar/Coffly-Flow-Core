import { ReactNode } from "react";
import { Sidebar } from "@/shared/components/Sidebar";
import { Header } from "@/shared/components/Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-secondary/30">
          {children}
        </main>
      </div>
    </div>
  );
}
