'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const golfClubLinks = [
    { name: "Drivers", link: "/drivers" },
    { name: "Woods", link: "/fairway-woods" },
    { name: "Hybrids", link: "/hybrids" },
    { name: "Irons", link: "/irons" },
    { name: "Wedges", link: "/wedges" },
    { name: "Putters", link: "/putters" },
  ];
  
function NavLinks() {
    const location = usePathname();
  return (
    <>
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
    </>
  )
}

export default NavLinks