import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="get-started" className="bg-emerald-700">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Supplier — List your byproducts</h3>
            <p className="mt-1 text-sm text-gray-600">Share photos and basic details. We’ll schedule a quick verification visit.</p>
            <a
              href="#supplier-intake"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              Start Intake <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Buyer — Find verified lots</h3>
            <p className="mt-1 text-sm text-gray-600">Filter listings by type, grade, and city. Request samples or make offers.</p>
            <a
              href="#buyer-search"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              Browse Listings <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Talk to us — Ops support</h3>
            <p className="mt-1 text-sm text-gray-600">We’re active in Jaipur. Ping us for pickups, pricing, and verification.</p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-700 px-4 py-2 text-sm font-medium text-emerald-50 bg-emerald-700 hover:bg-emerald-600"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
