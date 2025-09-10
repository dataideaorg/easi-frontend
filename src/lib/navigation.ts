// Navigation configuration
export const navigation = [
  { name: 'Home', href: '/', external: false },
  { name: 'About', href: '/about', external: false },
  { name: 'Courses', href: '/courses', external: false },
  { name: 'Training', href: '/training', external: false },
  { name: 'Consultancy', href: '/consultancy', external: false },
  { name: 'Resources', href: '/resources', external: false },
  { name: 'Blog', href: 'https://blog.easi.ac.ug/', external: true },
  { name: 'Contact', href: '/contact', external: false },
] as const;

export type NavigationItem = typeof navigation[number];
