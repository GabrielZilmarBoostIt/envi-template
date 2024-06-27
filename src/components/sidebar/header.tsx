"use client";

import { Minimize2 } from "lucide-react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { useSidebarStore } from "~/store/sidebar";

const SidebarHeader: React.FC = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <div className={cn("mb-2 p-4", "flex justify-between items-center")}>
      <div>
        <Image
          priority
          src="/assets/envi-logo-green.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-24 h-7"
          alt="Envi Logo"
        />
      </div>
      <Minimize2 size={24} className="cursor-pointer" onClick={toggleSidebar} />
    </div>
  );
};

export default SidebarHeader;
