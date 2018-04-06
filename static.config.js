import speakers from './data/speakers.json'
import talks from './data/talks.json'
import workshops from './data/workshops.json'

export default {
  getSiteData: () => ({
    title: 'Fachtagung IGWien',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/pages/Home',
    },
    {
      path: '/workshops',
      component: 'src/pages/Workshops',
      getData: () => ({
        workshops,
      }),
    },
    {
      path: '/vortraege',
      component: 'src/pages/Vortraege',
      getData: () => ({
        talks,
      }),
    },
    {
      path: '/vortragende',
      component: 'src/pages/Vortragende',
      getData: () => ({
        speakers,
      }),
    },
    {
      path: '/programm',
      component: 'src/pages/Programm',
    },
    {
      path: '/anmeldung',
      component: 'src/pages/Anmeldung',
    },
    {
      is404: true,
      component: 'src/pages/404',
    },
  ],
}
