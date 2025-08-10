import Link from "next/link"

export function CTAStatic() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <Link
        href="tel:67727212"
        className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-fuchsia-500/50 hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
      >
        اتصل الآن للتركيب الفوري
      </Link>
    </div>
  )
}
