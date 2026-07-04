import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Github, X, ArrowRight } from 'lucide-react';
import { searchSoftware } from '@/lib/catalog';
import type { SoftwareEntry } from '@/types';

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SoftwareEntry[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setSearchOpen(false);
    setQuery('');
  }, [location.pathname]);

  // Cmd/Ctrl + K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      setResults(searchSoftware(query).slice(0, 8));
      setActiveIdx(-1);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter') {
      if (activeIdx >= 0 && results[activeIdx]) {
        window.open(results[activeIdx].downloadPageUrl || results[activeIdx].officialUrl, '_blank', 'noopener');
        setSearchOpen(false);
      } else if (query.trim()) {
        navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
        setSearchOpen(false);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg-base/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center gap-6">
          {/* Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="FirstBoot home"
          >
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="13" height="13" rx="2" fill="#6366f1" />
              <rect x="17" y="2" width="13" height="13" rx="2" fill="#6366f1" opacity="0.7" />
              <rect x="2" y="17" width="13" height="13" rx="2" fill="#6366f1" opacity="0.7" />
              <rect x="17" y="17" width="13" height="13" rx="2" fill="#6366f1" opacity="0.4" />
            </svg>
            <span className="font-semibold text-sm tracking-tight text-text group-hover:text-accent-hover transition-colors">
              FirstBoot
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            <Link
              to="/explore"
              className="px-2.5 py-1 text-sm text-text-muted hover:text-text rounded transition-colors"
            >
              Explore
            </Link>
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Search trigger */}
          <button
            id="header-search-btn"
            onClick={() => setSearchOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded border border-border bg-bg-surface
                       text-text-muted text-xs hover:border-border-strong hover:text-text transition-all
                       cursor-pointer min-w-[160px]"
            aria-label="Search software (Ctrl+K)"
          >
            <Search size={12} aria-hidden="true" />
            <span>Search software…</span>
            <kbd className="ml-auto font-mono text-2xs bg-bg-overlay px-1 py-0.5 rounded text-text-faint border border-border">
              ⌃K
            </kbd>
          </button>

          {/* Mobile search icon */}
          <button
            id="mobile-search-btn"
            onClick={() => setSearchOpen(true)}
            className="sm:hidden p-1.5 text-text-muted hover:text-text transition-colors"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/forzayt/OpenPath"
            target="_blank"
            rel="noopener noreferrer"
            id="github-link"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-muted hover:text-text
                       border border-border hover:border-border-strong rounded transition-all"
            aria-label="View on GitHub"
          >
            <Github size={12} aria-hidden="true" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </header>

      {/* Search Palette Overlay */}
      {searchOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Software search"
          onClick={(e) => {
            if (e.target === overlayRef.current) setSearchOpen(false);
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

          {/* Palette */}
          <div className="relative w-full max-w-xl bg-bg-surface border border-border rounded-lg shadow-2xl overflow-hidden">
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search size={15} className="text-text-muted shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                id="search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search browsers, editors, tools…"
                className="flex-1 bg-transparent text-sm text-text placeholder:text-text-faint outline-none"
                autoComplete="off"
                spellCheck={false}
                aria-autocomplete="list"
                aria-expanded={results.length > 0}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-text-faint hover:text-text-muted transition-colors p-1"
                aria-label="Close search"
              >
                <X size={14} />
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <ul role="listbox" className="max-h-80 overflow-y-auto divide-y divide-border/50">
                {results.map((item, idx) => (
                  <li key={item.id} role="option" aria-selected={activeIdx === idx}>
                    <a
                      href={item.downloadPageUrl || item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-2.5 group transition-colors ${
                        activeIdx === idx ? 'bg-bg-overlay' : 'hover:bg-bg-overlay'
                      }`}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onClick={() => setSearchOpen(false)}
                    >
                      <img
                        src={item.logo}
                        alt=""
                        aria-hidden="true"
                        className="w-7 h-7 object-contain rounded shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-text truncate">{item.name}</p>
                        <p className="text-xs text-text-faint truncate">{item.description}</p>
                      </div>
                      <ArrowRight size={13} className="text-text-faint shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Empty / hint state */}
            {query.length > 0 && results.length === 0 && (
              <div className="px-4 py-6 text-center text-sm text-text-faint">
                No software found for "<span className="text-text-muted">{query}</span>"
              </div>
            )}

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-border flex items-center gap-3 text-2xs text-text-faint font-mono">
              <span><kbd className="bg-bg-overlay border border-border rounded px-1">↑↓</kbd> navigate</span>
              <span><kbd className="bg-bg-overlay border border-border rounded px-1">↵</kbd> open</span>
              <span><kbd className="bg-bg-overlay border border-border rounded px-1">Esc</kbd> close</span>
              {query.trim() && (
                <button
                  onClick={() => {
                    navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
                    setSearchOpen(false);
                  }}
                  className="ml-auto text-accent hover:text-accent-hover transition-colors text-2xs"
                >
                  Show all results →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
