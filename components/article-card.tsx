import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArticleCard({
  img,
  title,
  excerpt,
  slug,
}: {
  img: string
  title: string
  excerpt: string
  slug: string
}) {
  return (
    <Card className="overflow-hidden">
      <Link
        href={`/articles/${slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
      >
        <div className="h-40 w-full overflow-hidden">
          <Image
            src={img || "/placeholder.svg"}
            alt={title}
            width={720}
            height={480}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">
          <Link href={`/articles/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
        <div className="mt-3">
          <Link href={`/articles/${slug}`} className="text-fuchsia-600 hover:underline">
            اقرأ المزيد
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
