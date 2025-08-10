interface FeatureItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function FeatureItem({ icon, children }: FeatureItemProps) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1">{icon}</span>
      <span>{children}</span>
    </li>
  );
}