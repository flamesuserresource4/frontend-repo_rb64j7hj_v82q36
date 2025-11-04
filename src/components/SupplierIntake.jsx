import { useState } from 'react';
import { Phone, CheckCircle2, Upload, Building2, Image, ArrowRight } from 'lucide-react';

const REQUIRED_PHOTO_COUNT = 3;

export default function SupplierIntake() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    phone: '',
    otp: '',
    companyName: '',
    contactName: '',
    address: '',
    wasteType: 'HDPE',
    qtyKg: '',
    preferredPickup: 'Weekdays',
    photos: [],
  });
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    setForm((f) => ({ ...f, photos: files }));
  };

  const requestOtp = (e) => {
    e.preventDefault();
    if (!form.phone || form.phone.length < 10) return;
    setStep(2);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (form.otp.length >= 4) {
      setVerified(true);
      setStep(3);
    }
  };

  const canSubmit = () => {
    return (
      verified &&
      form.companyName &&
      form.contactName &&
      form.address &&
      form.qtyKg &&
      Number(form.qtyKg) > 0 &&
      (form.photos?.length || 0) >= REQUIRED_PHOTO_COUNT
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit()) return;
    setSubmitted(true);
  };

  return (
    <section id="supplier-intake" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Supplier Quick Intake</h2>
          <p className="mt-1 text-sm text-gray-600">Minimal fields. Phone OTP, 3 photos, waste type, and quantity.</p>
        </div>

        {!submitted ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 grid grid-cols-3 gap-3 text-sm">
              <div className={`rounded-lg px-3 py-2 ${step >= 1 ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-500'}`}>1 · Phone</div>
              <div className={`rounded-lg px-3 py-2 ${step >= 2 ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-500'}`}>2 · Verify</div>
              <div className={`rounded-lg px-3 py-2 ${step >= 3 ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-500'}`}>3 · Details</div>
            </div>

            {step === 1 && (
              <form onSubmit={requestOtp} className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Phone Number</span>
                  <div className="mt-1 flex items-center gap-3">
                    <div className="relative flex-1">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                    >
                      <Phone className="h-4 w-4" /> Send OTP
                    </button>
                  </div>
                </label>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={verifyOtp} className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Enter OTP</span>
                  <div className="mt-1 flex items-center gap-3">
                    <input
                      name="otp"
                      value={form.otp}
                      onChange={handleChange}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="4-6 digit code"
                      className="w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                    >
                      <CheckCircle2 className="h-4 w-4" /> Verify
                    </button>
                  </div>
                </label>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Company Name</span>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="ABC Plastics Pvt Ltd"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Contact Name</span>
                  <input
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Rahul Sharma"
                    required
                  />
                </label>
                <label className="md:col-span-2 block">
                  <span className="text-sm font-medium text-gray-700">Address</span>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Sitapura Industrial Area, Jaipur"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Waste Type</span>
                  <select
                    name="wasteType"
                    value={form.wasteType}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  >
                    {['HDPE','LDPE','PET','PP','Ferrous','NonFerrous','Textile-Cotton','Textile-Synthetic','E-Waste (non-hazard)','Stone Slurry','Paper'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Approx Quantity (kg)</span>
                  <input
                    name="qtyKg"
                    value={form.qtyKg}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="1000"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Preferred Pickup</span>
                  <select
                    name="preferredPickup"
                    value={form.preferredPickup}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  >
                    {['Weekdays','Weekends','Any'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="md:col-span-2 block">
                  <span className="text-sm font-medium text-gray-700">Photos (min {REQUIRED_PHOTO_COUNT})</span>
                  <div className="mt-1 flex flex-col items-start justify-between gap-3 rounded-lg border border-dashed border-gray-300 p-4 sm:flex-row">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Image className="h-4 w-4" /> Add wide pile, close-up, and label/packaging
                    </div>
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                      <Upload className="h-4 w-4" /> Upload
                      <input onChange={handleFiles} multiple accept="image/*" type="file" className="hidden" />
                    </label>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {form.photos?.map((f, idx) => (
                      <div key={idx} className="rounded-lg border border-gray-200 p-2 text-xs text-gray-600">
                        {f.name}
                      </div>
                    ))}
                  </div>
                </label>
                <div className="md:col-span-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="h-4 w-4" /> Jaipur pilot geography
                  </div>
                  <button
                    type="submit"
                    disabled={!canSubmit()}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white ${canSubmit() ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-300 cursor-not-allowed'}`}
                  >
                    Submit Listing <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <div>
                <h3 className="text-lg font-semibold">Listing submitted</h3>
                <p className="mt-1 text-sm">Your SupplierID and Listing have been created with status: "Contacted". Our field inspector will reach out to schedule a verification visit.</p>
                <div className="mt-3 text-sm">
                  <div><span className="font-medium">Company:</span> {form.companyName}</div>
                  <div><span className="font-medium">Waste:</span> {form.wasteType} · {form.qtyKg} kg</div>
                  <div><span className="font-medium">Photos:</span> {form.photos?.length || 0} uploaded</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
