import speakers from './data/speakers';
import talks from './data/talks';
import workshops from './data/workshops';

export default {
	siteRoot: 'https://tagung.igwien.at',
	stagingSiteRoot: 'http://localhost:3000',
	paths: {
		dist: 'public',
		public: 'assets', // The public directory (files copied to dist during build)
	},
	getSiteData: () => {
		return {
			title: 'Fachtagung IGWien',
		};
	},
	getRoutes: async () => [
		{
			path: '/',
			component: 'src/pages/Home',
		},
		{
			path: '/workshops',
			component: 'src/pages/Workshops',
			getData: () => {
				return {
					workshops,
				};
			},
		},
		{
			path: '/vortraege',
			component: 'src/pages/Vortraege',
			getData: () => {
				return {
					talks,
				};
			},
		},
		{
			path: '/vortragende',
			component: 'src/pages/Vortragende',
			getData: () => {
				return {
					speakers,
				};
			},
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
};
