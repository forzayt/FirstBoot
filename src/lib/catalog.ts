import type { SoftwareEntry, CategoryId } from '@/types';

import browsersData from '@/data/categories/browsers.json';
import developmentData from '@/data/categories/development.json';
import gamingData from '@/data/categories/gaming.json';
import communicationData from '@/data/categories/communication.json';
import mediaData from '@/data/categories/media.json';
import utilitiesData from '@/data/categories/utilities.json';
import driversData from '@/data/categories/drivers.json';

const ALL_DATA = [
  ...browsersData,
  ...developmentData,
  ...gamingData,
  ...communicationData,
  ...mediaData,
  ...utilitiesData,
  ...driversData,
] as SoftwareEntry[];

export function getAllSoftware(): SoftwareEntry[] {
  return ALL_DATA;
}

export function getSoftwareByCategory(categoryId: CategoryId): SoftwareEntry[] {
  return ALL_DATA.filter((s) => s.category === categoryId);
}

export function getFeaturedSoftware(): SoftwareEntry[] {
  return ALL_DATA.filter((s) => s.featured === true);
}

export function searchSoftware(query: string, categoryId?: CategoryId | 'all'): SoftwareEntry[] {
  const q = query.toLowerCase().trim();
  let results = categoryId && categoryId !== 'all'
    ? getSoftwareByCategory(categoryId)
    : ALL_DATA;

  if (!q) return results;

  return results.filter((s) => {
    return (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q)) ||
      s.category.toLowerCase().includes(q)
    );
  });
}
