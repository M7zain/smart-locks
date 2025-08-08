import Link from "next/link"
import { Lock } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-fuchsia-600" aria-hidden />
              <span className="font-bold">أقفال الكويت</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              أقفال ذكية — أمان مستقبلي وراحة يومية. تركيب قفل على يد فني اقفال محترف.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">روابط سريعة</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link className="hover:underline" href="/#about">عن الأقفال</Link></li>
              <li><Link className="hover:underline" href="/#types">أنواع الأقفال</Link></li>
              <li><Link className="hover:underline" href="/#features">مميزاتنا</Link></li>
              <li><Link className="hover:underline" href="/#articles">مقالات</Link></li>
              <li><Link className="hover:underline" href="/#faq">الأسئلة الشائعة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">خدمات</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>قفل بصمة</li>
              <li>قفل باب برقم سري</li>
              <li>قفل باب واي فاي</li>
              <li>قفل سمارت (سمارت لوك)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">تواصل</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="tel:67727212" className="hover:underline">الهاتف: 67727212</Link></li>
              <li>الكويت – جميع المناطق</li>
              <li>يوميًا 9 صباحًا – 11 مساءً</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t pt-4 text-xs text-muted-foreground sm:flex-row">
          <p>© أقفال الكويت {new Date().getFullYear()}</p>
          <p className="text-[11px]">جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
