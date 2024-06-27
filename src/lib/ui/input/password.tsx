"use client";

import { Dot, EyeIcon, EyeOffIcon, Lock } from "lucide-react";
import Link from "next/link";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { buttonVariants } from "../button";
import { Input, InputProps } from "../input";
import { cn } from "~/lib/utils";

interface PasswordInputProps extends InputProps {
  forgotPassword?: boolean;
  displayRuleChecker?: boolean;
}

type PasswordRuleState = {
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
  hasMinLength: boolean;
};

const isString = (value: unknown): boolean => {
  return typeof value === "string" || value instanceof String;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      label = "Password",
      placeholder = "Password",
      hiddenLabel,
      forgotPassword = false,
      displayRuleChecker = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordRuleCheck, setPasswordRuleCheck] =
      useState<PasswordRuleState>({
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecial: false,
        hasMinLength: false,
      });

    const handleShowPasswordClick = useCallback(() => {
      setShowPassword(!showPassword);
    }, [showPassword, setShowPassword]);

    const showPasswordIcon = useMemo(() => {
      if (showPassword) {
        return (
          <EyeIcon
            className="cursor-pointer"
            onClick={handleShowPasswordClick}
          />
        );
      }

      return (
        <EyeOffIcon
          className="cursor-pointer"
          onClick={handleShowPasswordClick}
        />
      );
    }, [showPassword, handleShowPasswordClick]);

    const subLabel = useMemo(() => {
      if (!forgotPassword) {
        return null;
      }

      return (
        <div className="text-sm">
          <Link
            href="/forgot-password"
            className={buttonVariants({ variant: "link" })}
          >
            Forgot Password?
          </Link>
        </div>
      );
    }, [forgotPassword]);

    useEffect(() => {
      if (!displayRuleChecker || !isString(props.value)) return;

      const passwordValue = props.value as string;
      setPasswordRuleCheck({
        hasLowercase: /[a-z]/.test(passwordValue),
        hasUppercase: /[A-Z]/.test(passwordValue),
        hasNumber: /[0-9]/.test(passwordValue),
        hasSpecial: /[^\w\s.]|_|\./.test(passwordValue),
        hasMinLength: passwordValue.length >= 8,
      });
    }, [displayRuleChecker, props.value]);

    return (
      <div className={cn(className)}>
        <div>
          <Input
            type={showPassword ? "text" : "password"}
            label={label}
            placeholder={placeholder}
            startIcon={<Lock className="stroke-primary" />}
            endIcon={showPasswordIcon}
            subLabel={subLabel}
            ref={ref}
            {...props}
          />
          {displayRuleChecker && (
            <div className="mt-1 grid grid-cols-2">
              <ul>
                <li
                  className={cn("flex items-center", {
                    ["text-zinc-500"]: passwordRuleCheck.hasLowercase,
                  })}
                >
                  <Dot className="stroke-primary" />
                  <p className="text-xs">One lowercase character</p>
                </li>
                <li
                  className={cn("flex items-center", {
                    ["text-zinc-500"]: passwordRuleCheck.hasUppercase,
                  })}
                >
                  <Dot className="stroke-primary" />
                  <p className="text-xs">One uppercase character</p>
                </li>
                <li
                  className={cn("flex items-center", {
                    ["text-zinc-500"]: passwordRuleCheck.hasNumber,
                  })}
                >
                  <Dot className="stroke-primary" />
                  <p className="text-xs">One number</p>
                </li>
              </ul>
              <ul>
                <li
                  className={cn("flex items-center", {
                    ["text-zinc-500"]: passwordRuleCheck.hasSpecial,
                  })}
                >
                  <Dot className="stroke-primary" />
                  <p className="text-xs">One special character</p>
                </li>
                <li
                  className={cn("flex items-center", {
                    ["text-zinc-500"]: passwordRuleCheck.hasMinLength,
                  })}
                >
                  <Dot className="stroke-primary" />
                  <p className="text-xs">8 character minimum</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
