import React from 'react';
import speakers from './data/speakers';
import talks from './data/talks';
import workshops from './data/workshops';

export default {
	siteRoot: 'https://tagung.igwien.at/',
	stagingSiteRoot: 'http://localhost:3000',
	paths: {
		dist: 'public',
		public: 'assets', // The public directory (files copied to dist during build)
	},
	// eslint-disable-next-line
	Document: ({Html, Head, Body, children, siteData, renderMeta}) => (
		<Html lang="de">
			<Head>
				<meta charSet="UTF-8" />
				<title>{siteData.siteTitle}</title>
				<meta name="description" content={siteData.metaDescription} />
				<meta name="keywords" content={siteData.metaKeywords} />
				<meta name="author" content={siteData.metaAuthor} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<Body className="bg-grey-light p-2 lg:p-8 min-h-screen">
				<div className="bg-white">{children}</div>
			</Body>
		</Html>
	),
	getSiteData: () => {
		return {
			siteTitle: 'Fachtagung IGWien',
			metaDescription: 'Fachtagung IGWien',
			metaKeywords: 'fachtagung igwien',
			metaAuthor: 'IGWien',
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
