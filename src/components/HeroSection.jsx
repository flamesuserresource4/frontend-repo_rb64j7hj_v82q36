import { Rocket, ShieldCheck, Phone } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background gradient that doesn't block the 3D scene */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        {/* Left: Value prop */}
        <div className="relative z-10 max-w-2xl">
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
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300"
            >
              Learn more
            </a>
            <a
              href="tel:+919999999999"
              className="ml-auto inline-flex items-center gap-2 text-emerald-700 transition hover:-translate-y-0.5 hover:text-emerald-800"
            >
              <Phone className="h-5 w-5" /> Talk to Ops
            </a>
          </div>
        </div>

        {/* Right: 3D scene */}
        <div className="relative mt-12 h-[28rem] w-full flex-1 rounded-2xl lg:mt-0">
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-emerald-200 bg-white/40 shadow-lg">
            <Spline
              scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient top mask to improve text contrast; doesn't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
