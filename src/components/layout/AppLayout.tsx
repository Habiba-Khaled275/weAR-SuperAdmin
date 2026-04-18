import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@/shared/components/SideBar";
import NavBar from "@/shared/components/NavBar";
import Footer from "@/shared/components/Footer";

export const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F2EE]">
      <div className="flex flex-1 relative">
        <SideBar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <main className="flex-1 flex flex-col min-w-0">
          <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
          
          <div className="p-6 md:p-10 flex-1">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};