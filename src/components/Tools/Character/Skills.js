import React from 'react';
import { connect } from 'react-redux'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

import RollResult from '../RollResult';

// import SkillsCSS from './Skills.module.css';

const skills = (props) => {

	return <div className="mb-4 tab-pane" id="character-skills">
				<Card className="w-100">
					<Card.Body>
						<legend>Skills</legend>

						<RollResult rollResult={props.rollResult} profBonus={props.profBonus} />

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th scope="col">Name</th>
									<th scope="col">Stat</th>
									<th scope="col" className="text-center">Roll</th>
									<th scope="col" className="text-center">Prof.</th>
									<th scope="col" className="text-center">Adv.</th>
									<th scope="col" className="text-center">Roll</th>
								</tr>
							</thead>
							<tbody>
								{props.skills.map(function(skill, index){

									return <tr className="table-active" key={index}>
												<th scope="row">{skill.name}</th>
												<td>{skill.stat}</td>
												<td className="text-center">{skill.bonus>0?'+':''}{skill.bonus}</td>
												<td className="text-center"><FontAwesomeIcon icon={faCheckCircle} /></td>
												<td className="text-center"><FontAwesomeIcon icon={faCheckCircle} /></td>
												<td className="text-center"><FontAwesomeIcon icon={faDiceD20} /></td>
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
		skills: state.skills,
		rollResult: state.recentSkillRoll,
		profBonus: state.profBonus
	};
}


const mapDispatchToProps = dispatch => {
	return {
		incrementStat: (value, index) => dispatch({type: 'STAT_UPDATE', payload: {value, index}}),
		toggleProficiency: (index) => dispatch({type: 'STAT_TOGGLE', payload: {index}}),
		rollStat: (stat) => dispatch({type: 'STAT_ROLL', payload: {stat}})
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(skills);