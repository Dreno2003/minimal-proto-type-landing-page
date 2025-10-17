import { cn } from "@/lib/utils";
import React from "react";

function ContainerWrapper({
  children,
  containerClass,
}: {
  children: React.ReactNode;
  containerClass?: string;
}) {
  return (
    <div className={cn("px-3    sm:px-6 max-w-[75rem] mx-auto", containerClass)}>
      {children}
    </div>
  );
}

export default ContainerWrapper;
