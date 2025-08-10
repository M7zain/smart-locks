import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LockCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
  alt: string;
}

export function LockCard({ title, desc, icon, img, alt }: LockCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="mb-3 overflow-hidden rounded-lg ring-1 ring-muted">
          <Image
            src={img || "/placeholder.svg"}
            alt={alt}
            width={320}
            height={240}
            className="h-40 w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          />
        </div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}