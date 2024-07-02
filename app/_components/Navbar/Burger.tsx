'use client'

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const golfClubLinks = [
  { name: "Drivers", link: "/drivers" },
  { name: "Woods", link: "/fairway-woods" },
  { name: "Hybrids", link: "/hybrids" },
  { name: "Irons", link: "/irons" },
  { name: "Wedges", link: "/wedges" },
  { name: "Putters", link: "/putters" },
];

function Burger() {
  const location = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="hover:scale-105">
          <MenuIcon />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-4 text-2xl mt-4">
          {golfClubLinks.map((link, i) => {
            return (
              <div key={i}>
                <Link
                  href={link.link}
                  className={cn(
                    location === link.link
                      ? "bg-muted"
                      : "hover:bg-muted hover:bg-opacity-75",
                    "group items-center flex px-2 font-medium rounded-md transition duration-150 transform"
                  )}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Burger;
