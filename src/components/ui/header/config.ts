export const menuItems = [
  {
    id: 1,
    title: 'Nosotros',
    url: '/about'
  },
  {
    id: 2,
    title: 'Proyectos',
    url: '/projects'
  },
  {
    id: 3,
    title: 'Galeria',
    url: '/gallery/care'
  },
  {
    id: 4,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  }
] as const
export type MenuItem = typeof menuItems[number]
