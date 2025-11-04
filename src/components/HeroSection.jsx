import { Rocket, ShieldCheck, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            Pilot: Jaipur industrial clusters
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            MedhaVerse — Verified Industrial Byproducts Marketplace
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            List, verify, and move industrial byproducts with traceability. Built for Sitapura, Bagru, and VKI — ops-first with hybrid verification and logistics.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:border-gray-300"
            >
              Learn more
            </a>
            <a
              href="tel:+919999999999"
              className="ml-auto inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
            >
              <Phone className="h-5 w-5" /> Talk to Ops
            </a>
          </div>
        </div>
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative h-80 w-full rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-400 p-[2px] shadow-lg">
            <div className="h-full w-full rounded-2xl bg-white p-6">
              <div className="grid h-full w-full grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">Traceability</p>
                  <p className="mt-2 text-xs text-emerald-900">Chain of Custody with photos, seals, and QR-backed PDFs</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">Logistics</p>
                  <p className="mt-2 text-xs text-emerald-900">Manifest, driver OTP, GPS trail</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">Verification</p>
                  <p className="mt-2 text-xs text-emerald-900">Inspector intake, sample & lab TAR</p>
                </div>
                <div className="col-span-2 rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">Payments</p>
                  <p className="mt-2 text-xs text-emerald-900">Escrow, COD, or Advance with UTR capture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
