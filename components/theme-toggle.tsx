"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme === "dark" : false

  function applyThemeWithFade(next: "light" | "dark") {
    const root = document.documentElement
    // Add a temporary class that enables transitions for colors/backgrounds
    root.classList.add("theme-fade")
    setTheme(next)
    window.setTimeout(() => {
      root.classList.remove("theme-fade")
    }, 300)
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      aria-label={isDark ? "تبديل إلى الوضع الفاتح" : "تبديل إلى الوضع الداكن"}
      aria-pressed={isDark}
      onClick={() => applyThemeWithFade(isDark ? "light" : "dark")}
      className="rounded-full"
      title={isDark ? "الوضع الداكن نشط" : "الوضع الفاتح نشط"}
    >
      {!mounted ? <span className="sr-only">تبديل المظهر</span> : isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
