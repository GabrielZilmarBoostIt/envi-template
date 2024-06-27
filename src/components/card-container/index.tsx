import { cn } from "~/lib/utils";

type CardContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("flex h-full bg-white overflow-y-auto", "m-2 md:m-4")}>
      <div className={cn("flex w-full bg-white", className)}>{children}</div>
    </div>
  );
};

export default CardContainer;
