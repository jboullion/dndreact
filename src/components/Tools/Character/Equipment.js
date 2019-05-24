import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actionTypes'

import Card from 'react-bootstrap/Card';

import Weapons from './Equipment/Weapons';
import Armor from './Equipment/Armor';
import Money from './Equipment/Money';
import Gems from './Equipment/Gems';

import WeaponModal from './Equipment/WeaponModal';
import ArmorModal from './Equipment/ArmorModal';
import GemModal from './Equipment/GemModal';

const equipment = (props) => {

	return <div className="mb-5 tab-pane" id="character-equipment">

				<Card className="w-100">
					<Card.Body>
						<legend>Equipment (Wearing)</legend>

						<Weapons />

						<Armor />

						<Money />

						<Gems />

					</Card.Body>
				</Card>

				<WeaponModal handleClose={props.toggleWeaponModal} show={props.equipment.weaponModal}/>
				<ArmorModal handleClose={props.toggleArmorModal} show={props.equipment.armorModal}/>
				<GemModal handleClose={props.toggleGemModal} show={props.equipment.gemModal}/>
			</div>;

}


const mapStateToProps = state => {
	return {
		equipment: state.equipment,
		// stats: state.stats.stats,
		// skills: state.skills.skills
	};
}


const mapDispatchToProps = dispatch => {
	return {
		toggleWeaponModal: (index) => dispatch({type: actionTypes.MODAL_WEAPON, payload: {index}}),
		toggleArmorModal: (index) => dispatch({type: actionTypes.MODAL_ARMOR, payload: {index}}),
		toggleGemModal: (index) => dispatch({type: actionTypes.MODAL_GEMS, payload: {index}})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(equipment);