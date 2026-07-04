import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="13" height="13" rx="2" fill="#6366f1" />
                <rect x="17" y="2" width="13" height="13" rx="2" fill="#6366f1" opacity="0.7" />
                <rect x="2" y="17" width="13" height="13" rx="2" fill="#6366f1" opacity="0.7" />
                <rect x="17" y="17" width="13" height="13" rx="2" fill="#6366f1" opacity="0.4" />
              </svg>
              <span className="text-sm font-medium text-text">FirstBoot</span>
            </div>
            <p className="text-xs text-text-faint">
              Open-source Windows software directory.
            </p>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-border bg-bg-surface">
            <ShieldCheck size={12} className="text-accent" aria-hidden="true" />
            <span className="text-xs text-text-muted font-mono">
              No mirrors. No bundled installers. Official sources only.
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-2xs text-text-faint">
            FirstBoot does not host, distribute, or endorse any software. All links lead to official vendor pages.
          </p>
          <nav className="flex items-center gap-4" aria-label="Footer navigation">
            <Link to="/" className="text-2xs text-text-faint hover:text-text-muted transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-2xs text-text-faint hover:text-text-muted transition-colors">
              Explore
            </Link>
            <a
              href="https://github.com/forzayt/OpenPath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xs text-text-faint hover:text-text-muted transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
