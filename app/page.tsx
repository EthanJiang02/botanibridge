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
      items: ["Alpha GPC", "Resveratrol", "Pterostilbene", "Magnesium L-Threonate"],
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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-semibold tracking-tight">BotaniBridge</div>
            <div className="text-sm text-slate-500">
              Botanical &amp; nutraceutical sourcing partner
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#categories" className="hover:text-slate-900">
              Products
            </a>
            <a href="#partners" className="hover:text-slate-900">
              Partners
            </a>
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm text-emerald-700">
            China ingredient sourcing for global buyers
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
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
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
            >
              Request Product Information
            </a>
            <a
              href="#categories"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Explore Categories
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-slate-100 p-6 shadow-sm">
            <div className="text-sm text-slate-500">Category Focus</div>
            <div className="mt-2 text-2xl font-semibold">Plant Extracts</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Standardized botanical ingredients for supplement and functional
              product applications.
            </p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6 shadow-sm">
            <div className="text-sm text-emerald-700">Supply Strength</div>
            <div className="mt-2 text-2xl font-semibold">OEM Support</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Coordination for private label, custom formulas, and manufacturing
              communication.
            </p>
          </div>
          <div className="col-span-2 rounded-3xl bg-slate-50 p-6 shadow-sm">
            <div className="text-sm text-slate-500">What We Do</div>
            <div className="mt-3 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                Supplier matching
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                Product sourcing
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                Inquiry coordination
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
              About BotaniBridge
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
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
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Product Categories
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Core ingredient categories we can help source.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            This first version groups products by category so buyers can understand
            your supply scope quickly, instead of reading a long PDF-style list.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {category.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
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
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold">{partner.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{partner.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Services
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
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
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700 shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-emerald-100 bg-emerald-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-emerald-700">
              Contact
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start an inquiry with BotaniBridge.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-700">
              Use this area for your business email, WhatsApp, WeChat, office
              location, or an inquiry form. For now, these are placeholder fields
              that we can replace next.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
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
              <button className="w-full rounded-2xl bg-slate-900 py-3 font-medium text-white hover:opacity-90">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 BotaniBridge. All rights reserved.</div>
          <div>Botanical extracts · Nutraceutical ingredients · OEM sourcing</div>
        </div>
      </footer>
    </div>
  );
}