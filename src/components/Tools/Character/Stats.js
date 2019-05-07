import React from 'react';
import { connect } from 'react-redux'

import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

import StatsCSS from './Stats.module.css';

const stats = (props) => {

	return <div className=" mb-4 tab-pane" id="character-stats">
				<Card className="w-100">
					<Card.Body>
						<legend>Stats</legend>
						
						<div>
							<strong className={StatsCSS.total}>{props.rollResult}</strong>
						</div>

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
									
									return <tr className="table-active"  key={index}>
												<th scope="row"><span className="d-none d-sm-block">{stat.name}</span><span className="d-block d-sm-none">{stat.shortname}</span></th>
												<td className="text-center" style={{width: '100px'}}><FormControl type="number" value={stat.value} onChange={(e) => props.incrementStat(e.target.value,index)} /></td>
												<td className="text-center">{stat.bonus>0?'+':''}{stat.bonus}</td>
												<td className="text-center touch-icon" onClick={(e) => props.toggleProficiency(index)}>{stat.prof?<FontAwesomeIcon icon={faCheckCircle} className="fa-2x touch-icon" />:''}</td>
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
		stats: state.stats,
		rollResult: state.recentStatRoll
	};
}

const mapDispatchToProps = dispatch => {
	return {
		incrementStat: (value, index) => dispatch({type: 'STAT_UPDATE', payload: {value, index}}),
		toggleProficiency: (index) => dispatch({type: 'STAT_TOGGLE', payload: {index}}),
		rollStat: (stat) => dispatch({type: 'STAT_ROLL', payload: {stat}})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(stats);