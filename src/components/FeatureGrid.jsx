import { Factory, Recycle, Truck, ClipboardList, FileText, Camera, ShieldCheck, LineChart } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, desc, badge }) => (
  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-3 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      {badge && (
        <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">{badge}</span>
      )}
    </div>
    <p className="text-sm leading-6 text-gray-600">{desc}</p>
  </div>
);

export default function FeatureGrid() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-bold text-gray-900">Built for the pilot — ops-first, mobile-ready</h2>
        <p className="mt-2 text-sm text-gray-600">Supplier quick intake, buyer search, inspector app, driver OTP — all wired to traceability.</p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureItem icon={Factory} title="Supplier Quick Form" desc="WhatsApp link + mobile-first form. Required: phone OTP, 3 photos, waste type, qty." badge="Week 1" />
          <FeatureItem icon={Recycle} title="Buyer Search" desc="Filter by waste type, qty, city, grade. View CoC/TAR when available." badge="Week 2" />
          <FeatureItem icon={ClipboardList} title="Inspector Intake" desc="GPS, photos, tamper seal, sample ID, CoC PDF generation." badge="Week 4" />
          <FeatureItem icon={Truck} title="Driver App" desc="Assigned manifests, pickup checklist, photo upload, delivery OTP." badge="Week 5" />
          <FeatureItem icon={Camera} title="Photo-first" desc="Pickup & delivery photos required for every movement." />
          <FeatureItem icon={FileText} title="Documents" desc="CoC PDFs, manifests, invoices — auto-generated and stored." />
          <FeatureItem icon={ShieldCheck} title="Compliance" desc="License registry, auto-flag expiries, broker-only T&Cs." />
          <FeatureItem icon={LineChart} title="Pilot Dashboard" desc="KPIs: suppliers, buyers, deals, tonnes, GMV, commission." />
        </div>
      </div>
    </section>
  );
}
