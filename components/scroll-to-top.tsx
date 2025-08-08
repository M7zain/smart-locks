"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  useEffect(() => {
    // Ensure we always start at the very top when the page mounts
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
  }, [])
  return null
}
