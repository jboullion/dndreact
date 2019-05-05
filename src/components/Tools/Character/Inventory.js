import React from 'react';


const inventory = (props) => {
	return <div className="mb-4 tab-pane" id="character-inventory">
				<div className="card w-100">
					<div className="card-body">
						<legend>Inventory <span></span></legend>

						<table className="table table-hover">
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
								<tr>
									<th scope="row">Warhammer</th>
									<td className="text-center">2</td>
									<td className="text-center">5gp</td>
									<td className="text-center">4</td>
									<td className="text-center">8</td>
								</tr>
							</tbody>
						</table> 

						<table className="table table-hover">
							<thead>
								<tr className="table-dark">
									<th scope="col" colspan="4">Encumberance</th>
									<th scope="col" colspan="2">(185)</th>
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
						</table> 
						
					</div>
				</div>
			</div>;

}

export default inventory;