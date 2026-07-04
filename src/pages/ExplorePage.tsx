import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, PackageOpen } from 'lucide-react';
import { searchSoftware } from '@/lib/catalog';
import { CATEGORIES } from '@/data/categories';
import { CategoryTabs } from '@/components/CategoryTabs';
import { SoftwareCard } from '@/components/SoftwareCard';
import type { CategoryId } from '@/types';

export function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [category, setCategory] = useState<string>(searchParams.get('cat') ?? 'all');

  // Sync URL → state on first load
  useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('cat');
    if (q) setQuery(q);
    if (cat) setCategory(cat);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync state → URL
  useEffect(() => {
    const params: Record<string, string> = {};
    if (query) params.q = query;
    if (category !== 'all') params.cat = category;
    setSearchParams(params, { replace: true });
  }, [query, category, setSearchParams]);

  const results = useMemo(() => {
    return searchSoftware(query, category as CategoryId | 'all');
  }, [query, category]);

  const clearSearch = () => {
    setQuery('');
    setCategory('all');
  };

  const hasFilter = query.length > 0 || category !== 'all';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-text tracking-tight mb-1">Explore Software</h1>
        <p className="text-sm text-text-muted">
          {results.length} {results.length === 1 ? 'app' : 'apps'} available · all linking to official sources
        </p>
      </div>

      {/* Search + Filters */}
      <div className="mb-6 space-y-3">
        {/* Search bar */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="explore-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by name, tag, or description…"
            className="w-full pl-9 pr-9 py-2.5 rounded border border-border bg-bg-surface text-sm text-text
                       placeholder:text-text-faint outline-none focus:border-accent/50 transition-colors"
            autoComplete="off"
            spellCheck={false}
            aria-label="Search software"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-faint hover:text-text-muted transition-colors"
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <CategoryTabs
          categories={CATEGORIES}
          active={category}
          onChange={setCategory}
        />
      </div>

      {/* Active filter badge */}
      {hasFilter && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-text-muted">
            {results.length} result{results.length !== 1 ? 's' : ''}
            {query && <> for "<strong className="text-text">{query}</strong>"</>}
            {category !== 'all' && <> in <strong className="text-text">{CATEGORIES.find(c => c.id === category)?.label}</strong></>}
          </span>
          <button
            onClick={clearSearch}
            className="text-2xs text-text-faint hover:text-accent transition-colors flex items-center gap-1"
            aria-label="Clear all filters"
          >
            <X size={10} />
            Clear
          </button>
        </div>
      )}

      {/* Results */}
      {results.length > 0 ? (
        <section aria-label="Software results">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {results.map((entry) => (
              <SoftwareCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      ) : (
        /* Empty state */
        <div
          className="flex flex-col items-center justify-center py-24 text-center"
          role="status"
          aria-live="polite"
        >
          <PackageOpen size={32} className="text-text-faint mb-4" aria-hidden="true" />
          <p className="text-sm font-medium text-text-muted mb-1">No software found</p>
          <p className="text-xs text-text-faint mb-4">
            Try a different search term or browse all categories.
          </p>
          <button
            onClick={clearSearch}
            className="px-4 py-2 rounded border border-border text-xs text-text-muted hover:text-text
                       hover:border-border-strong transition-all"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
