/**
 * TODO: Update the faIcon in the Roll slot to match the dice value selected.
 * TODO: Show an animation when the dice is rolled. Either on the roll or on the die
 * TODO: Make the Weapon Dice Value a dropdown
 * 
 */
import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD4, faDiceD6, faDiceD8, faDiceD10, faDiceD12, faDiceD20, faPlus } from '@fortawesome/pro-solid-svg-icons'

import { calcProf } from '../../../../functions'

import RollResult from '../../RollResult';
import DamageResult from '../../DamageResult';

const weapons = (props) => {

	let faIcon = [];
	faIcon[4] = faDiceD4;
	faIcon[6] = faDiceD6;
	faIcon[8] = faDiceD8;
	faIcon[10] = faDiceD10;
	faIcon[12] = faDiceD12;
	faIcon[20] = faDiceD20;


	return <div >
			<RollResult rollResult={props.rollResult} profBonus={props.profBonus} />
			<DamageResult rollResult={props.rollResult} profBonus={props.profBonus} />

			<Table striped bordered>
				<thead>
					<tr className="table-dark touch-row" onClick={() => props.toggleWeaponModal(-1)}>
						<th>Weapon <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
						<th className="text-center">+ Hit</th>
						<th className="text-center">Die</th>
						<th className="text-center">+ Dam</th>
						<th className="text-center">Roll</th>
					</tr>
				</thead>
				<tbody>
					{props.equipment.weapons.map(function(weapon, index){
						return <tr key={index} >
									<th scope="row" className="touch-row" onClick={() => props.toggleWeaponModal(index)}>{weapon.name}</th>
								
									<td className="text-center">{weapon.hit>0?'+':''}{weapon.hit}</td>
									<td className="text-center">{weapon.numDice}d{weapon.diceValue}</td>
									<td className="text-center">{weapon.bonus}</td>
									<td className="text-center touch-icon" onClick={(e) => props.rollWeapon(weapon)}><FontAwesomeIcon icon={faIcon[weapon.diceValue]} size="2x"  /></td>
								</tr>;
					})}
				</tbody>
			</Table>
		</div>;

}


const mapStateToProps = state => {
	return {
		equipment: state.equipment,
		stats: state.stats.stats,
		skills: state.skills.skills,
		rollResult: state.equipment.recentWeaponRoll,
		profBonus: calcProf(state.character)
	};
}


const mapDispatchToProps = dispatch => {
	return {
		toggleWeaponModal: (index) => dispatch({type: actionTypes.MODAL_WEAPON, payload: {index}}),
		rollWeapon: (weapon) => dispatch({type: actionTypes.WEAPON_ROLL, payload: {weapon}})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(weapons);