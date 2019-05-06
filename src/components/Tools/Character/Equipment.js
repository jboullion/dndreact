import React from 'react';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

const equipment = (props) => {
	const state = {
		equipment: {
			weapons: [
				{
					name: 'Warhammer',
					hit: 6,
					damage: [
						{
							num: 4,
							dam: 8
						},
						{
							num: 2,
							dam: 4
						},
					],
					range: 80,
					type: 'Blunt'
				}
			],
			armor: [
				{
					name: 'Chainmail',
					type: 'Heavy',
					ac: 16
				}
			],
			money: [
				{
					name: 'Copper',
					initial: 'cp',
					value: 1
				},
				{
					name: 'Silver',
					initial: 'sp',
					value: 2
				},
				{
					name: 'Electrum ',
					initial: 'ep',
					value: 3
				},
				{
					name: 'Gold',
					initial: 'gp',
					value: 4
				},
				{
					name: 'Platinum',
					initial: 'pp',
					value: 5
				},
			],
			gems: [
				{
					name: 'Ruby',
					number: 10,
					value: 1,
					money: 'gp'
				},
			]
		}
	}

	return <div className="mb-5 tab-pane" id="character-equipment">

				<Card className="w-100">
					<Card.Body>
						<legend>Equipment (Wearing)</legend>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th>Weapon</th>
									<th>+Hit</th>
									<th>Damage</th>
									<th>Range</th>
									<th>Type</th>
								</tr>
							</thead>
							<tbody>
								{state.equipment.weapons.map(function(weapon, index){

									return <tr key={index}>
												<th scope="row">{weapon.name}</th>
												<td>{weapon.hit>0?'+':''}{weapon.hit}</td>
												<td className="text-center">{
													weapon.damage.map(function(damage, index){
														return damage.num+'d'+damage.dam;
													})
												}</td>
												<td className="text-center"><FontAwesomeIcon icon={faCheckCircle} /></td>
												<td className="text-center"><FontAwesomeIcon icon={faCheckCircle} /></td>
												<td className="text-center"><FontAwesomeIcon icon={faDiceD20} /></td>
											</tr>;

								})}
							</tbody>
						</Table>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th>Armor</th>
									<th>Type</th>
									<th>AC</th>
								</tr>
							</thead>
							<tbody>
								{state.equipment.armor.map(function(armor, index){

									return <tr key={index}>
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
									<th></th>
								</tr>
							</thead>
							<tbody>
								{state.equipment.money.map(function(money, index){

									return <tr className="" key={index}>
												<th>{money.name} ({money.initial})</th>
												<td>{money.value}</td>
											</tr>;

								})}
							</tbody>
						</Table>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th>Gems</th>
									<th>#</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{state.equipment.gems.map(function(gem, index){

									return <tr className="" key={index}>
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

export default equipment;