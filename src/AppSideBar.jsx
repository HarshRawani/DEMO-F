import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function AppSideBar() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 p-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Welcome</h1>
          <p className="text-gray-500">Your main content goes here.</p>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default AppSideBar;
