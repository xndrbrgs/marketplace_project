import { GlobeIcon } from "lucide-react";
import { ReactNode } from "react";

interface categoryList {
  name: string;
  title: string;
  img: ReactNode;
  id: number;
}

export const categoryItems: categoryList[] = [
  {
    id: 0,
    name: "template",
    title: "Template",
    img: <GlobeIcon />,
  },
];
