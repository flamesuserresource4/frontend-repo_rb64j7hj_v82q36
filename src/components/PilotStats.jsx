import { Users, Handshake, Weight, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, value, sub, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
        {sub && <p className="text-xs text-gray-500">{sub}</p>}
      </div>
    </div>
  </motion.div>
);

export default function PilotStats() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/60" id="stats">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pilot KPIs</h2>
            <p className="mt-1 text-sm text-gray-600">Live targets for the 8-week Jaipur pilot.</p>
          </div>
          <div className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium text-emerald-700">
            <TrendingUp className="mr-1 inline h-4 w-4" /> Tracking weekly
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard icon={Users} label="Suppliers Onboarded" value="20" sub="Goal" delay={0.0} />
          <StatCard icon={Users} label="Buyers Onboarded" value="10" sub="Goal" delay={0.05} />
          <StatCard icon={Handshake} label="Deals Closed" value="15" sub="Target" delay={0.1} />
          <StatCard icon={Weight} label="Tonnes Moved" value="200" sub="Target" delay={0.15} />
          <StatCard icon={ShieldCheck} label="Verification Pass Rate" value="95%" sub="Target" delay={0.2} />
        </div>
      </div>
    </section>
  );
}
