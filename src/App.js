import React from 'react';
import {Router, Link, Route} from 'react-static';
import {hot} from 'react-hot-loader';

import Routes from 'react-static-routes'; // eslint-disable-line

import logo from './images/logo20.png';

import './main.css';

const App = () => (
	<Router>
		<div id="page-wrapper">
			<div id="header">
				<span className="image">
					<img src={logo} alt="" />
				</span>
				<nav id="nav">
					<Route
						render={({location: {pathname}}) => (
							<ul>
								<li
									className={
										pathname === '/' ? 'current' : ''
									}>
									<Link to="/">Home</Link>
								</li>
								<li
									className={
										pathname.startsWith('/programm')
											? 'current'
											: ''
									}>
									<Link to="/programm">Programm</Link>
								</li>
								<li
									className={
										pathname.startsWith('/vortraege')
											? 'current'
											: ''
									}>
									<Link to="/vortraege">Vorträge</Link>
								</li>
								<li
									className={
										pathname.startsWith('/workshops')
											? 'current'
											: ''
									}>
									<Link to="/workshops">Workshops</Link>
								</li>
								<li
									className={
										pathname.startsWith('/vortragende')
											? 'current'
											: ''
									}>
									<Link to="/vortragende">Vortragende</Link>
								</li>
								<li
									className={
										pathname.startsWith('/anmeldung')
											? 'current'
											: ''
									}>
									<Link to="/anmeldung">Anmeldung</Link>
								</li>
							</ul>
						)}
					/>
				</nav>
			</div>
			<Routes />
			<div id="footer">
				<div className="container">
					<div className="row">
						<section className="3u 6u(narrower) 12u$(mobilep)" />
						<section className="6u 12u(narrower) text-center">
							<p>
								<Link to="/impressum">Impressum</Link>{' '}
								<Link to="/datenschutzerklaerung">
									Datenschutzerklärung
								</Link>
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	</Router>
);

export default hot(module)(App);
