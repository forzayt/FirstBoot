import {
  Globe, Code2, Gamepad2, MessageSquare, Play, Wrench, Cpu,
} from 'lucide-react';
import type { Category } from '@/types';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Code2,
  Gamepad2,
  MessageSquare,
  Play,
  Wrench,
  Cpu,
};

interface CategoryTabsProps {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

export function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  return (
    <div
      className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-0.5"
      role="tablist"
      aria-label="Software categories"
    >
      <button
        role="tab"
        aria-selected={active === 'all'}
        id="tab-all"
        onClick={() => onChange('all')}
        className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all
          ${active === 'all'
            ? 'bg-accent/15 text-accent border border-accent/30'
            : 'text-text-muted hover:text-text border border-transparent hover:border-border'
          }`}
      >
        All
      </button>
      {categories.map((cat) => {
        const Icon = ICON_MAP[cat.icon] ?? Globe;
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            id={`tab-${cat.id}`}
            onClick={() => onChange(cat.id)}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all
              ${isActive
                ? 'bg-accent/15 text-accent border border-accent/30'
                : 'text-text-muted hover:text-text border border-transparent hover:border-border'
              }`}
          >
            <Icon size={12} aria-hidden="true" />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
