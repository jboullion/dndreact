import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

const stats = (props) => {
	const state = {
		stats: [
			{
				name: 'Strength',
				shortname: 'Str',
				value: 16,
				bonus: -4,
				prof: false,
			},
			{
				name: 'Dexterity',
				shortname: 'Dex',
				value: 16,
				bonus: 4,
				prof: false,
			},
			{
				name: 'Constitution',
				shortname: 'Con',
				value: 16,
				bonus: 4,
				prof: false,
			},
			{
				name: 'Intellegence',
				shortname: 'Int',
				value: 16,
				bonus: 4,
				prof: false,
			},
			{
				name: 'Wisdom',
				shortname: 'Wis',
				value: 16,
				bonus: 4,
				prof: false,
			},
			{
				name: 'Charisma',
				shortname: 'Cha',
				value: 16,
				bonus: 4,
				prof: false,
			},
		]
	}

	return <div className=" mb-4 tab-pane" id="character-stats">
				<Card className="w-100">
					<Card.Body>
						<legend>Stats and Abilities</legend>
						
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
								{state.stats.map(function(stat, index){
									
									return <tr className="table-active">
												<th scope="row"><span className="d-none d-sm-block">{stat.name}</span><span className="d-block d-sm-none">{stat.shortname}</span></th>
												<td className="text-center" style={{width: '100px'}}><FormControl type="number" defaultValue={stat.value} /></td>
												<td className="text-center">{stat.bonus>0?'+':''}{stat.bonus}</td>
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

export default stats;