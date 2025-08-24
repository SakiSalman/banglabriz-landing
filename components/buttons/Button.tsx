"use client";
import React from "react";
import clsx from "clsx";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}
export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
  LINK = "link",
}

interface ButtonProps {
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  href?: string; // for link type
  target?: string; // for link type
  rel?: string; // for link type
}

const Button = ({
  variant = ButtonVariant.PRIMARY,
  type = ButtonType.BUTTON,
  disabled = false,
  onClick,
  children,
  className = "",
  href,
  target,
  rel,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:bg-primary/20 hover:scale-105 transition-all";

  const variantClasses: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    [ButtonVariant.SECONDARY]:
      "bg-secondary text-white hover:bg-secondary-light focus:ring-secondary",
    [ButtonVariant.TERTIARY]:
      "bg-gray-light text-secondary hover:bg-gray-300 focus:ring-gray-400",
  };

  const classes = clsx(baseClasses, variantClasses[variant], className);

  if (type === ButtonType.LINK && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      disabled={disabled}
      onClick={
        onClick ? (e) => { e.preventDefault(); onClick(); } : undefined
      }
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
