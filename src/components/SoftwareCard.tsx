import { ExternalLink, Globe } from 'lucide-react';
import type { SoftwareEntry } from '@/types';

interface SoftwareCardProps {
  entry: SoftwareEntry;
}

const LICENSE_LABEL: Record<string, string> = {
  'free': 'Free',
  'freemium': 'Freemium',
  'paid': 'Paid',
  'open-source': 'Open Source',
};

const LICENSE_COLOR: Record<string, string> = {
  'free': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'freemium': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'paid': 'text-rose-400 bg-rose-400/10 border-rose-400/20',
  'open-source': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
};

export function SoftwareCard({ entry }: SoftwareCardProps) {
  const licenseLabel = LICENSE_LABEL[entry.license] ?? entry.license;
  const licenseColor = LICENSE_COLOR[entry.license] ?? 'text-text-muted bg-bg-overlay border-border';

  const hasDownload = !!entry.downloadPageUrl;
  const hasWebsite = !!entry.officialUrl;

  return (
    <article
      className="group flex items-start gap-3.5 px-4 py-3.5 rounded-md border border-border
                 bg-bg-surface hover:bg-bg-raised hover:border-border-strong transition-all duration-150"
    >
      {/* Logo */}
      <div className="shrink-0 w-9 h-9 rounded bg-bg-overlay border border-border/50 flex items-center justify-center overflow-hidden">
        <img
          src={entry.logo}
          alt={`${entry.name} logo`}
          className="w-6 h-6 object-contain"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = 'none';
            el.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-text-faint"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-sm font-semibold text-text">{entry.name}</h3>
          <span
            className={`inline-flex text-2xs px-1.5 py-0.5 rounded border font-medium ${licenseColor}`}
            aria-label={`License: ${licenseLabel}`}
          >
            {licenseLabel}
          </span>
          {entry.openSource && (
            <span className="text-2xs text-text-faint">OSS</span>
          )}
        </div>
        <p className="text-xs text-text-muted mt-0.5 leading-relaxed line-clamp-2">{entry.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2" aria-label="Tags">
          {entry.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-2xs font-mono text-text-faint bg-bg-overlay border border-border/50 px-1.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-1.5 shrink-0 items-end">
        {hasDownload && (
          <a
            href={entry.downloadPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`download-${entry.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium
                       bg-accent/10 text-accent border border-accent/25
                       hover:bg-accent/20 hover:border-accent/40 transition-all"
            aria-label={`Official download for ${entry.name}`}
          >
            <ExternalLink size={11} aria-hidden="true" />
            Download
          </a>
        )}
        {hasWebsite && (
          <a
            href={entry.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`website-${entry.id}`}
            className="inline-flex items-center gap-1 px-2 py-1 rounded text-2xs
                       text-text-faint hover:text-text-muted transition-colors"
            aria-label={`Official website for ${entry.name}`}
          >
            <Globe size={10} aria-hidden="true" />
            Website
          </a>
        )}
      </div>
    </article>
  );
}
