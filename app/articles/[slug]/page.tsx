import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock3, Home } from 'lucide-react'
import { articles } from "@/lib/articles"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleCard } from "@/components/article-card"
import { ScrollToTop } from "@/components/scroll-to-top"

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | أقفال الكويت`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.cover }],
      type: "article",
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  // Choose up to 3 suggestions with similar tags; fallback to recent
  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const aScore = overlap(a.tags ?? [], article.tags ?? [])
      const bScore = overlap(b.tags ?? [], article.tags ?? [])
      return bScore - aScore
    })
    .slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main>
        <ScrollToTop />

        {/* Article hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -inset-x-32 -top-24 h-80 rounded-[100%] bg-gradient-to-tr from-fuchsia-600/25 via-emerald-400/15 to-transparent blur-3xl dark:from-fuchsia-600/30 dark:via-emerald-400/20" />
            <div className="absolute -bottom-32 -inset-x-20 h-80 rounded-[100%] bg-gradient-to-tl from-fuchsia-500/15 via-violet-500/15 to-transparent blur-3xl dark:from-fuchsia-500/20 dark:via-violet-500/20" />
          </div>

          <div className="container mx-auto max-w-5xl px-4 py-10 sm:py-14">
            <Link
              href="/#articles"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              aria-label="العودة إلى قائمة المقالات"
            >
              <Home className="h-4 w-4" />
              العودة إلى المقالات
            </Link>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{article.title}</h1>
            <p className="mt-2 max-w-3xl text-muted-foreground">{article.description}</p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("ar-KW", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-border">
              <Image
                src={article.cover || "/placeholder.svg"}
                alt={article.title}
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="container mx-auto max-w-5xl px-4 py-10 sm:py-12">
          {article.render()}
        </section>

        {/* Suggested articles */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-center text-xl font-bold md:text-2xl">مقالات مقترحة</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard
                  key={a.slug}
                  img={a.cover}
                  title={a.title}
                  excerpt={a.description}
                  slug={a.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function overlap(a: string[], b: string[]) {
  const set = new Set(a)
  let s = 0
  for (const t of b) if (set.has(t)) s++
  return s
}
