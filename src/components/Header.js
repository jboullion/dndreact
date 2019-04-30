import React from 'react';

import HeaderCSS from './Header.module.css';


const header = () => {

	console.log(HeaderCSS);

	return <header id={HeaderCSS.header} className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
			<div className="container">
				<div className={`navbar-brand ${HeaderCSS.navbarBrand}`} href="/">
					<img src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="D and D Tools" />
					D&amp;D Tools
				</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className={`collapse navbar-collapse ${HeaderCSS.navbarCollapse}`} id="nav-menu">
				
					<ul className="navbar-nav">
						<li className={`nav-item ${HeaderCSS.navItem}`}>
							<button className="w-100 btn btn-outline-info create-account" data-toggle="modal" data-target="#create-account-modal">Create Account</button>
						</li>
						<li className={`nav-item ${HeaderCSS.navItem}`}>
							<button className="w-100 btn btn-outline-success sign-in" data-toggle="modal" data-target="#login-modal">Sign In</button>
						</li>

					</ul>

				</div>
			</div>
		</header>;
}

export default header;