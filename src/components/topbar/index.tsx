"use client";

import { Search, Smile, Bell } from "lucide-react";
import { useSession } from "~/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "~/lib/ui/avatar";
import { Input } from "~/lib/ui/input";

const TopBar: React.FC = () => {
  const { user } = useSession();

  return (
    <div className="flex justify-between h-16 px-6 bg-white">
      <div className="px-8">
        <Input
          className="w-36 md:w-80"
          placeholder="Search"
          startIcon={<Search />}
        />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Smile size={16} />
        <Bell size={16} />
        <div className="h-1/2 w-0.5 bg-stone-300" />
        <div className="flex gap-1 md:gap-2 items-center text-sm">
          <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-white border border-black hidden md:block">{`${
              user?.firstName.charAt(0) || ""
            }${user?.lastName.charAt(0) || ""}`}</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-zinc-800 font-bold">{`${user?.firstName || ""} ${
              user?.lastName || ""
            }`}</p>
            <p>
              <span className="text-neutral-500">User:</span>{" "}
              {`${user?.firstName || ""} ${user?.lastName || ""}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
