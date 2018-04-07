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
								<li className={pathname === '/' && 'current'}>
									<Link to="/">Home</Link>
								</li>
								<li
									className={
										pathname === '/programm' && 'current'
									}>
									<Link to="/programm">Programm</Link>
								</li>
								<li
									className={
										pathname === '/workshops' && 'current'
									}>
									<Link to="/workshops">Workshops</Link>
								</li>
								<li
									className={
										pathname === '/vortraege' && 'current'
									}>
									<Link to="/vortraege">Vorträge</Link>
								</li>
								<li
									className={
										pathname === '/vortragende' && 'current'
									}>
									<Link to="/vortragende">Vortragende</Link>
								</li>
								<li
									className={
										pathname === '/anmeldung' && 'current'
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
						<section className="6u 12u(narrower)">
							<p>
								IGWien<br />Institut für Integrative
								Gestalttherapie Wien<br />
								Kaiserstraße 74/11, A-1070 Wien<br />Tel +43 1
								47 80 925<br />www.igwien.at
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	</Router>
);

export default hot(module)(App);
