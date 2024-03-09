export const menuItems = [
  {
    id: 1,
    title: 'Nosotros',
    url: '#nosotros'
  },
  {
    id: 2,
    title: 'Proyectos',
    url: '#proyectos'
  },
  {
    id: 3,
    title: 'Contact',
    url: '/contact'
  }
] as const
export type MenuItem = typeof menuItems[number]
