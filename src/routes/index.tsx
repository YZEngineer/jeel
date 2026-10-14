import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, BookOpen, CalendarDays, Check, ChevronDown, Clock3, Compass, GraduationCap, Heart, Menu, MessageCircle, Moon, ShieldCheck, Sparkles, Sprout, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import heroImage from "@/assets/program-hero.jpg";
import instapayLogo from "@/assets/instapay-logo.png";
import xpayLogo from "@/assets/xpay-logo.png";
import bayanLogo from "@/assets/bayan-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "جيل كالصحابة — ما لا يسع الطالب المسلم جهله | منصة بيان" },
      { name: "description", content: "رحلة تربوية تفاعلية لمدة ١٦ أسبوعًا للناشئة من ٦ إلى ١٧ سنة، لتعلّم العقيدة والعبادات والقرآن والسيرة والأخلاق مع منصة بيان." },
      { property: "og:title", content: "جيل كالصحابة | منصة بيان" },
      { property: "og:description", content: "علمٌ يفهمه ابنك، وقيمٌ يعيش بها. رحلة تعليمية لمدة ١٦ أسبوعًا، مناسبة لعمره ومرتبطة بحياته." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const topics = [
  {
    icon: ShieldCheck,
    title: "الإيمان والعقيدة",
    description: "أساسٌ راسخ يعرف به ابنك ربّه، ويفهم معنى الإسلام وأركان الإيمان والإحسان.",
    details: [
      "لم خلقنا الله وخلق الكون؟",
      "ما هو الإسلام؟ وهل يقبل الله دين غير الإسلام؟",
      "ما أركان الإسلام؟ ما أركان الإيمان؟ ما أركان الإحسان؟",
      "ما هو النفاق والشرك والكفر والبدعة والكبائر والصغائر؟",
      "ما عقيدة المؤمن تجاه الأنبياء والرسل والصحابة وآل البيت؟",
    ],
  },
  {
    icon: Moon,
    title: "الفقه",
    description: "يتعلّم بعض أبواب الفقه: الطهارة والصلاة والصيام والجهاد والبيع والشراء.",
    details: [
      "فقه الطهارة: أحكام الوضوء والغسل والاستنجاء والنجاسات والتيمم والمسح على الجورب والخف",
      "فقه الصلاة",
      "فقه الصيام",
      "فقه الجهاد",
      "فقه البيع والشراء",
    ],
  },
  {
    icon: Compass,
    title: "التاريخ والسيرة",
    description: "قصة النبي آدم ﷺ، والعهد المكي في السيرة، وقصة صحابي من الصحابة.",
    details: [
      "قصة النبي آدم",
      "العهد المكي في السيرة",
      "قصة الصحابي: أبو هريرة للصغار ومصعب للكبار",
    ],
  },
  {
    icon: BookOpen,
    title: "التفسير",
    description: "يفهم معاني السور التي يقرأها، ويربط هدايات القرآن بتفاصيل يومه.",
    details: [
      "الفاتحة",
      "الإخلاص",
      "المعوذتان",
      "الكافرون",
      "الماعون",
      "الهمزة",
      "التكاثر",
    ],
  },
  {
    icon: MessageCircle,
    title: "الأحاديث",
    description: "أحاديث مركزية يتعلّمها ويفهمها، ثم يناقش كيف يطبّقها في حياته.",
    details: [
      "إنما الأعمال بالنيات",
      "حديث جبريل: بينما نحن جلوس",
      "لا يؤمن أحدكم حتى يحب لأخيه",
      "من حسن إسلام المرء",
      "الحلال بين والحرام بين",
      "من أحدث في أمرنا هذا ما ليس منه فهو رد",
    ],
  },
  {
    icon: Heart,
    title: "الأخلاق والتزكية والأدب",
    description: "قيمٌ تظهر في احترام والديه، وتعامله مع الناس، ومواقفه اليومية.",
    details: [
      "الأدب مع الله - مع الرسول - الانبياء - الصحابة - الصالحين (خاصة المشايخ والعلماء) أحياء وأموات",
      "الأدب مع الوالدين - المعلم - الأخوة والأقارب (للكبار مراعاة حرمة التعامل مع غير المحارم والنظر اليهن كبنت العم والخال ..)",
      "الأدب مع الأصدقاء (مراعاة آداب اللعب: الأولاد مع الأولاد والبنات مع البنات، وعدم الاختلاط للكبار)",
      "الأدب مع الجيران - مع الضيف - مع الكبير والصغير",
      "التحذير من آفات القلب كالحسد والغل والكبر .. آفات اللسان كالاستهزاء (التنمر والسخرية) والسب - آفات الجوارح زي الضرب والأذى الجسدي",
      "أين الذوقيات في التعامل مثل (ازي حضرتك - الف سلامة على حضرتك)؟",
      "كيف ترد على من أساء إليك؟ (مهمة جدا) عند المقدرة وكيف تأخذ حقك بما يرضي الله؟",
    ],
  },
  {
    icon: Sprout,
    title: "بعض الآداب والأدعية والأذكار",
    description: "من الاستيقاظ إلى النوم… آدابٌ وأذكار تجعل دينه حاضرًا في يومه.",
    details: [
      "النوم: قبل وبعد",
      "الخلاء: دخول وخروج",
      "الطعام والشراب: قبل وبعد",
      "اللباس: قبل وبعد",
      "المنزل: دخول وخروج",
      "الطريق: غض البصر وآداب الطريق",
      "السلام",
      "الركوب",
      "المسجد: دخول وخروج",
      "بعض أذكار الصباح والمساء",
    ],
  },
];
const faqs = [
  ["لمن يناسب برنامج جيل كالصحابة؟", "للناشئة من ٦ إلى ١٧ سنة، مع مجموعتين عمريتين: ٦–١٢ سنة و١٢–١٧ سنة، لضمان مناسبة المحتوى وطريقة التعليم لكل مرحلة."],
  ["ما مدة البرنامج ومواعيد اللقاءات؟", "يمتد البرنامج ١٦ أسبوعًا، بلقاء أسبوعي يوم الجمعة. يستغرق اللقاء من ٩٠ إلى ١٢٠ دقيقة. لم يُحدَّد وقت اللقاء أو موعد البداية في تفاصيل البرنامج المتاحة."],
  ["هل اللقاءات مجرد محاضرات؟", "لا، يتفاعل الطالب من خلال القصة والسؤال والحوار والنشاط واللعبة والموقف التطبيقي والمراجعة. تُستخدم الوسائل البصرية والحركة مع الصغار، والحوار والأدلة وتحليل المواقف مع الكبار."],
  ["لماذا مجموعات صغيرة؟", "تضم المجموعة من ١٠ إلى ١٥ طالبًا، لتحقيق توازن بين التفاعل والمشاركة والمتابعة، وإتاحة مساحة للمعلم ليسمع الطالب ويتابع مشاركته."],
  ["على أي مصادر يعتمد المحتوى؟", "القرآن الكريم، وأحاديث الأربعين النووية، وكتاب «ما لا يسع أطفال المسلمين جهله»، ومؤلفات الشيخ محمود المصري، مع الاستفادة من مصادر شرعية وتربوية أخرى حسب الموضوع والعمر."],
  ["ماذا يحدث في نهاية الرحلة؟", "مراجعة شاملة، ومسابقة ختامية تفاعلية، وتقييم التجربة ومخرجات الطالب، تمهيدًا للانتقال إلى المراحل التعليمية التالية."],
];
const navigation = [["عن البرنامج", "about"], ["ماذا سيتعلّم؟", "curriculum"], ["الفئات العمرية", "ages"], ["تفاصيل البرنامج", "details"]];
const paymentOptions = [
  { logo: instapayLogo, alt: "شعار انستاباي", title: "انستاباي", note: "الدفع من خلال تطبيق انستاباي", href: "https://ipn.eg/S/muhammadamri/instapay/2NfBpd" },
  { logo: xpayLogo, alt: "شعار بوابة الدفع", title: "بوابة دفع بالريال السعودي", note: "الدفع بالريال السعودي عبر بوابة الدفع", href: "https://checkout.xpay.app/p/plink_live_6Q5IALt98Kn7Ff66whfZbM" },
];

function Brand() {
  return <a href="#" className="brand" aria-label="منصة بيان — الرئيسية"><img src={bayanLogo} alt="شعار بيان" className="brand-logo" /><div className="brand-subtitle">لتعليم القرآن والعلم الشرعي</div></a>;
}

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [age, setAge] = useState<"young" | "older">("young");
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contact, setContact] = useState<"registration" | "partnership" | null>(null);
  return <>
    <header className="site-header relative z-20">
      <div className="page-container flex h-full items-center justify-between gap-6">
        <Brand />
        <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-8 lg:flex">{navigation.map(([label, id], i) => <a key={id} href={`#${id}`} className={`nav-link ${i === 0 ? "active" : ""}`}>{label}</a>)}</nav>
        <div className="flex items-center gap-2"><Button className="hidden h-11 px-5 sm:inline-flex" onClick={() => setContact("registration")}>سجّل ابنك الآن <ArrowLeft /></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button></div>
      </div>
      {mobileOpen && <nav className="mobile-nav" aria-label="قائمة الهاتف">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} className="nav-link">{label}</a>)}<Button onClick={() => { setMobileOpen(false); setContact("registration"); }}>سجّل ابنك الآن <ArrowLeft /></Button></nav>}
    </header>

    <main>
      <section className="program-hero" aria-labelledby="program-title">
        <img className="hero-image" src={heroImage} alt="أطفال يتعلّمون القرآن مع معلمهم في بيئة تعليمية هادئة" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="page-container hero-inner"><div className="hero-content fade-in">
          <div className="hero-eyebrow"><Sparkles size={15} /> رحلة تربوية لبناء العلم والقيم</div>
          <h1 id="program-title" className="hero-title">جيل كالصحابة</h1>
          <h2 className="hero-tagline">ما لا يسع الطالب المسلم جهله</h2>
          <p className="hero-description">رحلة تربوية لمدة ١٦ أسبوعًا تساعد ابنك على أن يعرف دينه، ويفهمه، ويطبّقه في حياته.<br />علمٌ ينفعه… وقيمٌ تكبر معه.</p>
          <div className="hero-actions"><Button variant="gold" size="hero" onClick={() => setContact("registration")}>سجّل ابنك الآن <ArrowLeft size={18} /></Button><Button variant="heroOutline" size="hero" asChild><a href="#about">تعرّف على البرنامج <BookOpen size={18} /></a></Button></div>
          <div className="hero-age"><Users size={17} /><span>للأعمار من ٦ إلى ١٧ سنة</span><span className="mx-1">•</span><span>مجموعات تناسب كل مرحلة عمرية</span></div>
        </div></div>
        <div className="photo-caption"><Sprout size={20} /><span>علمٌ يُفهم، وأثرٌ يبقى</span></div>
      </section>

      <section className="stats-strip" aria-label="البرنامج في أرقام"><div className="page-container stats-grid">
        {[{ icon: CalendarDays, value: "١٦ أسبوعًا", text: "رحلة تعليمية متكاملة" }, { icon: Users, value: "٦ – ١٧ سنة", text: "مجموعتان عمريتان" }, { icon: Clock3, value: "لقاء أسبوعي", text: "كل يوم جمعة" }, { icon: GraduationCap, value: "١٠ – ١٥ طالبًا", text: "تفاعل ومتابعة حقيقية" }].map(({ icon: Icon, value, text }) => <div className="stat" key={value}><Icon className="stat-icon" /><div><strong>{value}</strong><span>{text}</span></div></div>)}
      </div></section>

      <section id="about" className="section"><div className="page-container intro-layout">
        <div><div className="section-kicker">أساسٌ يبقى معه</div><h2 className="section-title">هل يعرف ابنك ما يحتاج<br />أن يعرفه عن دينه؟</h2><p className="section-description">في عالمٍ يمتلئ بالمعلومات والتأثيرات، يحتاج ابنك إلى أساس واضح يعرف من خلاله دينه ويفهمه ويعتزّ به.</p><p className="section-description">صُمّم <strong className="text-primary">جيل كالصحابة</strong> ليبني هذه القاعدة خطوةً بخطوة؛ فلا يكون الدين معلومات يحفظها وينساها، بل علمًا يفهمه وقيمًا يعيش بها.</p><Button variant="link" asChild className="mt-5 px-0"><a href="#curriculum">اكتشف ما سيتعلّمه ابنك <ArrowLeft /></a></Button></div>
      </div></section>

      <section id="curriculum" className="section bg-muted/45"><div className="page-container">
        <div className="section-heading"><div><div className="section-kicker">علمٌ يرتبط بالحياة</div><h2 className="section-title">ماذا سيتعلّم ابنك؟</h2><p className="section-description">سبعة محاور متكاملة، كلُّ محورٍ من حصتين، تبني المعرفة، وتغرس القيم، وتحوّل العلم إلى عمل.</p></div><span className="flex items-center gap-2 text-sm text-primary"><BookOpen size={18} /> محتوى مبسّط ومناسب للعمر</span></div>
        <div className="curriculum-grid">{topics.map((topic, i) => <article key={topic.title} className="curriculum-card"><div className="flex items-center justify-between"><div className="topic-icon"><topic.icon size={24} strokeWidth={1.6} /></div><div className="flex items-center gap-2"><span className="topic-sessions">حصتان</span><span className="topic-number">٠{["١", "٢", "٣", "٤", "٥", "٦", "٧"][i]}</span></div></div><h3>{topic.title}</h3><p>{topic.description}</p><Button variant="link" className="mt-3 h-8 px-0 text-sm" onClick={() => setExpandedTopic(expandedTopic === i ? null : i)} aria-expanded={expandedTopic === i} aria-controls={`topic-${i}`}>{expandedTopic === i ? "إخفاء الموضوعات" : "الموضوعات الرئيسية"}<ChevronDown className={expandedTopic === i ? "rotate-180" : ""} /></Button>{expandedTopic === i && <div className="topic-details" id={`topic-${i}`}><ul>{topic.details.map(item => <li key={item}><Check />{item}</li>)}</ul></div>}</article>)}</div>
      </div></section>

      <section id="ages" className="section"><div className="page-container age-layout">
        <div><div className="section-kicker">لكل عمرٍ طريقته</div><h2 className="section-title">برنامج واحد…<br />بطريقتين تناسبان العمر</h2><p className="section-description">لا نريد أن يجلس الطالب ليستمع فقط؛ نريده أن يسأل، ويشارك، ويكتشف. لذلك نراعي عمره واحتياجاته في كل لقاء.</p></div>
        <div><div className="age-tabs" role="tablist" aria-label="الفئات العمرية"><Button variant={age === "young" ? "secondary" : "ghost"} className="mb-3 h-12 flex-1" role="tab" aria-selected={age === "young"} aria-controls="age-panel" onClick={() => setAge("young")}>٦ – ١٢ سنة</Button><Button variant={age === "older" ? "secondary" : "ghost"} className="mb-3 h-12 flex-1" role="tab" aria-selected={age === "older"} aria-controls="age-panel" onClick={() => setAge("older")}>١٢ – ١٧ سنة</Button></div><div id="age-panel" role="tabpanel" className="age-panel"><h3>{age === "young" ? "نتعلّم ونكتشف ونكبر" : "نفهم ونناقش ونطبّق"}</h3><p className="section-description">{age === "young" ? "نقرّب المعاني من عالم الطفل بالقصة والصورة واللعبة، حتى تتحوّل المعلومة تدريجيًا إلى فهم وعادة وسلوك." : "مساحة أكبر للفهم والحوار والسؤال والدليل، ومناقشة المواقف التي يواجهها المراهق بصورة منضبطة ومناسبة لمرحلته."}</p><ul>{(age === "young" ? ["القصص والمواقف", "الألعاب والمسابقات", "الصور والوسائل البصرية", "الحركة والمشاركة", "التكرار الذكي", "التطبيقات اليومية"] : ["الحوار والنقاش", "الأسئلة الواقعية", "تحليل المواقف", "الأدلة الشرعية", "تحمّل المسؤولية", "التطبيقات الحياتية"]).map(item => <li key={item}><Check />{item}</li>)}</ul></div></div>
      </div></section>

      <section id="details" className="section bg-muted/45"><div className="page-container"><div className="section-kicker">خطوةً بخطوة</div><h2 className="section-title">رحلة ابنك خلال ١٦ أسبوعًا</h2><p className="section-description">لقاء كل جمعة، من ٩٠ إلى ١٢٠ دقيقة، في مجموعة صغيرة تمنح كل طالب مساحةً للمشاركة.</p><div className="journey-grid">{[
        ["٠١", "التسجيل والتعرّف", "نتعرّف على مستوى الطالب واحتياجاته، ثم ينضم إلى المجموعة المناسبة لعمره."],
        ["٠٢", "التعلّم والتفاعل", "١٦ أسبوعًا من القصص والحوار والأنشطة والتطبيق، تربط العلم بالحياة."],
        ["٠٣", "المراجعة والمسابقة", "مراجعة شاملة ومسـابقة ختامية تفاعلية لتثبيت ما تعلّمه الطالب."],
        ["٠٤", "التقييم وما بعده", "تقييم التجربة ومخرجات الطالب، ثم الانتقال إلى المراحل التعليمية التالية."],
      ].map(([n, title, text]) => <div className="journey-step" key={n}><div className="journey-number">{n}</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section id="faq" className="section"><div className="page-container faq-layout"><div><div className="section-kicker">نجيب عن أسئلتك</div><h2 className="section-title">أسئلة تهمّ ولي الأمر</h2><p className="section-description">كل ما يساعدك على التعرّف على رحلة ابنك قبل بدايتها.</p></div><div>{faqs.map(([q, answer], i) => <div className="faq-item" key={q}><Button variant="ghost" className="h-auto min-h-16 w-full justify-between gap-4 rounded-none px-0 py-5 text-right text-base whitespace-normal hover:bg-transparent" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-controls={`faq-${i}`}>{q}<ChevronDown className={openFaq === i ? "rotate-180" : ""} /></Button>{openFaq === i && <p id={`faq-${i}`} className="faq-answer">{answer}</p>}</div>)}</div></div></section>

      <section className="final-cta"><div className="page-container flex items-center justify-between gap-10"><div><h2 className="section-title">لنبدأ رحلةً يكبر أثرها مع ابنك</h2><p>١٦ أسبوعًا من العلم، والفهم، والتفاعل، والتطبيق.</p></div><Button variant="gold" size="hero" onClick={() => setContact("registration")}>سجّل ابنك الآن <ArrowLeft /></Button></div></section>
    </main>

    <footer className="footer"><div className="page-container footer-inner"><Brand /><p className="footer-note">جيل كالصحابة · ما لا يسع الطالب المسلم جهله</p><Button variant="link" onClick={() => setContact("partnership")}>كن شريك نجاح . <ArrowLeft /></Button></div><div className="page-container mt-7 border-t border-border pt-5"><p className="footer-note">منصة بيان لتعليم القرآن والعلم الشرعي · جميع الحقوق محفوظة © ٢٠٢٦</p></div></footer>

    <Dialog open={contact !== null} onOpenChange={open => { if (!open) setContact(null); }}><DialogContent dir="rtl" className="max-w-lg text-right"><DialogTitle className="text-right font-heading text-xl leading-relaxed ps-8">{contact === "partnership" ? "شريك نجاح في جيل كالصحابة" : "ابدأ رحلة ابنك مع جيل كالصحابة"}</DialogTitle><DialogDescription className="text-right text-base leading-loose">{contact === "partnership" ? "بناء الأبناء مسؤولية مشتركة بين الأسرة والمعلم والمنصة والمجتمع. لم تُضَف بيانات التواصل الخاصة بالشراكات بعد." : "للاشتراك، الدفع عن طريق:"}</DialogDescription>{contact === "registration" && <div className="payment-options">{paymentOptions.map(option => <a key={option.href} className="payment-option" href={option.href} target="_blank" rel="noopener noreferrer" onClick={() => setContact(null)}><span className="payment-logo"><img src={option.logo} alt={option.alt} /></span><strong className="block font-heading text-base">{option.title}</strong><span className="block text-sm text-muted-foreground">{option.note}</span></a>)}</div>}{contact === "partnership" && <Button onClick={() => setContact(null)}>حسنًا، فهمت <Check /></Button>}</DialogContent></Dialog>
  </>;
}
