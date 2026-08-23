export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col gap-4 sm:gap-6">
      {/* Neumorphic Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 h-full min-h-[500px]">

        {/* Main Content Area (Left Top) */}
        <div className="md:col-span-2 flex flex-col gap-4 sm:gap-6">
          <div className="flex-1 bg-card rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.5),-5px_-5px_15px_rgba(255,255,255,0.05)] border border-border/50 transition-all">
            {/* Content for main chart/table */}
          </div>

          {/* Two smaller cards below main content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-48 shrink-0">
            <div className="bg-card rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.5),-5px_-5px_15px_rgba(255,255,255,0.05)] border border-border/50 transition-all">
              {/* Content for bottom left card */}
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.5),-5px_-5px_15px_rgba(255,255,255,0.05)] border border-border/50 transition-all">
              {/* Content for bottom right card */}
            </div>
          </div>
        </div>

        {/* Side Panel (Right) */}
        <div className="bg-card rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.5),-5px_-5px_15px_rgba(255,255,255,0.05)] border border-border/50 h-full transition-all">
          {/* Content for right panel */}
        </div>

      </div>
    </div>
  );
}
