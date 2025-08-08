import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "أقفال الكويت | أقفال ذكية في الكويت",
  description:
    "أقفال الكويت: أقفال ذكية، قفل بصمة، قفل باب برقم سري، قفل واي فاي، وتركيب قفل فوري على يد فني اقفال محترف في جميع مناطق الكويت.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Tajawal font (as requested) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-dvh bg-background text-foreground antialiased"
        style={{
          fontFamily:
            "'Tajawal', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="smart-locks-kw-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
