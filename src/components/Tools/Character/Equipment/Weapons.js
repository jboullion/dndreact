import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faPlus } from '@fortawesome/pro-solid-svg-icons'

const weapons = (props) => {

	return <Table striped bordered>
				<thead>
					<tr className="table-dark touch-row" onClick={() => props.toggleWeaponModal(-1)}>
						<th>Weapon <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
						<th className="text-center">+ Hit</th>
						<th className="text-center">Die</th>
						<th className="text-center">Bon</th>
						<th className="text-center">Roll</th>
					</tr>
				</thead>
				<tbody>
					{props.equipment.weapons.map(function(weapon, index){
						return <tr key={index} onClick={() => props.toggleWeaponModal(index)}>
									<th scope="row" className="touch-row">{weapon.name}</th>
								
									<td className="text-center">{weapon.hit>0?'+':''}{weapon.hit}</td>
									<td className="text-center">{weapon.numDice}d{weapon.diceValue}</td>
									<td className="text-center">{weapon.bonus}</td>
									<td className="text-center touch-icon"><FontAwesomeIcon icon={faDiceD20} size="2x"  /></td>
								</tr>;
					})}
				</tbody>
			</Table>;

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
		toggleWeaponModal: (index) => dispatch({type: actionTypes.MODAL_WEAPON, payload: {index}})
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(weapons);