import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actions/actionTypes'

import AccountModal from '../../components/Modals/AccountModal';
import SigninModal from '../../components/Modals/SigninModal';


class Modals extends Component {

	render() {
		return (
				<div id="modals">
					<AccountModal handleClose={this.props.toggleModal} show={this.props.modal.account} />
					<SigninModal handleClose={this.props.toggleModal} show={this.props.modal.signin}/>
				</div>
		)
	};
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

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
