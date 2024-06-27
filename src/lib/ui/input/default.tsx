import { forwardRef } from "react";
import { EnviLabel } from "~/lib/ui/label";
import { cn } from "~/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hiddenLabel?: boolean;
  subLabel?: React.ReactNode;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      hiddenLabel = false,
      subLabel,
      label = "",
      fullWidth = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-fit", { "w-full": fullWidth })}>
        <div className="flex items-center justify-between">
          {!hiddenLabel && <EnviLabel htmlFor={props.name}>{label}</EnviLabel>}
          {subLabel}
        </div>
        <div className="relative">
          <input
            type={type}
            className={cn(
              "flex rounded-md border border-input bg-background",
              "px-3 py-2",
              { "px-12": !!startIcon },
              "text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm",
              "file:font-medium placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              { "mt-2": !hiddenLabel },
              { "w-full": fullWidth },
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            {startIcon && <div>{startIcon}</div>}
          </div>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {endIcon && <div>{endIcon}</div>}
          </div>
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
