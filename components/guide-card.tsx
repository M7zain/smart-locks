import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GuideCardProps {
  title: string;
  text: string;
}

export function GuideCard({ title, text }: GuideCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
