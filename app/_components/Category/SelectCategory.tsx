"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { categoryItems } from "@/lib/categoryItems";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categoryItems.map((category) => {
        return (
          <div key={category.id} className="cursor-pointer gap-8">
            <Card className={cn(selectedCategory === category.name ? 'border-primary border-2' : 'border-2 border-primary/10' )} onClick={() => setSelectedCategory(category.name)}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default SelectCategory;
