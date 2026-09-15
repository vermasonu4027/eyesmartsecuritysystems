"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SheetContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextType | undefined>(undefined);

const useSheetContext = () => {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet context not found");
  }
  return context;
};

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Sheet({ open = false, onOpenChange, children }: SheetProps) {
  const [internalOpen, setInternalOpen] = React.useState(open);

  const isControlled = onOpenChange !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  return (
    <SheetContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

function SheetTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const { open, onOpenChange } = useSheetContext();

  return React.cloneElement(children as React.ReactElement<any>, {
    onClick: () => onOpenChange(!open),
  });
}

function SheetContent({
  children,
  side = "left",
}: {
  children: React.ReactNode;
  side?: "left" | "right";
}) {
  const { open, onOpenChange } = useSheetContext();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/80"
          onClick={() => onOpenChange(false)}
        />
      )}
      <div
        className={cn(
          "fixed z-50 bg-background shadow-lg transition-transform",
          side === "right"
            ? "right-0 top-0 h-full w-72 translate-x-full data-[open=true]:translate-x-0"
            : "left-0 top-0 h-full w-72 -translate-x-full data-[open=true]:translate-x-0",
          open && "translate-x-0"
        )}
        data-open={open}
      >
        {children}
      </div>
    </>
  );
}

export { Sheet, SheetTrigger, SheetContent };
