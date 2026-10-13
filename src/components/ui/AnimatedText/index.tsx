"use client";

import React from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

type SupportedTags =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div";

type ElementType<T extends SupportedTags> = T extends "div"
  ? HTMLDivElement
  : T extends "span"
    ? HTMLSpanElement
    : T extends "p"
      ? HTMLParagraphElement
      : HTMLHeadingElement;

interface AnimatedTextProps<T extends SupportedTags> {
  as?: T;
  children: React.ReactNode;
  className?: ClassValue;
}

export default function AnimatedText<T extends SupportedTags = "p">({
  as,
  children,
  className,
  ...props
}: AnimatedTextProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = (as || "p") as SupportedTags;

  const ref = useTextReveal<ElementType<T>>();

  return (
    <Component
      // @ts-expect-error - React's internal Ref types for dynamic components
      // can be overly restrictive, but 'ref' is now strictly typed to the element.
      ref={ref}
      className={clsx("will-change-transform", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
