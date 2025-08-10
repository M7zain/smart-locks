import { Button } from "@/components/ui/button"
import { Sun } from 'lucide-react'

export function ThemeToggleStatic() {
  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      aria-label="تبديل المظهر"
      className="rounded-full"
      title="تبديل المظهر"
    >
      <Sun className="h-4 w-4" />
    </Button>
  )
}
