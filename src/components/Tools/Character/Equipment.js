import React from 'react';
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card';

import Weapons from './Equipment/Weapons';
import Armor from './Equipment/Armor';
import Money from './Equipment/Money';
import Gems from './Equipment/Gems';
import WeaponModal from './Equipment/WeaponModal';

const gems = (props) => {

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
		// updateEquipment: (value, index) => dispatch({type: actionTypes.EQUIP_UPDATE, payload: {value, index}}),
		// updateMoney: (value, index) => dispatch({type: actionTypes.EQUIP_MONEY, payload: {value, index}}),
		// toggleWeaponModal: (index) => dispatch({type: actionTypes.MODAL_WEAPON, payload: {index}})
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(gems);