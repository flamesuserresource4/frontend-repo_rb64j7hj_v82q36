import HeroSection from './components/HeroSection';
import PilotStats from './components/PilotStats';
import FeatureGrid from './components/FeatureGrid';
import CTASection from './components/CTASection';

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-600" />
          <span className="text-lg font-bold tracking-tight text-gray-900">MedhaVerse</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#stats" className="hover:text-gray-900">Pilot KPIs</a>
          <a href="#get-started" className="rounded-md bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-700">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MedhaVerse — Pilot in Jaipur (Sitapura, Bagru, VKI)</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="mailto:ops@medhaverse.example" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <PilotStats />
        <FeatureGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
