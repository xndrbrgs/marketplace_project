import { GlobeIcon } from "lucide-react";
import { ReactNode } from "react";

interface categoryList {
  name: string;
  title: string;
  id: number;
}

export const categoryItems: categoryList[] = [
  {
    id: 0,
    name: "driver",
    title: "Driver",
  },
  {
    id: 1,
    name: "woods",
    title: "Woods",
  },
  {
    id: 2,
    name: "hybrids",
    title: "Hybrids",
  },
  {
    id: 3,
    name: "irons",
    title: "Irons",
  },
  {
    id: 4,
    name: "wedges",
    title: "Wedges",
  },
  {
    id: 5,
    name: "putters",
    title: "Putters",
  },
];
