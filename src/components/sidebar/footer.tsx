import { CircleHelp } from "lucide-react";

const SidebarFooter: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4 text-sm text-gray-500">
      <div className="flex items-center gap-2 w-full cursor-pointer">
        <CircleHelp className="stroke-1" />
        Help
      </div>
    </div>
  );
};

export default SidebarFooter;
