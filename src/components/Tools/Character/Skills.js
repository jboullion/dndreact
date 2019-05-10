import React from 'react';
import { connect } from 'react-redux'

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheck, faCheckDouble } from '@fortawesome/pro-solid-svg-icons'

import { calcStatBonus, calcProf } from '../../../functions'
import * as actionTypes from '../../../store/actions'

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
									<th scope="col" className="text-center">Bonus</th>
									<th scope="col" className="text-center">Prof.</th>
									<th scope="col" className="text-center">Adv.</th>
									<th scope="col" className="text-center">Roll</th>
								</tr>
							</thead>
							<tbody>
								{props.skills.map((skill, index) => {
									let stat = props.stats[skill.stat];
									let bonus = calcStatBonus(stat);

									return <tr className="table-active" key={index}>
												<th scope="row">{skill.name}</th>
												<td>{stat.abv}</td>
												<td className="text-center">{bonus>0?'+':''}{bonus}</td>
												<td className="text-center touch-icon" onClick={(e) => props.incrementProf(index)}>
													{skill.prof===1?<FontAwesomeIcon icon={faCheck} className="fa-2x" />:''}
													{skill.prof===2?<FontAwesomeIcon icon={faCheckDouble} className="fa-2x" />:''}
												</td>
												<td className="text-center touch-icon" onClick={(e) => props.toggleAdv(index)}>{skill.adv?<FontAwesomeIcon icon={faCheck} className="fa-2x" />:''}</td>
												<td className="text-center touch-icon" onClick={(e) => props.rollSkill(bonus, skill)}>
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
		skills: state.skills.skills,
		rollResult: state.skills.recentSkillRoll,
		profBonus: calcProf(state.char)
	};
}


const mapDispatchToProps = dispatch => {
	return {
		incrementProf: (index) => dispatch({type: actionTypes.SKILL_PROF, payload: {index}}),
		toggleAdv: (index) => dispatch({type: actionTypes.SKILL_ADV, payload: {index}}),
		rollSkill: (bonus, skill) => dispatch({type: actionTypes.SKILL_ROLL, payload: {bonus,skill}})
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(skills);