import React from 'react';
import { connect } from 'react-redux'

import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

import { calcStatBonus } from '../../../functions'
import * as actionTypes from '../../../store/actions'

import RollResult from '../RollResult';

// import StatsCSS from './Stats.module.css';

const stats = (props) => {

	return <div className=" mb-4 tab-pane" id="character-stats">
				<Card className="w-100">
					<Card.Body>
						<legend>Stats</legend>
						
						<RollResult rollResult={props.rollResult} profBonus={props.profBonus} />

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th>Name</th>
									<th className="text-center">Value</th>
									<th className="text-center">Bonus</th>
									<th className="text-center">Prof.</th>
									<th className="text-center">Roll</th>
								</tr>
							</thead>
							<tbody>
								{props.stats.map(function(stat, index){
									let bonus = calcStatBonus(stat);

									return <tr className="table-active"  key={index}>
												<th scope="row"><span className="d-none d-sm-block">{stat.name}</span><span className="d-block d-sm-none">{stat.shortname}</span></th>
												<td className="text-center" style={{width: '100px'}}><FormControl type="number" value={stat.value} onChange={(e) => props.updateStat(e.target.value,index)} /></td>
												<td className="text-center">{bonus>0?'+':''}{bonus}</td>
												<td className="text-center touch-icon" onClick={(e) => props.toggleProficiency(index)}>{stat.prof?<FontAwesomeIcon icon={faCheckCircle} className="fa-2x" />:''}</td>
												<td className="text-center touch-icon" onClick={(e) => props.rollStat(stat)}>
													<FontAwesomeIcon icon={faDiceD20} className="fa-2x" />
												</td>
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
		stats: state.stats.stats,
		rollResult: state.stats.recentStatRoll,
		profBonus: state.char.profBonus
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateStat: (value, index) => dispatch({type: actionTypes.STAT_UPDATE, payload: {value, index}}),
		toggleProficiency: (index) => dispatch({type: actionTypes.STAT_TOGGLE, payload: {index}}),
		rollStat: (stat) => dispatch({type: actionTypes.STAT_ROLL, payload: {stat}})
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(stats);