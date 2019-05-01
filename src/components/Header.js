import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import HeaderCSS from './Header.module.css';

const header = (props) => {
	return <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" id={HeaderCSS.header} className="mb-1">
				<Container className={HeaderCSS.container}>
					<Navbar.Brand className={HeaderCSS.navbarBrand}>
						<img src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="D and D Tools" />
						D&amp;D Tools
					</Navbar.Brand>
					
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className={'justify-content-end'}>
						<Button className={HeaderCSS.btnSpace} variant="outline-info" onClick={props.toggleAccount}>Create Account</Button>
						<Button className={HeaderCSS.btnSpace} variant="outline-success" onClick={props.toggleSignin}>Sign In</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>;
}

export default header;