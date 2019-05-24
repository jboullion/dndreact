import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'

import InventoryModal from './Inventory/InventoryModal';

const inventory = (props) => {
	const totalWeight = calcEncumberence(props.inventory.items);

	const encumberence = [
		(props.stats[0].value * 5),(props.stats[0].value * 10),(props.stats[0].value * 15),
	];

	return <div className="mb-4 tab-pane" id="character-inventory">

				<Card className="w-100">
					<Card.Body>
						<legend>Inventory</legend>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th scope="col" colSpan="4">Encumberance</th>
									<th scope="col" colSpan="2">({totalWeight})</th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<td className={totalWeight<=encumberence[0]?'table-success':''}>Light</td>
									<td className={totalWeight<=encumberence[0]?'table-success':''}>{encumberence[0]}</td>
									<td className={totalWeight<encumberence[1]&&totalWeight>encumberence[1]?'table-warning':''}>Heavy</td>
									<td className={totalWeight<encumberence[1]&&totalWeight>encumberence[1]?'table-warning':''}>{encumberence[1]}</td>
									<td className={totalWeight>encumberence[2]?'table-danger':''}>Max</td>
									<td className={totalWeight>encumberence[2]?'table-danger':''}>{encumberence[2]}</td>
								</tr>
							</tbody>
						</Table>

						<Table striped bordered>
							<thead>
								<tr className="table-dark touch-row" onClick={() => props.toggleItemModal(-1)}>
									<th scope="col">Name <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
									<th className="text-center" scope="col">#</th>
									<th className="text-center" scope="col">Cost</th>
									<th className="text-center" scope="col">Weight</th>
									<th className="text-center" scope="col">Total</th>
								</tr>
							</thead>
							<tbody>
								{props.inventory.items.map(function(item, index){

									return <tr key={index}>
												<th scope="row" className="touch-row" onClick={() => props.toggleItemModal(index)}>{item.name}</th>
												<th className="text-center">{item.count}</th>
												<td className="text-center">{item.cost}</td>
												<td className="text-center">{item.weight} lbs</td>
												<td className="text-center">{item.count*item.weight} lbs</td>
											</tr>;

								})}
							</tbody>
						</Table>

					</Card.Body>
				</Card>

				<InventoryModal handleClose={props.toggleItemModal} show={props.inventory.itemModal}/>
			</div>;

}


const mapStateToProps = state => {
	return {
		inventory: state.inventory,
		stats: state.stats.stats
	};
}


const mapDispatchToProps = dispatch => {
	return {
		toggleItemModal: (index) => dispatch({type: actionTypes.MODAL_ITEMS, payload: {index}})
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(inventory);


function calcEncumberence(items){
	let encumberance = 0;

	items.forEach(function(element) {
		encumberance += element.count * element.weight;
	});

	return encumberance;
}