import React from 'react';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

const skills = (props) => {
	const state = {
		skills: [
			{
				name: 'Acrobatics',
				stat: 'Dex',
				bonus: -4,
				prof: false,
				adv: false,
			},
			{
				name: 'Animal Handling',
				stat: 'Wis',
				bonus: -4,
				prof: false,
				adv: false,
			}
		]
	}

	return <div className="mb-4 tab-pane" id="character-skills">
				<Card className="w-100">
					<Card.Body>
						<legend>Skills</legend>

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
								{state.skills.map(function(skill, index){

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

export default skills;