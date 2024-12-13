import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function MaxWidthDiv({ children, className }: Props) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-3 sm:px-10", className)}>
      {children}
    </div>
  );
}

export default MaxWidthDiv;
