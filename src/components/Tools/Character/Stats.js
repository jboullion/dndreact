import React from 'react';


const stats = (props) => {
	return <div className=" mb-4 tab-pane" id="character-stats">
				<div className="card w-100">
					<div className="card-body">
						<legend>Stats and Abilities</legend>
						
						<table className="table table-hover">
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
								<tr className="table-active">
									<th scope="row">Str</th>
									<td className="text-center">16</td>
									<td className="text-center">+6</td>
									<td className="text-center"><i className="fas fa-check-circle"></i></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
								<tr className="table-active">
									<th scope="row">Dex</th>
									<td className="text-center">16</td>
									<td className="text-center">+3</td>
									<td className="text-center"></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
								<tr className="table-active">
									<th scope="row">Con</th>
									<td className="text-center">16</td>
									<td className="text-center">+6</td>
									<td className="text-center"><i className="fas fa-check-circle"></i></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
								<tr className="table-active">
									<th scope="row">Int</th>
									<td className="text-center">16</td>
									<td className="text-center">+3</td>
									<td className="text-center"></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
								<tr className="table-active">
									<th scope="row">Wis</th>
									<td className="text-center">16</td>
									<td className="text-center">+3</td>
									<td className="text-center"></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
								<tr className="table-active">
									<th scope="row">Cha</th>
									<td className="text-center">16</td>
									<td className="text-center">+3</td>
									<td className="text-center"></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
							</tbody>
						</table> 
					</div>
				</div>
			</div>;
}

export default stats;