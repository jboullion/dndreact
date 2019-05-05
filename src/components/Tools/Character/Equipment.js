import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

const equipment = (props) => {
	return <div className="mb-5 tab-pane" id="character-equipment">

				<Card className="w-100">
					<Card.Body>
						<legend>Equipment</legend>

						<table className="table table-hover">
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
								<tr className="">
									<td>Warhammer</td>
									<td>+6 </td>
									<td>1d8+4</td>
									<td>5</td>
									<td>Blunt</td>
								</tr>
								<tr className="">
									<td>Light Crossbow</td>
									<td>+6 </td>
									<td>1d8+4</td>
									<td>80/320</td>
									<td>Piercing</td>
								</tr>
							</tbody>
						</table>

						<table className="table table-hover">
							<thead>
								<tr className="table-dark">
									<th>Armor</th>
									<th>Type</th>
									<th>AC</th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<td>Chainmail</td>
									<td>Heavy</td>
									<td>16</td>
								</tr>
								<tr className="">
									<td>Shield</td>
									<td>Shield</td>
									<td>+2</td>
								</tr>
							</tbody>
						</table>

						<table className="table table-hover">
							<thead>
								<tr className="table-dark">
									<th>Money</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<th>Gold (gp)</th>
									<td>15</td>
								</tr>
								<tr className="">
									<th>Silver (sp)</th>
									<td>1</td>
								</tr>
							</tbody>
						</table>

						<table className="table table-hover">
							<thead>
								<tr className="table-dark">
									<th>Gems</th>
									<th>#</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<th>Ruby</th>
									<td>1</td>
									<td>100gp</td>
								</tr>
							</tbody>
						</table>

					</Card.Body>
				</Card>

			</div>;

}

export default equipment;