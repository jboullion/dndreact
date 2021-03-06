import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import { calcMoney } from '../../../../functions'

const money = (props) => {

	const totalMoney = calcMoney(props.equipment.money);

	return  <Table striped bordered>
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
			</Table>;

}


const mapStateToProps = state => {
	return {
		equipment: state.equipment,
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateMoney: (value, index) => dispatch({type: actionTypes.EQUIP_MONEY, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(money);