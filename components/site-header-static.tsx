import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock } from 'lucide-react'
import { ThemeToggleStatic } from "@/components/theme-toggle-static"

export function SiteHeaderStatic() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center gap-3">
          <Link href="/#top" className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-fuchsia-600" aria-hidden />
            <span className="text-lg font-bold">أقفال الكويت</span>
          </Link>

          <nav aria-label="التنقل الرئيسي" className="ms-auto hidden md:flex items-center gap-4">
            <HeaderLink href="/#about">عن الأقفال</HeaderLink>
            <HeaderLink href="/#types">أنواع الأقفال</HeaderLink>
            <HeaderLink href="/#features">مميزاتنا</HeaderLink>
            <HeaderLink href="/#install">التركيب</HeaderLink>
            <HeaderLink href="/#compare">المقارنة</HeaderLink>
            <HeaderLink href="/#guide">دليل الاختيار</HeaderLink>
            <HeaderLink href="/#articles">مقالات</HeaderLink>
            <HeaderLink href="/#faq">الأسئلة الشائعة</HeaderLink>
            <HeaderLink href="/#contact">اتصل بنا</HeaderLink>
            <div className="ms-2 flex items-center gap-2">
              <ThemeToggleStatic />
              <Button className="bg-fuchsia-600 hover:bg-fuchsia-700" aria-label="اتصل الآن">
                <Link href="tel:67727212" className="text-white">
                  اتصل الآن
                </Link>
              </Button>
            </div>
          </nav>

          <div className="ms-auto flex items-center gap-2 md:hidden">
            <ThemeToggleStatic />
            <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700" aria-label="اتصل الآن">
              <Link href="tel:67727212" className="text-white">
                اتصل
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
      {children}
    </Link>
  )
}
