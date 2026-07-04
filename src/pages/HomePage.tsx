import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { getFeaturedSoftware, getSoftwareByCategory } from '@/lib/catalog';
import { CATEGORIES } from '@/data/categories';
import { SoftwareCard } from '@/components/SoftwareCard';
import {
  Globe, Code2, Gamepad2, MessageSquare, Play, Wrench, Cpu,
} from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, React.ElementType<any>> = {
  Globe, Code2, Gamepad2, MessageSquare, Play, Wrench, Cpu,
};

const featured = getFeaturedSoftware();

export function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* Hero / Tagline */}
      <section className="mb-12" aria-labelledby="hero-heading">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-2xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded">
              <ShieldCheck size={10} aria-hidden="true" />
              Official sources only · No mirrors
            </span>
          </div>
          <h1
            id="hero-heading"
            className="text-2xl sm:text-3xl font-bold text-text leading-snug tracking-tight"
          >
            Fresh Windows Install?<br />
            <span className="text-text-muted font-normal">Everything you need is here.</span>
          </h1>
          <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-lg">
            FirstBoot is a curated directory of essential Windows software with direct links to
            official sources — no fake download sites, no bundled installers, no searching required.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <Link
              to="/explore"
              id="explore-cta"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent text-white text-sm font-medium
                         hover:bg-accent-hover transition-colors"
            >
              Explore all software
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <button
              onClick={() => {
                const btn = document.getElementById('header-search-btn') as HTMLButtonElement;
                btn?.click();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border text-sm text-text-muted
                         hover:text-text hover:border-border-strong transition-all"
            >
              <Search size={13} aria-hidden="true" />
              Quick search
            </button>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="mb-12" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-xs font-semibold uppercase tracking-widest text-text-faint mb-4">
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? Globe;
            const count = getSoftwareByCategory(cat.id).length;
            return (
              <Link
                key={cat.id}
                to={`/explore?cat=${cat.id}`}
                id={`cat-link-${cat.id}`}
                className="flex flex-col gap-2 p-3 rounded-md border border-border bg-bg-surface
                           hover:bg-bg-raised hover:border-border-strong transition-all group"
                aria-label={`Browse ${cat.label} (${count} apps)`}
              >
                <Icon size={16} className="text-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-text group-hover:text-text leading-tight">{cat.label}</p>
                  <p className="text-2xs text-text-faint mt-0.5">{count} apps</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-text-faint whitespace-nowrap">
          Featured Essentials
        </h2>
        <div className="flex-1 h-px bg-border" />
        <Link
          to="/explore"
          className="text-2xs text-text-faint hover:text-accent transition-colors whitespace-nowrap flex items-center gap-1"
        >
          View all <ArrowRight size={10} aria-hidden="true" />
        </Link>
      </div>

      {/* Featured software grid */}
      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="sr-only">Featured software</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {featured.map((entry) => (
            <SoftwareCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

    </div>
  );
}
