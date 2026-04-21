export default function BotaniBridgeLandingPage() {
  const categories = [
    {
      title: "Plant Extracts",
      description:
        "Standardized botanical extracts for nutraceutical, functional food, and health product applications.",
      items: [
        "Turmeric Extract",
        "Green Tea Extract",
        "Ginkgo Biloba Extract",
        "Milk Thistle Extract",
      ],
    },
    {
      title: "Functional Sugars",
      description:
        "Selected sugar-based and sweetening ingredients for formulation, wellness, and specialty food use.",
      items: ["D-Mannose", "L-Arabinose", "Fructose", "Sucralose"],
    },
    {
      title: "Nutraceutical Ingredients",
      description:
        "Core ingredients for dietary supplement and wellness brands looking for dependable Chinese supply partners.",
      items: [
        "Coenzyme Q10",
        "Creatine Monohydrate",
        "Hyaluronic Acid",
        "Taurine",
      ],
    },
    {
      title: "Specialty Ingredients",
      description:
        "Higher-value active ingredients and differentiated compounds for modern health and performance products.",
      items: [
        "Alpha GPC",
        "Resveratrol",
        "Pterostilbene",
        "Magnesium L-Threonate",
      ],
    },
  ];

  const advantages = [
    "China supplier sourcing and partner matching",
    "Focused support for botanical and nutraceutical ingredients",
    "Factory communication and product coordination",
    "Flexible OEM and custom manufacturing support",
    "English-first communication for overseas buyers",
    "Clear category-based product presentation",
  ];

  const partners = [
    {
      name: "Inner Mongolia Ever Brilliance Biotechnology Co., Ltd.",
      focus:
        "Functional sugars, plant extracts, and nutraceutical raw materials for international ingredient supply.",
    },
    {
      name: "Wuxi Cima Science Co., Ltd.",
      focus:
        "Specialty active ingredients, selected botanical products, and OEM/custom production support.",
    },
  ];

  const services = [
    "Product sourcing",
    "Supplier matching",
    "OEM / private label support",
    "Formula discussion",
    "Documentation coordination",
    "Sample and inquiry follow-up",
  ];

  const featuredStats = [
    "Botanical Extracts",
    "Nutraceutical Ingredients",
    "OEM Support",
    "China Supply Network",
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-emerald-50/30 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-slate-900">
              BotaniBridge
            </div>
            <div className="text-sm text-slate-500">
              Botanical &amp; nutraceutical sourcing partner
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-950">
              About
            </a>
            <a href="#categories" className="transition hover:text-slate-950">
              Products
            </a>
            <a href="#partners" className="transition hover:text-slate-950">
              Partners
            </a>
            <a href="#services" className="transition hover:text-slate-950">
              Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-12 md:grid-cols-2 md:py-16">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm">
              China ingredient sourcing for global buyers
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
              Trusted bridge between Chinese manufacturers and overseas ingredient buyers.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              BotaniBridge helps international customers connect with qualified Chinese
              suppliers in plant extracts, functional sugars, nutraceutical ingredients,
              and custom manufacturing solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request Product Information
              </a>
              <a
                href="#categories"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Explore Categories
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {featuredStats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-3xl bg-emerald-100 blur-2xl md:block" />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1">
                <div className="text-sm text-slate-500">Category Focus</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Plant Extracts
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Standardized botanical ingredients for supplement and functional
                  product applications.
                </p>
              </div>

              <div className="rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-lg shadow-emerald-100/50 transition hover:-translate-y-1">
                <div className="text-sm text-emerald-700">Supply Strength</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  OEM Support
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Coordination for private label, custom formulas, and manufacturing
                  communication.
                </p>
              </div>

              <div className="col-span-2 rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10">
                <div className="text-sm text-slate-400">What We Do</div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    Supplier matching
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    Product sourcing
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    Inquiry coordination
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-20 border-y border-slate-200/80 bg-white/70 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-700">
              About BotaniBridge
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              A focused sourcing partner for botanical and nutraceutical ingredients.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              We position ourselves as a practical bridge between Chinese ingredient
              manufacturers and global customers. Instead of acting like a single
              factory website, BotaniBridge presents selected manufacturing resources,
              product categories, and communication support in one professional
              English-facing platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-md shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section

        id="categories"
        className="scroll-mt-20 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-700">
              Product Categories
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Core ingredient categories we can help source.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              This first version groups products by category so buyers can understand
              your supply scope quickly, instead of reading a long PDF-style list.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {category.title}
                  </h3>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Category
                  </div>
                </div>

                <p className="mt-4 max-w-lg leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition group-hover:bg-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-20 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
              Manufacturing Network
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Selected partner manufacturers behind the supply network.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Rather than building separate websites for each factory, this structure
              presents them under one sourcing-facing brand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Partner Manufacturer
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{partner.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{partner.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-20 mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-700">
            Services
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Support beyond product lists.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            The website should not only show ingredients. It should also tell
            customers why they should contact you. This section explains the value of
            working with BotaniBridge as a sourcing and coordination partner.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 text-slate-700 shadow-md shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-700">
              Contact
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Start an inquiry with BotaniBridge.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-700">
              Use this area for your business email, WhatsApp, WeChat, office
              location, or an inquiry form. For now, these are placeholder fields
              that we can replace next.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur">
            <div className="space-y-5 text-sm text-slate-700">
              <div>
                <div className="text-slate-500">Email</div>
                <div className="mt-1 font-medium">your-email@example.com</div>
              </div>
              <div>
                <div className="text-slate-500">WhatsApp</div>
                <div className="mt-1 font-medium">To be added</div>
              </div>
              <div>
                <div className="text-slate-500">Location</div>
                <div className="mt-1 font-medium">China</div>
              </div>
              <button className="w-full rounded-full bg-slate-950 py-3 font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:opacity-95">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 BotaniBridge. All rights reserved.</div>
          <div>Botanical extracts · Nutraceutical ingredients · OEM sourcing</div>
        </div>
      </footer>
    </div>
  );
}
