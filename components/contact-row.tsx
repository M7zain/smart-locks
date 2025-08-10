interface ContactRowProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export function ContactRow({ icon, title, children }: ContactRowProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1">{icon}</span>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
