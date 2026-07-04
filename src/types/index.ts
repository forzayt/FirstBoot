export type Platform = 'windows' | 'mac' | 'linux' | 'web';
export type License = 'free' | 'freemium' | 'paid' | 'open-source';

export interface SoftwareEntry {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  tags: string[];
  officialUrl: string;
  downloadPageUrl?: string;
  logo: string;
  platforms: Platform[];
  license: License;
  openSource: boolean;
  featured?: boolean;
}

export type CategoryId =
  | 'browsers'
  | 'development'
  | 'gaming'
  | 'communication'
  | 'media'
  | 'utilities'
  | 'drivers';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: string;
}
