import React from 'react';
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faPlus } from '@fortawesome/pro-solid-svg-icons'

const equipment = (props) => {

	return <div className="mb-5 tab-pane" id="character-equipment">

				<Card className="w-100">
					<Card.Body>
						<legend>Equipment (Wearing)</legend>

						<Table striped bordered>
							<thead>
								<tr className="table-dark touch-row">
									<th>Weapon <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
									<th>Hit</th>
									<th>Damage</th>
									<th>Range</th>
									<th className="text-center">Roll</th>
								</tr>
							</thead>
							<tbody>
								{props.equipment.weapons.map(function(weapon, index){

									return <tr key={index}>
												<th scope="row" className="touch-row">{weapon.name}</th>
												<td>{weapon.hit>0?'+':''}{weapon.hit}</td>
												<td className="text-center">{
													weapon.damage.map(function(damage, index){
														return damage.num+'d'+damage.dam;
													})
												}</td>
												<td className="text-center"></td>
												<td className="text-center touch-icon"><FontAwesomeIcon icon={faDiceD20} size="2x"  /></td>
											</tr>;

								})}
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
									<th style={{width: '150px'}}><span className="float-right">Total: 10gp</span></th>
								</tr>
							</thead>
							<tbody>
								{props.equipment.money.map(function(money, index){

									return <tr className="" key={index}>
												<th>{money.name} ({money.initial})</th>
												<td><FormControl type="number" value={money.value} /></td>
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
		// updateCharacter: (value, index) => dispatch({type: actionTypes.CHAR_UPDATE, payload: {value, index}}),
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(equipment);