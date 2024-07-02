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

function SellPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your golf clubs with ease</CardTitle>
            <CardDescription>
              Provide a detailed description of your product
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <Label>Product Name</Label>
              <Input
                type="text"
                placeholder="Example: Callaway Paradym Driver"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Product Category</Label>
              <SelectCategory />
            </div>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

export default SellPage;
