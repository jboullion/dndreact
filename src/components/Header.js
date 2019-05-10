import React from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import HeaderCSS from './Header.module.css';

import logo from '../img/logo.svg';

const header = (props) => {
	return <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" id={HeaderCSS.header} className="mb-1">
				<Container className={HeaderCSS.container}>
					<Navbar.Brand className={HeaderCSS.navbarBrand}>
						<img src={logo} width="30" height="30" className="d-inline-block align-top" alt="D and D Tools" />
						D&amp;D Tools
					</Navbar.Brand>
					
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className={'justify-content-end'}>
						<Button className={HeaderCSS.btnSpace} variant="outline-info" onClick={() => props.toggleModal('account')}>Create Account</Button>
						<Button className={HeaderCSS.btnSpace} variant="outline-success" onClick={() => props.toggleModal('signin')}>Sign In</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>;
}

const mapStateToProps = state => {
	return {
		modal: state.modal,
		// stats: state.stats.stats,
		// skills: state.skills.skills
	};
}


const mapDispatchToProps = dispatch => {
	return {
		toggleModal: (index) => dispatch({type: actionTypes.MODAL_TOGGLE, payload: {index}}),
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(header);
