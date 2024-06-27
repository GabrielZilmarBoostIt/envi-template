"use client";

import { Maximize2 } from "lucide-react";
import { useEffect } from "react";
import SidebarContent from "~/components/sidebar/content";
import SidebarFooter from "~/components/sidebar/footer";
import SidebarHeader from "~/components/sidebar/header";
import { cn } from "~/lib/utils";
import { useSidebarStore } from "~/store/sidebar";

const TABLET_SIZE = 768;

const Sidebar: React.FC = () => {
  const { isOpen, openSidebar, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    if (window.innerWidth >= TABLET_SIZE) {
      openSidebar();
    }
  }, [openSidebar]);

  return (
    <>
      <div
        className={cn("absolute left-0 top-0 p-4", {
          hidden: isOpen,
        })}
      >
        <Maximize2
          className="cursor-pointer w-4 md:w-6"
          onClick={toggleSidebar}
        />
      </div>
      <div
        className={cn(
          isOpen ? "flex flex-col" : "hidden",
          "absolute lg:relative h-full lg:h-100vh z-10 lg:z-0",
          "bg-clip-border bg-white text-gray-700",
          "w-full max-w-72 p-4",
          "shadow-xl shadow-blue-gray-900/5",
          "overflow-y-auto"
        )}
      >
        <SidebarHeader />
        <hr className="h-[0.4px] border-t-0 bg-stone-300 mb-6" />
        <div className="flex flex-col justify-between h-full">
          <SidebarContent />
          <SidebarFooter />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
