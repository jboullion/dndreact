import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actionTypes'

import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-solid-svg-icons'


const equipment = (props) => {

	return <Table striped bordered>
				<thead>
					<tr className="table-dark touch-row" onClick={() => props.toggleGemModal(-1)}>
						<th>Gems <FontAwesomeIcon icon={faPlus} className="float-right" style={{height: '24px'}} /></th>
						<th>#</th>
						<th>Value <span className="float-right">Total: 10gp</span></th>
					</tr>
				</thead>
				<tbody>
					{props.equipment.gems.map(function(gem, index){

						return <tr key={index} className="touch-row" onClick={() => props.toggleGemModal(index)}>
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
		toggleGemModal: (index) => dispatch({type: actionTypes.MODAL_GEMS, payload: {index}})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(equipment);