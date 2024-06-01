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
  // {
  //   id: 4,
  //   title: 'Blog',
  //   url: '/blog'
  // },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  }
] as const

export type MenuItem = (typeof menuItems)[number]

export const SOCIAL_ITEMS = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com/InstitutoEducaTec',
    imgUrl: '/images/icons/icon-fb.svg'
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/instituto_educatec',
    imgUrl: '/images/icons/ig.svg'
  }
] as const
