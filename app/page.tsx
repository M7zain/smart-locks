"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Fingerprint, Wifi, KeyboardIcon as Keypad, Smartphone, Shield, Lock, PhoneCall, Clock, MapPin, BadgeCheck, Star } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { ArticleCard } from "@/components/article-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Header */}
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden ">
          {/* Purple light beams */}
          <div
            aria-hidden="true"
            className="absolute -top-24 right-1/4 h-80 w-[120%] -rotate-12 bg-gradient-to-r from-fuchsia-500/25 via-violet-500/15 to-transparent blur-3xl dark:from-fuchsia-500/30 dark:via-violet-500/25 transition-all"
          />
          <div
            aria-hidden="true"
            className="absolute top-16 left-1/3 h-72 w-[110%] rotate-12 bg-gradient-to-l from-fuchsia-600/20 via-purple-500/15 to-transparent blur-3xl dark:from-fuchsia-600/30 dark:via-purple-500/25 transition-all"
          />

          {/* Blurred circles (glows) */}
          <div
            aria-hidden="true"
            className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-2xl dark:bg-fuchsia-500/30"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/25"
          />

          <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24 relative isolate overflow-hidden">
            {/* Theme-reactive base gradient inside the container */}
            <div aria-hidden="true" className="absolute inset-0 z-0 transition-colors duration-300" />

            <div className="relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-16">
              {/* Theme-aware text */}
              <div className="text-foreground">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs text-foreground/80 backdrop-blur transition-colors">
                  <BadgeCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <span>أقفال أبواب حديثة · سمارت لوك</span>
                </div>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl transition-colors">
                  أقفال الكويت — أقفال ذكية لأمان مستقبلي
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg transition-colors">
                  اختر قفل ذكي من مجموعتنا المتميزة من الأقفال الإلكترونية: قفل بصمة، قفل باب برقم سري، قفل باب واي فاي،
                  وقفل سمارت متوافق مع الهاتف. سمارت لوك بأعلى درجات الأمان وسهولة الاستخدام، مع تركيب قفل فوري على يد فني اقفال معتمد في الكويت.
                </p>
                <ul className="mt-6 grid gap-3 text-foreground">
                  <FeatureItem icon={<Fingerprint className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />}>فتح بالبصمة والبطاقة والتطبيق</FeatureItem>
                  <FeatureItem icon={<Keypad className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-300" />}>قفل باب برقم سري مع وضع حماية للرمز</FeatureItem>
                  <FeatureItem icon={<Wifi className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />}>تحكم عبر الواي فاي والتنبيهات الفورية</FeatureItem>
                  <FeatureItem icon={<Shield className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-300" />}>تشفير متقدم وإنذارات عبث ومحاولات دخول</FeatureItem>
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                    <Link href="tel:67727212" aria-label="اتصل الآن للتركيب الفوري">اتصل الآن للتركيب الفوري</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#types">تصفح أنواع الأقفال</Link>
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground transition-colors">خدمة سريعة داخل جميع مناطق الكويت · ضمان حقيقي على الأقفال</p>
              </div>

              <div className="relative">
                <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border transition-colors">
                  <Image
                    src="/images/hero-smart-lock.png"
                    alt="قفل ذكي حديث يجمع بين بصمة ورقم سري وواي فاي"
                    width={960}
                    height={720}
                    className="h-full w-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-fuchsia-600/10 dark:from-slate-950/30 dark:via-transparent dark:to-fuchsia-600/10 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="prose prose-slate max-w-none text-right rtl:prose-ul:pr-5">
              <h2 className="text-2xl font-bold md:text-3xl">عن الأقفال الذكية في الكويت</h2>
              <p className="mt-3 text-muted-foreground">
                الأقفال الذكية هي الجيل الجديد من أقفال الأبواب الحديثة، وتجمع بين التصميم الأنيق والتقنيات الإلكترونية لتحكم
                كامل في الدخول. مع أقفال الكويت، تحصل على أقفال ذكية سهلة الإدارة عبر التطبيق، وتدعم القفل بالبصمة والرقم
                السري والبطاقة والبلوتوث والواي فاي، مما يجعل حياتك أكثر أمانًا وراحة.
              </p>
              <p className="mt-3 text-muted-foreground">
                سواء كنت تبحث عن قفل ذكي للباب الرئيسي، أقفال إلكترونية للمكتب، أو سمارت لوك للشقق المؤجرة، نقدم حلولًا
                متكاملة من اختيار المنتج وحتى تركيب قفل احترافي على يد فني اقفال متخصص.
              </p>
              <ul className="mt-4 list-disc text-muted-foreground">
                <li>توافق مع معظم أبواب المنازل والمكاتب</li>
                <li>تطبيق ذكي لإدارة المستخدمين وسجل الدخول</li>
                <li>بطاريات طويلة العمر وتنبيهات انخفاض الشحن</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/images/about-fingerprint.png"
                alt="قفل بصمة ذكي"
                width={480}
                height={360}
                className="h-full w-full rounded-xl object-cover ring-1 ring-muted"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
              <Image
                src="/bluetooth-smart-lock-pairing.png"
                alt="قفل باب برقم سري"
                width={480}
                height={360}
                className="h-full w-full rounded-xl object-cover ring-1 ring-muted"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
              <Image
                src="/images/about-wifi.png"
                alt="قفل باب واي فاي"
                width={480}
                height={360}
                className="h-full w-full rounded-xl object-cover ring-1 ring-muted"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
              <Image
                src="/fingerprint-smart-lock-closeup.png"
                alt="أقفال إلكترونية حديثة"
                width={480}
                height={360}
                className="h-full w-full rounded-xl object-cover ring-1 ring-muted"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section id="types" className="bg-muted/50 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-center text-2xl font-bold md:text-3xl">أنواع الأقفال الذكية</h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-muted-foreground">
              اختر من تشكيلة أقفال أبواب حديثة: قفل بصمة، قفل باب برقم سري، قفل باب واي فاي، وقفل سمارت متصل بالتطبيق.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <LockCard
                title="قفل بصمة"
                desc="فتح فوري بالبصمة مع إدارة حتى 100 بصمة، مثالي للعائلة والمكتب."
                icon={<Fingerprint className="h-6 w-6 text-emerald-600" aria-hidden />}
                img="/fingerprint-smart-lock-closeup.png"
                alt="قفل بصمة"
              />
              <LockCard
                title="قفل باب برقم سري"
                desc="لوحة لمس مضادة للتلطخ مع وضع إخفاء الرمز وحماية ضد التخمين."
                icon={<Keypad className="h-6 w-6 text-fuchsia-600" aria-hidden />}
                img="/images/type-keypad.png"
                alt="قفل باب برقم سري"
              />
              <LockCard
                title="قفل باب واي فاي"
                desc="تحكم كامل عبر التطبيق والتنبيهات الفورية عن بعد عبر الواي فاي."
                icon={<Wifi className="h-6 w-6 text-emerald-600" aria-hidden />}
                img="/images/type-wifi.png"
                alt="قفل واي فاي"
              />
              <LockCard
                title="قفل سمارت"
                desc="سمارت لوك متكامل يدعم الهاتف والبطاقة والبصمة ومفاتيح الطوارئ."
                icon={<Smartphone className="h-6 w-6 text-fuchsia-600" aria-hidden />}
                img="/bluetooth-smart-lock-pairing.png"
                alt="قفل سمارت"
              />
            </div>
          </div>
        </section>

        {/* WHY US / FEATURES */}
        <section id="features" className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">لماذا تعتبر أقفالنا الأفضل في الكويت؟</h2>
            <p className="mt-2 text-muted-foreground">
              نوفّر أقفال ذكية أصلية مع ضمان وتركيب قفل احترافي وسريع داخل جميع المناطق على يد فني اقفال معتمد.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="تركيب فوري بنفس اليوم" text="نصل إليك خلال ساعات مع فني اقفال محترف ومعدات كاملة.">
              <Clock className="h-6 w-6 text-emerald-600" aria-hidden />
            </FeatureCard>
            <FeatureCard title="ضمان وجودة أصلية" text="أقفال إلكترونية معتمدة بقطع أصلية وضمان يصل حتى 24 شهرًا.">
              <Shield className="h-6 w-6 text-fuchsia-600" aria-hidden />
            </FeatureCard>
            <FeatureCard title="دعم 24/7" text="خدمة عملاء على مدار الساعة للمساعدة والطوارئ.">
              <PhoneCall className="h-6 w-6 text-emerald-600" aria-hidden />
            </FeatureCard>
            <FeatureCard title="أمان متقدم" text="تشفير، سجل دخول، إنذارات عبث، وأوضاع ضيف مؤقتة.">
              <Lock className="h-6 w-6 text-fuchsia-600" aria-hidden />
            </FeatureCard>
            <FeatureCard title="توافق واسع" text="توافق مع أبواب المنازل والمكاتب والفنادق والشقق المؤجرة.">
              <BadgeCheck className="h-6 w-6 text-emerald-600" aria-hidden />
            </FeatureCard>
            <FeatureCard title="سعر عادل" text="أفضل قيمة مقابل المال مع عروض موسمية وخصومات.">
              <Check className="h-6 w-6 text-fuchsia-600" aria-hidden />
            </FeatureCard>
          </div>
        </section>

        {/* INSTALLATION PROCESS */}
        <section id="install" className="bg-muted/50 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">كيفية تركيب الأقفال الذكية</h2>
              <p className="mt-2 text-muted-foreground">
                عملية تركيب قفل ذكي بسيطة وسريعة. فريقنا يضمن الملاءمة المثالية والبرمجة الصحيحة خطوة بخطوة.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-3xl">
              <ol className="relative space-y-8 border-s ps-6">
                <li className="group">
                  <StepDot />
                  <h3 className="font-semibold">استشارة سريعة</h3>
                  <p className="text-muted-foreground">نحدّد نوع القفل المناسب: قفل بصمة، قفل باب برقم سري، أو قفل باب واي فاي.</p>
                </li>
                <li className="group">
                  <StepDot />
                  <h3 className="font-semibold">زيارة وتركيب قفل</h3>
                  <p className="text-muted-foreground">يصل فني اقفال مزوّد بكل الأدوات لقياس وضبط مكان القفل بدقة.</p>
                </li>
                <li className="group">
                  <StepDot />
                  <h3 className="font-semibold">برمجة وإعداد</h3>
                  <p className="text-muted-foreground">تسجيل البصمات، إعداد الرقم السري، ربط التطبيق والواي فاي إن وجد.</p>
                </li>
                <li className="group">
                  <StepDot />
                  <h3 className="font-semibold">اختبار وتسليم</h3>
                  <p className="text-muted-foreground">اختبار شامل وتدريب سريع على الاستخدام مع تقديم الضمان.</p>
                </li>
              </ol>
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                <Link href="tel:67727212">احجز فني أقفال الآن</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* COMPARE */}
        <section id="compare" className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">المقارنة بين أنواع الأقفال</h2>
            <p className="mt-2 text-muted-foreground">
              الفرق بين قفل بصمة، قفل باب برقم سري، وقفل باب واي فاي يساعدك على اختيار القفل الذكي الأنسب لاحتياجك.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CompareCard
              title="قفل بصمة"
              points={["فتح سريع وآمن", "إدارة بصمات متعددة", "لا يحتاج للإنترنت"]}
              note="مثالي للعائلات والمكاتب حيث الدخول المتكرر."
            />
            <CompareCard
              title="قفل برقم سري"
              points={["رموز مؤقتة للضيوف", "حماية ضد التخمين", "لوحة لمس مضادة للتلطخ"]}
              note="ممتاز للشقق المؤجرة واستضافة الزوار."
            />
            <CompareCard
              title="قفل واي فاي"
              points={["تحكم عن بعد", "تنبيهات فورية", "تكامل مع المنزل الذكي"]}
              note="الاختيار الأفضل لمن يريد التحكم الكامل من أي مكان."
            />
          </div>
        </section>

        {/* GUIDE */}
        <section id="guide" className="bg-muted/50 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">دليل اختيار القفل الذكي المناسب</h2>
              <p className="mt-2 text-muted-foreground">
                دليل عملي يساعدك على اختيار أقفال إلكترونية تناسب بابك وميزانيتك.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <GuideCard title="نوع الباب" text="تحقق من سماكة الباب ومقاس الكالون الحالي للتأكد من التوافق." />
              <GuideCard title="طريقة الفتح" text="بصمة، رقم سري، بطاقة، مفاتيح طوارئ، أو عبر التطبيق والهاتف." />
              <GuideCard title="الطاقة والبطارية" text="اختر قفلًا ببطارية طويلة وتنبيهات منخفض الشحن." />
              <GuideCard title="المتانة والأمان" text="ابحث عن تشفير، سجل دخول، وإنذار محاولة العبث." />
              <GuideCard title="التكامل الذكي" text="هل تحتاج تكامل مع واي فاي، أليكسا/جوجل، أو أوتوماتيك منزلي؟" />
              <GuideCard title="الميزانية" text="نوفر خيارات متنوعة بأسعار عادلة مع ضمان وتركيب." />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">آراء عملائنا</h2>
            <p className="mt-2 text-muted-foreground">
              ثقة العملاء هي سر نجاحنا في الكويت.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="أبو محمد"
              text="ركّبت قفل بصمة مع رقم سري. تركيب سريع من فني اقفال محترف، وتجربة استخدام ممتازة."
            />
            <TestimonialCard
              name="أم عبدالله"
              text="سمارت لوك مع تطبيق الهاتف سهّل علينا الدخول للأطفال والمساعدة المنزلية بأكواد مؤقتة."
            />
            <TestimonialCard
              name="خالد"
              text="قفل واي فاي أعطاني راحة بال، أتلقى تنبيهات فورية وأتحكم عن بُعد."
            />
          </div>
        </section>

        {/* WARRANTY & SERVICE */}
        <section id="service" className="bg-muted/50 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">الضمان والصيانة</h2>
              <p className="mt-2 text-muted-foreground">
                نقدم ضمانًا حقيقيًا وخدمة صيانة سريعة للأقفال الإلكترونية.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard title="ضمان حتى 24 شهرًا" text="قطع أصلية واستبدال حسب السياسة.">
                <Shield className="h-6 w-6 text-fuchsia-600" aria-hidden />
              </FeatureCard>
              <FeatureCard title="زيارات ميدانية سريعة" text="خدمة في جميع مناطق الكويت.">
                <MapPin className="h-6 w-6 text-emerald-600" aria-hidden />
              </FeatureCard>
              <FeatureCard title="خدمة ما بعد البيع" text="إرشادات تحديث وبرمجة الأقفال الذكية.">
                <Check className="h-6 w-6 text-fuchsia-600" aria-hidden />
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section id="articles" className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">مقالات ونصائح حول الأقفال الذكية</h2>
            <p className="mt-2 text-muted-foreground">
              مقالات تسويقية وتوعوية عن أقفال الكويت: أقفال ذكية، قفل ذكي، أقفال إلكترونية، وسمارت لوك.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ArticleCard
              img="/smart-lock-fingerprint-guide.png"
              title="قفل بصمة: الأمان والسرعة في متناول يدك"
              excerpt="تعرف على مزايا القفل بالبصمة وكيف يعزز أمان منزلك ويختصر وقت الدخول."
              slug="fingerprint-smart-lock-guide"
            />
            <ArticleCard
              img="/smart-lock-keypad-best-practices.png"
              title="قفل باب برقم سري: أفضل الممارسات لاستخدام آمن"
              excerpt="نصائح لاختيار رمز قوي وتفعيل وضع الحماية لضمان أقصى أمان."
              slug="keypad-smart-lock-best-practices"
            />
            <ArticleCard
              img="/images/article-wifi.png"
              title="قفل باب واي فاي: تحكم عن بُعد وتنبيهات لحظية"
              excerpt="كيف تستفيد من الاتصال بالواي فاي لمراقبة الباب وإدارة الدخول."
              slug="wifi-smart-lock-remote-and-alerts"
            />
            <ArticleCard
              img="/smart-locks-kuwait.png"
              title="لماذا أقفال الكويت خيارك الأفضل؟"
              excerpt="جودة أصلية، تركيب قفل فوري، ودعم فني اقفال معتمد في الكويت."
              slug="why-kuwait-smart-locks"
            />
            <ArticleCard
              img="/images/article-maintenance.png"
              title="دليل صيانة الأقفال الإلكترونية"
              excerpt="خطوات بسيطة لإطالة عمر القفل الذكي والحفاظ على أدائه."
              slug="electronic-locks-maintenance-guide"
            />
            <ArticleCard
              img="/smart-lock-security.png"
              title="نصائح أمان مهمة مع الأقفال الذكية"
              excerpt="إدارة المستخدمين، تحديثات البرامج، والتنبيهات الذكية."
              slug="smart-lock-security-tips"
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold md:text-3xl">الأسئلة الشائعة حول الأقفال الذكية</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>هل يمكن فتح القفل إذا نفدت البطارية؟</AccordionTrigger>
                <AccordionContent>
                  نعم، معظم الأقفال الذكية تدعم مفاتيح طوارئ أو شحن طارئ عبر منفذ خارجي لتشغيل القفل وفتح الباب بأمان.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>هل الأقفال الإلكترونية آمنة مثل الأقفال التقليدية؟</AccordionTrigger>
                <AccordionContent>
                  الأقفال الإلكترونية مزودة بتشفير وإنذارات ومحاولات دخول محدودة، وهي آمنة جدًا عند التركيب الصحيح والبرمجة الجيدة.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>هل يعمل القفل بدون إنترنت؟</AccordionTrigger>
                <AccordionContent>
                  نعم، القفل الذكي يعمل محليًا بالبصمة والرمز والبطاقة، بينما يوفر الواي فاي التحكم عن بعد والتنبيهات.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>ما مدة تركيب قفل ذكي؟</AccordionTrigger>
                <AccordionContent>
                  عادة بين 45 إلى 90 دقيقة حسب نوع الباب والقفل. نقدم خدمة تركيب فوري داخل معظم مناطق الكويت.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>هل تدعمون الأبواب الكويتية القياسية؟</AccordionTrigger>
                <AccordionContent>
                  نعم، لدينا نماذج متعددة تتوافق مع المقاسات الشائعة في الكويت، مع قطع تركيب خاصة عند الحاجة.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-muted/50 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">اتصل بنا</h2>
                <p className="mt-2 text-muted-foreground">
                  فريق أقفال الكويت جاهز لخدمتك: استشارة مجانية، أسعار واضحة، وتركيب قفل ذكي بنفس اليوم.
                </p>
                <div className="mt-6 space-y-3">
                  <ContactRow icon={<PhoneCall className="h-5 w-5 text-fuchsia-600" aria-hidden />} title="الهاتف">
                    <Link href="tel:67727212" className="hover:underline">67727212</Link>
                  </ContactRow>
                  <ContactRow icon={<MapPin className="h-5 w-5 text-emerald-600" aria-hidden />} title="الموقع">
                    الكويت – نخدم جميع المناطق
                  </ContactRow>
                  <ContactRow icon={<Clock className="h-5 w-5 text-fuchsia-600" aria-hidden />} title="ساعات العمل">
                    يوميًا 9 صباحًا – 11 مساءً
                  </ContactRow>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
                    <Link href="tel:67727212">اتصل الآن</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#types">شاهد الأنواع</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Image
                  src="/smart-locks-kuwait.png"
                  alt="قفل ذكي حديث على باب خشبي"
                  width={480}
                  height={320}
                  className="h-full w-full rounded-xl object-cover ring-1 ring-muted"
                  sizes="(max-width: 640px) 50vw, 480px"
                />
                <Image
                  src="/bluetooth-smart-lock-pairing.png"
                  alt="التحكم عبر التطبيق في القفل الذكي"
                  width={480}
                  height={320}
                  className="h-full w-full rounded-xl object-cover ring-1 ring-muted"
                  sizes="(max-width: 640px) 50vw, 480px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter />

      {/* Persistent Floating CTA */}
      <FloatingCTA />
    </div>
  )
}

function FeatureItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1">{icon}</span>
      <span>{children}</span>
    </li>
  )
}

function LockCard({
  title,
  desc,
  icon,
  img,
  alt,
}: {
  title: string
  desc: string
  icon: React.ReactNode
  img: string
  alt: string
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="mb-3 overflow-hidden rounded-lg ring-1 ring-muted">
          <Image
            src={img || "/placeholder.svg"}
            alt={alt}
            width={320}
            height={240}
            className="h-40 w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          />
        </div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({
  title,
  text,
  children,
}: {
  title: string
  text: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {children}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  )
}

function StepDot() {
  return (
    <span
      className="absolute -start-2.5 mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-gradient-to-tr from-fuchsia-600 to-emerald-500 shadow ring-2 ring-muted"
      aria-hidden
    />
  )
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1">{icon}</span>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

function CompareCard({ title, points, note }: { title: string; points: string[]; note: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="space-y-1 text-sm text-muted-foreground">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2 text-xs text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  )
}

function GuideCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
          <Star className="h-4 w-4 text-amber-500" />
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
        <div className="mt-3 text-sm font-semibold">{name}</div>
      </CardContent>
    </Card>
  )
}

function FloatingCTA() {
  return (
    <>
      {/* WhatsApp floating button - left bottom */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="https://wa.me/96567727212"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl",
            "ring-1 ring-green-400/50 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300",
            "transition-all duration-200 hover:scale-110"
          )}
          aria-label="تواصل معنا عبر واتساب"
        >
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Link>
      </div>

      {/* Mobile: floating button bottom-right (not full width) */}
      <div className="fixed bottom-6 right-6 z-50 block sm:hidden">
        <Link
          href="tel:67727212"
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-600 text-white shadow-xl",
            "ring-1 ring-fuchsia-500/50 hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300",
            "transition-all duration-200 hover:scale-110"
          )}
          aria-label="اتصل الآن للتركيب الفوري"
        >
          <PhoneCall className="h-6 w-6" aria-hidden />
        </Link>
      </div>
      
      {/* Desktop: floating pill bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <Link
          href="tel:67727212"
          className={cn(
            "flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-white shadow-xl",
            "ring-1 ring-fuchsia-500/50 hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
          )}
          aria-label="احجز فني أقفال الآن"
        >
          <PhoneCall className="h-5 w-5" aria-hidden />
          <span className="font-semibold">احجز فني أقفال الآن</span>
        </Link>
      </div>
    </>
  )
}
