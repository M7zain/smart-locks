import Image from "next/image"
import type { ReactNode } from "react"

export type Article = {
  slug: string
  title: string
  description: string
  cover: string
  date: string
  readTime: string
  tags?: string[]
  
  
  
  render: () => ReactNode
}

export const articles: Article[] = [
  {
    slug: "fingerprint-smart-lock-guide",
    title: "قفل بصمة: الأمان والسرعة في متناول يدك",
    description:
      "دليل شامل حول أقفال البصمة الذكية: كيف تعمل، ولماذا تعتبر خيارًا آمنًا وسريعًا لأبواب المنازل والمكاتب في الكويت.",
    cover: "/smart-lock-fingerprint-guide.png",
    date: "2025-08-01",
    readTime: "5 دقائق",
    tags: ["قفل بصمة", "أقفال ذكية", "سمارت لوك"],
    render: () => (
      <ArticleBody>
        <HeroParagraph>
          قفل بصمة يمنحك دخولًا فوريًا وآمنًا دون مفاتيح. ببساطة تلمس حساس البصمة، فيتعرف القفل على هويتك ويُفتح خلال أجزاء من الثانية.
        </HeroParagraph>

        <Section title="لماذا تختار قفل بصمة؟">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>سرعة فائقة: فتح الباب خلال أقل من ثانية.</li>
            <li>أمان متقدم: بصمات مُشفّرة محليًا ولا تُخزّن على السحابة.</li>
            <li>إدارة سهلة: إضافة/حذف بصمات للضيوف أو أفراد العائلة.</li>
            <li>لا حاجة للمفاتيح أو تذكّر الأرقام السرية.</li>
          </ul>
        </Section>

        <ImageBlock
          src="/fingerprint-smart-lock-closeup.png"
          alt="قفل بصمة ذكي على باب حديث"
          caption="تصميم أنيق مع حساس بصمة سريع الاستجابة"
        />

        <Section title="التركيب في الكويت">
          <p className="text-muted-foreground">
            فريقنا يوفّر تركيب قفل بصمة احترافي متوافق مع الأبواب الكويتية القياسية. نضبط موقع الحفر بدقة،
            ونبرمج البصمات الأساسية، ونشرح طريقة الإدارة عبر التطبيق.
          </p>
        </Section>

        <Section title="نصائح سريعة">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>سجل بصمات بديلة لليد الأخرى للطوارئ.</li>
            <li>فعّل كود ضيف مؤقت عند الحاجة لدخول مؤقت.</li>
            <li>راقب مستوى البطارية وتبديلها قبل النفاد.</li>
          </ul>
        </Section>

        <CTA />
      </ArticleBody>
    ),
  },
  {
    slug: "keypad-smart-lock-best-practices",
    title: "قفل باب برقم سري: أفضل الممارسات لاستخدام آمن",
    description:
      "تعرف على كيفية اختيار رمز قوي، وتفعيل ميزات الحماية في قفل باب برقم سري، مع نصائح الاستخدام الآمن.",
    cover: "/smart-lock-keypad-best-practices.png",
    date: "2025-08-02",
    readTime: "6 دقائق",
    tags: ["قفل باب برقم سري", "أقفال إلكترونية"],
    render: () => (
      <ArticleBody>
        <HeroParagraph>
          القفل الرقمي يمنحك مرونة عالية عبر أكواد دائمة وأخرى مؤقتة. إليك أفضل الممارسات لحماية الرمز السري
          والحفاظ على أمان منزلك.
        </HeroParagraph>

        <Section title="اختيار رمز قوي">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>اختر 6–8 أرقام غير متسلسلة وغير مكررة.</li>
            <li>تجنّب تواريخ الميلاد أو الأرقام المتوقعّة.</li>
            <li>بدّل الرمز كل 3–6 أشهر خصوصًا في الشقق المؤجرة.</li>
          </ul>
        </Section>

        <Section title="ميزات حماية مهمة">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>وضع إخفاء الرمز: أضف أرقامًا عشوائية قبل/بعد الرمز لمنع تتبع الأثر على الشاشة.</li>
            <li>حد محاولات الإدخال: قفل مؤقت بعد عدد محاولات فاشلة.</li>
            <li>أكواد مؤقتة للضيوف والعمّال مع تحديد وقت الاستخدام.</li>
          </ul>
        </Section>

        <ImageBlock
          src="/images/type-keypad.png"
          alt="لوحة لمس لقفل ذكي برقم سري"
          caption="لوحة لمس مضادة للتلطّخ مع إنارة خلفية"
        />

        <Section title="التركيب والدعم">
          <p className="text-muted-foreground">
            نوفّر تركيب قفل باب برقم سري مع ضبط الكالون واللسان وتثبيت اللوحة. كما نقدّم إرشادات إعداد الأكواد ومزامنة التطبيق.
          </p>
        </Section>

        <CTA />
      </ArticleBody>
    ),
  },
  {
    slug: "wifi-smart-lock-remote-and-alerts",
    title: "قفل باب واي فاي: تحكم عن بُعد وتنبيهات لحظية",
    description:
      "تحكم في بابك من أي مكان عبر الواي فاي: فتح عن بُعد، سجلات دخول، وتنبيهات فورية على هاتفك.",
    cover: "/images/article-wifi.png",
    date: "2025-08-03",
    readTime: "5 دقائق",
    tags: ["قفل واي فاي", "سمارت لوك", "أقفال ذكية"],
    render: () => (
      <ArticleBody>
        <HeroParagraph>
          مع قفل باب واي فاي يمكنك فتح الباب عن بُعد، إنشاء رموز مؤقتة، واستقبال إشعارات لحظية عند كل محاولة دخول.
        </HeroParagraph>

        <Section title="مزايا رئيسية">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>فتح/إقفال عن بعد من التطبيق.</li>
            <li>سجلات وصول تفصيلية مع التاريخ والوقت.</li>
            <li>تنبيهات فورية عند العبث أو المحاولات الفاشلة.</li>
            <li>تكامل مع المنزل الذكي (أليكسا/جوجل) في بعض الموديلات.</li>
          </ul>
        </Section>

        <ImageBlock
          src="/images/about-wifi.png"
          alt="قفل ذكي متصل بالواي فاي"
          caption="اتصال مستقر وتنبيهات إلى هاتفك أينما كنت"
        />

        <Section title="نصائح أمان">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>حدّث البرنامج الثابت Firmware بانتظام.</li>
            <li>فعّل إشعارات العبث وتتبّع السجلات.</li>
            <li>استخدم كلمات مرور قوية لشبكة الواي فاي.</li>
          </ul>
        </Section>

        <CTA />
      </ArticleBody>
    ),
  },
  {
    slug: "why-kuwait-smart-locks",
    title: "لماذا أقفال الكويت خيارك الأفضل؟",
    description:
      "جودة أصلية، تركيب قفل فوري في جميع المناطق، وضمان حقيقي مع دعم فني محترف — هذا ما يميز أقفال الكويت.",
    cover: "/smart-locks-kuwait.png",
    date: "2025-08-04",
    readTime: "4 دقائق",
    tags: ["أقفال الكويت", "تركيب قفل", "فني اقفال"],
    render: () => (
      <ArticleBody>
        <HeroParagraph>
          نوفّر لك أقفال أبواب حديثة بمواصفات عالمية، مع فني اقفال معتمد وتركيب سريع بنفس اليوم داخل الكويت.
        </HeroParagraph>

        <Section title="ماذا يميزنا؟">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>منتجات أصلية معتمدة وضمان حتى 24 شهرًا.</li>
            <li>تركيب قفل فوري في أغلب المناطق خلال ساعات.</li>
            <li>أسعار واضحة وقيمة مقابل المال.</li>
            <li>خدمة ما بعد البيع ودعم 24/7.</li>
          </ul>
        </Section>

        <ImageBlock
          src="/images/hero-smart-lock.png"
          alt="قفل ذكي عالي الجودة"
          caption="تشطيبات متينة وتصميم مستقبلي أنيق"
        />

        <CTA />
      </ArticleBody>
    ),
  },
  {
    slug: "electronic-locks-maintenance-guide",
    title: "دليل صيانة الأقفال الإلكترونية",
    description:
      "خطوات بسيطة للحفاظ على أداء القفل الذكي وإطالة عمره: البطاريات، التنظيف، التحديثات، والمعايرة.",
    cover: "/images/article-maintenance.png",
    date: "2025-08-05",
    readTime: "6 دقائق",
    tags: ["أقفال إلكترونية", "صيانة", "قفل ذكي"],
    render: () => (
      <ArticleBody>
        <HeroParagraph>
          الصيانة الدورية لقفلك الإلكتروني تمنحك أداءً ثابتًا وأمانًا أعلى. اتبع هذه الإرشادات للحفاظ على القفل لمدة أطول.
        </HeroParagraph>

        <Section title="البطاريات">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>استخدم بطاريات قلوية عالية الجودة.</li>
            <li>بدّل جميع البطاريات دفعة واحدة عند الانخفاض.</li>
            <li>لا تخلط بين أنواع أو علامات مختلفة.</li>
          </ul>
        </Section>

        <Section title="التنظيف والمعايرة">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>نظّف حساس البصمة والشاشة بقطعة ناعمة غير كاشطة.</li>
            <li>تجنب السوائل المباشرة، واستخدم رذاذًا خفيفًا على القماش فقط.</li>
            <li>تحقق من محاذاة اللسان والكالون لضمان سلاسة الإغلاق.</li>
          </ul>
        </Section>

        <ImageBlock
          src="/images/about-electronic.png"
          alt="مكونات قفل إلكتروني"
          caption="مكونات داخلية تحتاج إلى بيئة نظيفة ومحاذاة دقيقة"
        />

        <Section title="التحديثات والبرامج">
          <p className="text-muted-foreground">
            قم بتحديث التطبيق والبرنامج الثابت للقفل عند توفر تحديثات الأمان. يساهم ذلك في تحسين الأداء وسد الثغرات.
          </p>
        </Section>

        <CTA />
      </ArticleBody>
    ),
  },
  {
    slug: "smart-lock-security-tips",
    title: "نصائح أمان مهمة مع الأقفال الذكية",
    description:
      "استراتيجيات لرفع أمان منزلك مع الأقفال الذكية: إعدادات التطبيق، الإنذارات، الأكواد المؤقتة، والتكاملات الذكية.",
    cover: "/smart-lock-security.png",
    date: "2025-08-06",
    readTime: "5 دقائق",
    tags: ["أمن", "أقفال ذكية", "سمارت لوك"],
    render: () => (
      <ArticleBody>
        <HeroParagraph>
          الأقفال الذكية تُقدم خصائص أمان قوية — تعرّف على كيفية الاستفادة منها بالشكل الأمثل دون تعقيد.
        </HeroParagraph>

        <Section title="إعدادات أساسية">
          <ul className="list-disc pr-5 space-y-2 text-muted-foreground">
            <li>فعّل التنبيهات الفورية ومحاولات الإدخال الفاشلة.</li>
            <li>استخدم أكواد ضيوف مؤقتة بدل مشاركة الرمز الأساسي.</li>
            <li>راجع سجل الدخول بشكل دوري.</li>
          </ul>
        </Section>

        <Section title="تكاملات ذكية">
          <p className="text-muted-foreground">
            اربط القفل بالمنزل الذكي لتفعيل أتمتة الدخول والخروج، لكن احرص على كلمات مرور قوية وحسابات موثوقة فقط.
          </p>
        </Section>

        <ImageBlock
          src="/images/about-fingerprint.png"
          alt="تفاصيل أمان قفل بصمة"
          caption="صُنعت للحماية — ومع الإعداد الصحيح تحصل على أقصى فائدة"
        />

        <CTA />
      </ArticleBody>
    ),
  },
]

