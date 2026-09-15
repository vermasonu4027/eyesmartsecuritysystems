"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <Globe className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {}}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>हिन्दी</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
