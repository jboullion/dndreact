import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'

const armor = (props) => {

	return <Table striped bordered>
				<thead>
					<tr className="table-dark touch-row" onClick={() => props.toggleArmorModal(-1)}>
						<th>Armor <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
						<th>Type</th>
						<th>Prof.</th>
						<th>AC</th>
					</tr>
				</thead>
				<tbody>
					{props.equipment.armor.map(function(armor, index){

						return <tr key={index} onClick={() => props.toggleArmorModal(index)}>
									<th className="touch-row">{armor.name}</th>
									<td>{armor.type}</td>
									<td>{armor.prof}</td>
									<td>{armor.ac}</td>
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
		toggleArmorModal: (index) => dispatch({type: actionTypes.MODAL_ARMOR, payload: {index}})
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(armor);