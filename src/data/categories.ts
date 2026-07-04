import type { Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'browsers',
    label: 'Browsers',
    description: 'Web browsers for everyday browsing',
    icon: 'Globe',
  },
  {
    id: 'development',
    label: 'Development',
    description: 'Code editors, runtimes, and developer tools',
    icon: 'Code2',
  },
  {
    id: 'gaming',
    label: 'Gaming',
    description: 'Game launchers and gaming platforms',
    icon: 'Gamepad2',
  },
  {
    id: 'communication',
    label: 'Communication',
    description: 'Messaging, chat, and video calling apps',
    icon: 'MessageSquare',
  },
  {
    id: 'media',
    label: 'Media',
    description: 'Video players, audio tools, and image editors',
    icon: 'Play',
  },
  {
    id: 'utilities',
    label: 'Utilities',
    description: 'Essential system tools and productivity apps',
    icon: 'Wrench',
  },
  {
    id: 'drivers',
    label: 'Drivers',
    description: 'Hardware drivers and device software portals',
    icon: 'Cpu',
  },
];
