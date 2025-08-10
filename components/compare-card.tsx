import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface CompareCardProps {
  title: string;
  points: string[];
  note: string;
}

export function CompareCard({ title, points, note }: CompareCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="space-y-1 text-sm text-muted-foreground">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2 text-xs text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  );
}
