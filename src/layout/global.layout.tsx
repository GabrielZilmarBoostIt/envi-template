import React from "react";
import CardContainer from "~/components/card-container";
import Sidebar from "~/components/sidebar";
import TopBar from "~/components/topbar";

type GlobalLayoutProps = {
  children: React.ReactNode;
  childrenClassName?: string;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  childrenClassName,
}: GlobalLayoutProps) => {
  return (
    <div className="flex h-screen bg-neutral-100">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopBar />
        <CardContainer className={childrenClassName}>{children}</CardContainer>
      </div>
    </div>
  );
};

export default GlobalLayout;
