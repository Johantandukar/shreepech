"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "outline" | "ghost" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const splitLetters = (text: React.ReactNode) => {
  if (typeof text !== "string") return text;
  return text.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { contextSafe } = useGSAP({ scope: buttonRef });

  const onEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".text-top span", {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.015,
    }).to(
      ".text-bottom span",
      {
        yPercent: -100,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.015,
      },
      0,
    );
  });

  const onLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".text-top span", {
      yPercent: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.015,
    }).to(
      ".text-bottom span",
      {
        yPercent: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.015,
      },
      0,
    );
  });

  const baseStyles =
    "font-cabinet font-medium rounded-full w-fit overflow-hidden";
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-black text-white",
    secondary: "bg-white text-black",
    outline: "border border-black text-black",
    ghost: "text-black",
  };
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base 2xl:text-xl px-6 py-3",
    lg: "text-lg px-8 py-3",
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={twMerge(
        clsx(baseStyles, variantStyles[variant], sizeStyles[size], className),
      )}
      {...props}
    >
      <span className="relative block overflow-hidden leading-none">
        <span className="text-top block">{splitLetters(children)}</span>
        <span className="text-bottom absolute top-full left-0">
          {splitLetters(children)}
        </span>
      </span>
    </button>
  );
}

export function LinkButton({
  href,
  children,
  className,
  ...props
}: LinkButtonProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { contextSafe } = useGSAP({ scope: linkRef });

  const onEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".text-top span", {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.015,
    }).to(
      ".text-bottom span",
      {
        yPercent: -100,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.015,
      },
      0,
    );
  });

  const onLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".text-top span", {
      yPercent: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.015,
    }).to(
      ".text-bottom span",
      {
        yPercent: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.015,
      },
      0,
    );
  });

  return (
    <Link
      href={href}
      ref={linkRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={twMerge(clsx(className, "relative w-fit before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[0.1rem] before:w-0 before:bg-current before:transition-all before:duration-500 hover:before:w-full"))}
      {...props}
    >
      <span className="relative inline-block overflow-hidden whitespace-nowrap">
        <span className="text-top block w-full text-center">
          {splitLetters(children)}
        </span>
        <span className="text-bottom absolute inset-0 w-full text-center translate-y-full">
          {splitLetters(children)}
        </span>
      </span>
    </Link>
  );
}
