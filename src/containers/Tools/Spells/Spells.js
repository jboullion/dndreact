import React, { Component } from 'react';

// //We keep these components in our components folder since they are Pure / functional / stateless components
// import Important from '../../../components/Tools/Character/Important';
// import Info from '../../../components/Tools/Character/Info';
// import Stats from '../../../components/Tools/Character/Stats';
// import Skills from '../../../components/Tools/Character/Skills';
// import Equipment from '../../../components/Tools/Character/Equipment';
// import Inventory from '../../../components/Tools/Character/Inventory';

// import Container from 'react-bootstrap/Container';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

import Row from 'react-bootstrap/Row';

// import CharacterCSS from './Character.module.css';


class Spells extends Component {


	render() {
		return (
			<div>
				<Row className="w-100 my-2">
					<div className="col-4">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text bg-primary text-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="2 (Prof) + 4 (Int) = 5">Atk+</span>
							</div>
							<input type="number" className="form-control" aria-label="Spell Atk Bonus" value="5"/>
						</div>
					</div>
					<div className="col-4">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text bg-primary text-white"  data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8 + 2 (Prof) + 4 (Int) = 14">DC</span>
							</div>
							<input type="number" className="form-control" aria-label="Spell DC" value="15"/>
						</div>
					</div>
					<div className="col-4 text-right">
						<button type="button" className="btn btn-success" id="clear-roll"><i className="fas fa-bed"></i> Rest</button>
					</div>
				</Row>

				 <div className="row">
					<div className="col-12">
						<legend className="mb-2">Spellbook</legend>
						<ul className="nav nav-tabs nav-fill">
							<li className="nav-item">
								<a className="nav-link active"  data-toggle="tab" data-target="#spells-0" >0</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-1">1</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-2">2</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-3">3</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-4">4</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-5">5</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-6">6</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-7">7</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-8">8</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  data-toggle="tab" data-target="#spells-9">9</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="tab-content">
							<div className="tab-pane active" id="spells-0" role="tabpanel" aria-labelledby="roll-tab">

								<button type="button" className="btn btn-outline-success my-2">Add Spell</button>

								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>

							</div>
							<div className="tab-pane" id="spells-1" role="tabpanel" aria-labelledby="roll-tab">
							
								
								<label className="mt-2">Spell Slots</label>
								<div className="input-group mb-4">
									<input type="text" className="form-control" placeholder="Max" id="max-0" value="4" />
									<span className="input-group-text" id="inputGroup-sizing-lg"> / </span>
									<input type="text" className="form-control" placeholder="Current" id="current-0"  value="3" />
									<div className="input-group-append">
										<button type="button" className="btn btn-secondary">Use</button>
									</div>
								</div>

								<div className="progress mb-4">
									<div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
								</div>

								<button type="button" className="btn btn-outline-success">Add Spell</button>

								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card my-2">
									<div className="card-body">
										<h4 className="card-title">Vicious Mocking</h4>
										<h6 className="card-subtitle mb-2 text-muted">VSM</h6>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="spells-2" role="tabpanel" aria-labelledby="roll-tab">
								Level 2
							</div>
							<div className="tab-pane" id="spells-3" role="tabpanel" aria-labelledby="roll-tab">
								Level 3
							</div>
							<div className="tab-pane" id="spells-4" role="tabpanel" aria-labelledby="roll-tab">
								Level 4
							</div>
							<div className="tab-pane" id="spells-5" role="tabpanel" aria-labelledby="roll-tab">
								Level 5
							</div>
							<div className="tab-pane" id="spells-6" role="tabpanel" aria-labelledby="roll-tab">
								Level 6
							</div>
							<div className="tab-pane" id="spells-7" role="tabpanel" aria-labelledby="roll-tab">
								Level 7
							</div>
							<div className="tab-pane" id="spells-8" role="tabpanel" aria-labelledby="roll-tab">
								Level 8
							</div>
							<div className="tab-pane" id="spells-9" role="tabpanel" aria-labelledby="roll-tab">
								Level 9
							</div>
						</div>
					</div>
				</div> */}

			</div>
		)
	};
}

export default Spells;