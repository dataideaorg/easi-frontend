// Navigation item types
export interface NavigationSubItem {
  name: string;
  href: string;
  external: boolean;
}

export interface NavigationItemWithDropdown {
  name: string;
  href: string;
  external: boolean;
  hasDropdown: true;
  items: NavigationSubItem[];
}

export interface NavigationItemWithoutDropdown {
  name: string;
  href: string;
  external: boolean;
  hasDropdown?: false;
}

export type NavigationItem = NavigationItemWithDropdown | NavigationItemWithoutDropdown;

// Navigation configuration
export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', external: false },
  { name: 'About', href: '/about/', external: false },
  { 
    name: 'Services', 
    href: '#', 
    external: false,
    hasDropdown: true,
    items: [
      { name: 'Courses', href: '/courses/', external: false },
      { name: 'Training', href: '/training/', external: false },
      { name: 'Consultancy', href: '/consultancy/', external: false },
    ]
  },
  { name: 'Gallery', href: '/gallery', external: false },
  { 
    name: 'Resources', 
    href: '#', 
    external: false,
    hasDropdown: true,
    items: [
      { name: 'Blog', href: 'https://blog.easi.ac.ug/', external: true },
      { name: 'Others', href: '/resources/', external: false },
    ]
  },
  { name: 'Contact', href: '/contact/', external: false },
];
