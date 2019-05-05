import React from 'react';


const skills = (props) => {
	return <div className="mb-4 tab-pane" id="character-skills">
				<div className="card w-100">
					<div className="card-body">
						<legend>Skills</legend>

						<table className="table table-hover">
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
								<tr className="table-active">
									<th scope="row">Acrobatics</th>
									<td>Dex</td>
									<td className="text-center">+3</td>
									<td className="text-center"><i className="fas fa-check-circle"></i></td>
									<td className="text-center"></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
								<tr className="table-active">
									<th scope="row">Animal Handling</th>
									<td>Wis</td>
									<td className="text-center">+3</td>
									<td className="text-center"></td>
									<td className="text-center"><i className="fas fa-check-circle"></i></td>
									<td className="text-center"><i className="fas fa-fw fa-dice-d20"></i></td>
								</tr>
							</tbody>
						</table> 
					</div>
				</div>
			</div>;
}

export default skills;