// app/page.tsx
import Link from "next/link";

const services = [
  {
    id: "featheredge",
    name: "Featheredge / Closeboard Fencing",
    description:
      "Strong, solid fencing that gives privacy and a smart, clean line along your garden. Ideal for back gardens and boundaries.",
    price: "from £85 per metre",
    details: "Typical install includes timber posts, rails and featheredge boards.",
  },
  {
    id: "panels",
    name: "Fence Panels with Concrete Posts",
    description:
      "Popular panel fencing with concrete posts and gravel boards for extra strength and longer life.",
    price: "from £80 per metre",
    details: "Great balance of price, strength and a neat, modern look.",
  },
  {
    id: "picket",
    name: "Picket / Garden Fencing",
    description:
      "Lower, decorative fencing perfect for front gardens or to separate areas in your yard.",
    price: "from £65 per metre",
    details: "Available in different heights and styles.",
  },
];

const gallery = [
  {
    label: "Featheredge fence in North London garden",
  },
  {
    label: "Panel fence with concrete posts and gravel boards",
  },
  {
    label: "Picket fence around front garden",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#dcfce7_0,_#f9fafb_45%,_#e5e7eb_100%)] text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-0">
          {/* Logo / Name */}
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-bold text-white shadow-md">
              LF
            </div>
            <span className="text-sm font-semibold tracking-tight">
              London Wood Fencing
            </span>
          </a>

          {/* Simple menu */}
          <nav className="hidden gap-5 text-xs font-medium text-slate-700 sm:flex">
            <a href="#services" className="hover:text-emerald-700">
              Services
            </a>
            <a href="#gallery" className="hover:text-emerald-700">
              Gallery
            </a>
            <a href="#about" className="hover:text-emerald-700">
              About
            </a>
            <a href="#contact" className="hover:text-emerald-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div
        id="top"
        className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6 lg:px-0"
      >
        {/* HERO */}
        <section className="mb-8 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700/90">
              Garden &amp; Yard Fencing
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2.3rem]">
              Wood fencing for London homes.
            </h1>
            <p className="mt-3 text-sm text-slate-700 sm:text-[0.95rem]">
              I install strong, neat wooden fencing for gardens and yards across
              London. Whether you need more privacy, want to replace old panels
              or just make your garden look better, I can help with a simple,
              honest quote.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-105"
              >
                View fencing options
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Get a free quote
              </a>
            </div>

            <p className="mt-3 text-[11px] text-slate-500">
              Based in London · Free quotes · Most gardens completed in 1–2
              days depending on size.
            </p>
          </div>

          {/* Right side info card */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-4 shadow-[0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur">
            <p className="text-xs font-semibold text-slate-600">
              Why customers choose me
            </p>
            <ul className="mt-3 space-y-2 text-[12px] text-slate-700">
              <li>• Clear prices and simple explanations.</li>
              <li>• I turn up when I say I will.</li>
              <li>• Respect for your garden and neighbours.</li>
              <li>• Tidy finish and rubbish removed.</li>
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mb-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Fencing options and guide prices
          </h2>
          <p className="mt-1 text-xs text-slate-600 sm:text-[13px]">
            Example prices to give you an idea. Final quote depends on access,
            length of fence and the condition of existing posts.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-[11px] text-emerald-700 font-semibold">
                  {service.price}
                </p>
                <p className="mt-2 text-[12px] text-slate-600">
                  {service.description}
                </p>
                <p className="mt-2 text-[11px] text-slate-500">
                  {service.details}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Prices are for guidance only and can change with timber costs.
            I&apos;ll confirm everything clearly before starting any work.
          </p>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mb-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Recent fencing work
          </h2>
          <p className="mt-1 text-xs text-slate-600 sm:text-[13px]">
            A few examples of fences I&apos;ve installed. I can send you more
            pictures by WhatsApp if you like.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.label}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="relative h-28 w-full bg-slate-200">
                  {/* Replace with real images in /public later */}
                  <span className="absolute inset-0 flex items-center justify-center text-[11px] text-slate-500">
                    Your fence photo here
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-[12px] font-medium text-slate-800">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              About me
            </h2>
            <p className="mt-2 text-[13px] text-slate-600">
              I&apos;m an independent tradesperson based in London with
              experience in building and repairing wooden garden fencing. I work
              mainly with homeowners and landlords who want a straightforward,
              honest job without fuss.
            </p>
            <p className="mt-2 text-[13px] text-slate-600">
              I&apos;m happy to look at photos or do a quick visit, explain your
              options and give you a clear price before you decide.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Areas I cover
            </h3>
            <p className="mt-2 text-[13px] text-slate-600">
              Most areas within London, especially:
            </p>
            <ul className="mt-2 space-y-1.5 text-[13px] text-slate-700">
              <li>• North London</li>
              <li>• East London</li>
              <li>• Central London (where access allows)</li>
            </ul>
            <p className="mt-2 text-[12px] text-slate-600">
              If you&apos;re just outside London, send me a message and I&apos;ll
              let you know if I can travel.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mb-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-4 shadow-sm"
        >
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Contact
          </h2>
          <p className="mt-1 text-[13px] text-slate-600">
            Send me a quick message with a photo of your current fence (if you
            have one) and roughly how many metres you need, and I&apos;ll reply
            with a guide price.
          </p>

          <div className="mt-3 flex flex-wrap gap-3 text-[13px]">
            {/* TODO: replace with your real details */}
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-800 hover:bg-slate-50"
            >
              📧 Email
            </a>
            <a
              href="tel:+440000000000"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-800 hover:bg-slate-50"
            >
              📞 Call
            </a>
            <a
              href="https://wa.me/4400000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1.5 font-medium text-white shadow hover:brightness-105"
            >
              💬 WhatsApp
            </a>
          </div>

          <p className="mt-2 text-[11px] text-slate-500">
            I&apos;m happy with messages, voice notes or calls. No pressure, no
            hard sell.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-2 border-t border-slate-200/70 pt-3">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} London Wood Fencing. Website built for
            simple and clear information.
          </p>
        </footer>
      </div>
    </main>
  );
}
