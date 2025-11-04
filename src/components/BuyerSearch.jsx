import { useMemo, useState } from 'react';
import { Search, Filter, MapPin, Tag } from 'lucide-react';

const MOCK_LISTINGS = [
  {
    id: 'LST-1001',
    company: 'ABC Plastics',
    city: 'Jaipur',
    wasteType: 'HDPE',
    grade: 'Mixed, 2% contamination',
    qtyKg: 1200,
    priceExpectation: 22,
    status: 'Verified',
  },
  {
    id: 'LST-1002',
    company: 'Sharma Recyclers',
    city: 'Bagru',
    wasteType: 'PET',
    grade: 'Clear flakes, 1% moisture',
    qtyKg: 800,
    priceExpectation: 38,
    status: 'Visited',
  },
  {
    id: 'LST-1003',
    company: 'VKI Metals',
    city: 'VKI',
    wasteType: 'Ferrous',
    grade: 'Low oil, 3% contamination',
    qtyKg: 5000,
    priceExpectation: 42,
    status: 'Verified',
  },
];

function ListingCard({ item }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-gray-500">{item.id}</div>
          <h4 className="text-lg font-semibold text-gray-900">{item.wasteType} · {item.qtyKg} kg</h4>
          <p className="mt-1 text-sm text-gray-600">{item.grade}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-gray-700"><MapPin className="h-3 w-3" /> {item.city}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-emerald-700"><Tag className="h-3 w-3" /> ₹{item.priceExpectation}/kg</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-blue-700">{item.status}</span>
          </div>
        </div>
        <button className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">Request Sample</button>
      </div>
    </div>
  );
}

export default function BuyerSearch() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ type: 'All', city: 'All', minQty: 0 });

  const filtered = useMemo(() => {
    return MOCK_LISTINGS.filter((l) => {
      const matchesQuery = [l.company, l.wasteType, l.city, l.grade].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesType = filters.type === 'All' || l.wasteType === filters.type;
      const matchesCity = filters.city === 'All' || l.city === filters.city;
      const matchesQty = l.qtyKg >= (Number(filters.minQty) || 0);
      return matchesQuery && matchesType && matchesCity && matchesQty;
    });
  }, [query, filters]);

  return (
    <section id="buyer-search" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Buyer Search</h2>
          <p className="mt-1 text-sm text-gray-600">Filter listings by type, city, and minimum lot size.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-4">
          <div className="md:col-span-2 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search company, grade, or type"
              className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={filters.type}
              onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
              className="w-full bg-transparent text-sm focus:outline-none"
            >
              {['All','HDPE','LDPE','PET','PP','Ferrous','NonFerrous','Textile-Cotton','Textile-Synthetic','E-Waste (non-hazard)','Stone Slurry','Paper'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={filters.city}
              onChange={(e) => setFilters((f) => ({ ...f, city: e.target.value }))}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
            >
              {['All','Jaipur','Bagru','VKI'].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              value={filters.minQty}
              onChange={(e) => setFilters((f) => ({ ...f, minQty: e.target.value }))}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
              placeholder="Min kg"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-600">
              No results. Adjust filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
