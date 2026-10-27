# ثيم نجمة التجريبي (Najma Demo)

ثيم Twilight صغير لتجربة أدوات سَلَّة برو. فيه **مشاكل مزروعة عمدًا** ليلتقطها الفاحص:

| المشكلة | الملف | قاعدة الفحص | إصلاح تلقائي؟ |
|---|---|---|---|
| مكوّن معرّف ولا ملف له | twilight.json (home.testimonials) | component-missing | لا — أنشئ الملف |
| `{% for %}` غير مغلق | components/home/featured-products.twig | twig-unbalanced | لا — AI Fix |
| قوس `{` غير مغلق | styles/widgets.scss | css-braces | لا — AI Fix |
| سر مكشوف | assets/js/app.js | secret | لا — انقله |
| Hook `body:end` ناقص | layouts/master.twig | hook-missing | نعم |
| سكربت http:// | components/footer/footer.twig | insecure-url | نعم |
| صور بلا loading="lazy" | hero-slider.twig / single.twig | img-lazy | نعم |
| console.log | assets/js/app.js | js-console | نعم |
| صور بلا alt، |raw، alert، ترجمة ناقصة، نصوص عربية ثابتة… | متفرقة | لا |

جرّب: فحص ← إصلاح تلقائي ← إعادة فحص ← حفظ في Git ← إصدار جديد.