// Shared presentational helpers

function ArticleBody({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden md:overflow-visible">
      {/* background beams */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-80 w-[120vw] -translate-x-1/2 -rotate-12 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/10 to-transparent blur-3xl dark:from-fuchsia-500/25 dark:via-violet-500/20"
       aria-hidden="true" />
        <div className="absolute top-16 left-1/2 h-72 w-[110vw] -translate-x-1/2 rotate-12 bg-gradient-to-l from-fuchsia-600/15 via-purple-500/10 to-transparent blur-3xl dark:from-fuchsia-600/25 dark:via-purple-500/20"
       aria-hidden="true" />
      </div>
      <div className="prose prose-slate mx-auto max-w-3xl rtl:prose-ul:pr-5 prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground dark:prose-invert">
        {children}
      </div>
    </div>
  )
}





function HeroParagraph({ children }: { children: ReactNode }) {
  return <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{children}</p>
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="my-8">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function ImageBlock({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl ring-1 ring-border">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={1280}
        height={720}
        className="h-auto w-full object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
      />
      {caption ? (
        <figcaption className="px-4 py-2 text-center text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

function CTA() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <a
        href="tel:67727212"
        className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-fuchsia-500/50 hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
      >
        اتصل الآن للتركيب الفوري
      </a>
    </div>
  )
}
