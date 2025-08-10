import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
}

export function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
        <div className="mt-3 text-sm font-semibold">{name}</div>
      </CardContent>
    </Card>
  );
}
