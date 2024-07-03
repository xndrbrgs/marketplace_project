"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectCategory from "../_components/Category/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import Tiptap from "../_components/TipTap/TipTap";
import { UploadDropzone } from "../../lib/uploadthing";
import { Button } from "@/components/ui/button";

function SellPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your golf clubs with ease</CardTitle>
            <CardDescription>
              Provide a detailed description of your product
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
              <Label>Product Name</Label>
              <Input
                type="text"
                placeholder="Example: Callaway Paradym Driver"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <Label>Product Category</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-4">
              <Label>Price</Label>
              <Input type="number" placeholder="Example: 599$" />
            </div>
            <div className="flex flex-col gap-y-4">
              <Label htmlFor="message">Item Description</Label>
              <Tiptap />
            </div>
            <div className="flex flex-col gap-y-4">
              <Label htmlFor="message">Item Images</Label>
              <UploadDropzone endpoint="imageUploader" />
            </div>
          </CardContent>
          <CardFooter className="mt-8">
            <Button>Submit Product</Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

export default SellPage;
