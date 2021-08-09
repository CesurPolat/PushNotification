export const sideNavItemsAll = [
  {
    title: 'İŞ AKIŞI',
    url: null,
    type: 'seperator',
    roles: ['admin','manager' , 'finance'],
  },
  {
    title: 'İş Emri oluştur',
    url: '/is-emri/yeni',
    type: 'menu-item',
    roles: ['admin','manager'],
  },
  {
    title: 'İş Emirleri',
    url: '/is-emri/liste',
    type: 'menu-item',
    roles: ['admin','manager'],
  },
  {
    title: 'TANIMLAMALAR',
    url: null,
    type: 'seperator',
    roles: ['admin','manager' , 'finance'],
  },
  {
    title: 'Müşteriler',
    url: '/musteri/liste',
    type: 'menu-item',
    roles: ['admin','manager'],
  },
  {
    title: 'Personeller',
    url: '/personel/liste',
    type: 'menu-item',
    roles: ['admin'],
  },
  {
    title: 'Araclar',
    url: '/arac/liste',
    type: 'menu-item',
    roles: ['admin', 'manager'],
  },
  {
    title: 'Arıza Tanımlamaları',
    url: 'is-tanim',
    type: 'sub-menu',
    roles: ['admin', 'manager'],
    menuItems: [
      {
        title: 'Arıza Türleri',
        url: '/is-tanim/ariza-turleri',
      },
      {
        title: 'Arıza Talepleri',
        url: '/is-tanim/ariza-talepleri',
      }
    ]
  },
  {
    title: 'Ayarlar',
    url: 'ayarlar',
    type: 'sub-menu',
    roles: ['admin'],
    menuItems: [
      {
        title: 'Rol - Yetki',
        url: '/ayarlar/rol-yetki',
      },
      {
        title: 'İş Durumları',
        url: '/ayarlar/is-durumlari',
      }
    ]
  },
  {
    title: 'Muha',
    url: 'ayarlar',
    type: 'menu-item',
    roles: ['muhasebe'],
    menuItems: [
      {
        title: 'test1 - muhasebe',
        url: '/ayarlar/muha',
      },
      {
        title: 'test2 - muhasebe',
        url: '/ayarlar/muha2',
      }
    ]
  }
]
