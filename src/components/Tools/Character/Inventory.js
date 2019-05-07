import React from 'react';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const inventory = (props) => {

	return <div className="mb-4 tab-pane" id="character-inventory">

				<Card className="w-100">
					<Card.Body>
						<legend>Inventory</legend>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th scope="col" colSpan="4">Encumberance</th>
									<th scope="col" colSpan="2">({})</th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<td className="table-success-">Light</td>
									<td className="table-success-">90</td>
									<td className="table-warning">Heavy</td>
									<td className="table-warning">180</td>
									<td className="table-danger-">Max</td>
									<td className="table-danger-">270</td>
								</tr>
							</tbody>
						</Table>

						<Table striped bordered>
							<thead>
								<tr className="table-dark">
									<th scope="col">Name</th>
									<th className="text-center" scope="col">#</th>
									<th className="text-center" scope="col">Cost</th>
									<th className="text-center" scope="col">Weight</th>
									<th className="text-center" scope="col">Total</th>
								</tr>
							</thead>
							<tbody>
								{/* {state.inventory.items.map(function(item, index){

									return <tr key={index}>
												<th scope="row">{item.name}</th>
												<td>{weapon.hit>0?'+':''}{weapon.hit}</td>

												<th scope="row">{item.name}</th>
												<td className="text-center">{item.num}</td>
												<td className="text-center">{item.cost}gp</td>
												<td className="text-center">{item.weight}</td>
												<td className="text-center">{item.num * item.weight}</td>

											</tr>;

								})} */}
							</tbody>
						</Table>

					</Card.Body>
				</Card>
			</div>;

}

export default inventory;