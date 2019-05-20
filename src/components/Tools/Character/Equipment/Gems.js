import React from 'react';
import { connect } from 'react-redux'
// import * as actionTypes from '../../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'


const equipment = (props) => {

	return <Table striped bordered>
				<thead>
					<tr className="table-dark touch-row">
						<th>Gems <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
						<th>#</th>
						<th>Value <span className="float-right">Total: 10gp</span></th>
					</tr>
				</thead>
				<tbody>
					{props.equipment.gems.map(function(gem, index){

						return <tr key={index} className="touch-row">
									<th>{gem.name}</th>
									<td>{gem.number}</td>
									<td>{gem.value}{gem.money}</td>
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
		// toggleWeaponModal: (index) => dispatch({type: actionTypes.MODAL_WEAPON, payload: {index}})
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(equipment);