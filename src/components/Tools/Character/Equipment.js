import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actionTypes'

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faPlus } from '@fortawesome/pro-solid-svg-icons'

import { calcMoney } from '../../../functions'

const equipment = (props) => {

	const totalMoney = calcMoney(props.equipment.money);

	return <div className="mb-5 tab-pane" id="character-equipment">

				<Card className="w-100">
					<Card.Body>
						<legend>Equipment (Wearing)</legend>

						<Table striped bordered>
							<thead>
								<tr className="table-dark touch-row" >
									<th>Weapon</th>
									<th className="text-center">+ Hit</th>
									<th className="text-center">Die</th>
									<th className="text-center">Bon</th>
									<th className="text-center">Roll</th>
								</tr>
							</thead>
							<tbody>
								{props.equipment.weapons.map(function(weapon, index){
									console.log(weapon);
									return <tr key={index} >
												<th scope="row" className="touch-row">{weapon.name}Warhammer</th>
											
												<td className="text-center">{weapon.hit>0?'+':''}{weapon.hit}</td>
												<td className="text-center">{weapon.numDice}d{weapon.diceValue}</td>
												<td className="text-center">{weapon.bonus}</td>
												<td className="text-center touch-icon"><FontAwesomeIcon icon={faDiceD20} size="2x"  /></td>
											</tr>;

								})}

								{/* <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} />
									onClick={() => props.toggleModal('weapon')} */}
							</tbody>
						</Table>

						<Table striped bordered>
							<thead>
								<tr className="table-dark touch-row">
									<th>Armor <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
									<th>Type</th>
									<th>AC</th>
								</tr>
							</thead>
							<tbody>
								{props.equipment.armor.map(function(armor, index){

									return <tr key={index} className="touch-row">
												<th>{armor.name}</th>
												<td>{armor.type}</td>
												<td>{armor.ac}</td>
											</tr>;

								})}
							</tbody>
						</Table>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th>Money</th>
									<th style={{width: '150px'}}><span className="float-right">Total: {totalMoney}</span></th>
								</tr>
							</thead>
							<tbody>
								{props.equipment.money.map(function(money, index){

									return <tr className="" key={index}>
												<th>{money.name} ({money.initial})</th>
												<td><FormControl type="number" value={money.value} onChange={(e) => props.updateMoney(e.target.value,index)} /></td>
											</tr>;

								})}
							</tbody>
						</Table>

						<Table striped bordered>
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
						</Table>

					</Card.Body>
				</Card>
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
		updateEquipment: (value, index) => dispatch({type: actionTypes.EQUIP_UPDATE, payload: {value, index}}),
		updateMoney: (value, index) => dispatch({type: actionTypes.EQUIP_MONEY, payload: {value, index}}),
		toggleModal: (index) => dispatch({type: actionTypes.MODAL_TOGGLE, payload: {index}})
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(equipment);