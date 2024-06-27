import { Users } from "lucide-react";
import Link from "next/link";
import { Button } from "~/lib/ui/button";
import { cn } from "~/lib/utils";

const SidebarContent: React.FC = () => {
  return (
    <nav
      className={cn("flex flex-col text-stone-500", "gap-1 min-w-[240px] p-2")}
    >
      <div className="flex items-center space-x-4">
        <Link href="/suppliers">
          <div className="space-y-2">
            <Button className="w-full font-normal" variant="outline">
              <Users strokeWidth={1} /> &nbsp;Suppliers
            </Button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default SidebarContent;
