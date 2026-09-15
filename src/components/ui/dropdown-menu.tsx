"use client";

import * as React from "react";

interface DropdownMenuContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | undefined>(undefined);

const useDropdownMenu = () => {
  const context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenu context not found");
  }
  return context;
};

function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </DropdownMenuContext.Provider>
  );
}

function DropdownMenuTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const { open, setOpen } = useDropdownMenu();

  return React.cloneElement(children as React.ReactElement<any>, {
    onClick: (e: React.MouseEvent<any>) => {
      e.stopPropagation();
      setOpen(!open);
    },
  });
}

function DropdownMenuContent({
  children,
  align = "start",
}: {
  children: React.ReactNode;
  align?: "start" | "end";
}) {
  const { open, setOpen } = useDropdownMenu();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, setOpen]);

  return open ? (
    <div
      ref={ref}
      className={`absolute z-50 min-w-[8rem] bg-background border border-border rounded shadow-lg py-1 ${
        align === "end" ? "right-0" : "left-0"
      }`}
    >
      {children}
    </div>
  ) : null;
}

function DropdownMenuItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { setOpen } = useDropdownMenu();

  return (
    <button
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
      className="w-full text-left px-2 py-1.5 text-sm hover:bg-surface transition-colors flex items-center"
    >
      {children}
    </button>
  );
}

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
