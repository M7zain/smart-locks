interface FeatureCardProps {
  title: string;
  text: string;
  children: React.ReactNode;
}

export function FeatureCard({ title, text, children }: FeatureCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {children}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}