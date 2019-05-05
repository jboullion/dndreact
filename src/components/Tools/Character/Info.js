import React from 'react';


const info = (props) => {
	return <div className="mb-4" id="character-info">

				<div className="card w-100">
					<div className="card-body">

						<legend>Info</legend>
						<div className="row mb-3">
							<div className="col-12 col-md-9 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Character Name</span>
									</div>
									<input type="text" className="form-control" placeholder="Name" id="name" value="Kilde" />
								</div>
							</div>
							<div className="col-12 col-md-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Level</span>
									</div>
									<input type="number" className="form-control" placeholder="Level" id="level" value="3" />
								</div>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Race</span>
									</div>
									<input type="text" className="form-control" placeholder="Race" id="race" value="Dwarf" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Class</span>
									</div>
									<input type="text" className="form-control" placeholder="Class" id="class" value="Cleric" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Sex</span>
									</div>
									<input type="text" className="form-control" placeholder="Sex" id="sex" value="Male" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Age</span>
									</div>
									<input type="number" className="form-control" placeholder="Age" id="age" value="30" />
								</div>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Diety</span>
									</div>
									<input type="text" className="form-control" placeholder="Diety" id="diety" value="Berronar Truesilver" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Background</span>
									</div>
									<input type="text" className="form-control" placeholder="Background" id="background" value="Clan Crafter" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Alignment</span>
									</div>
									<input type="text" className="form-control" placeholder="Alignment" id="alignment" value="Lawful Good" />
								</div>
							</div>
							
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Size</span>
									</div>
									<input type="text" className="form-control" placeholder="Size" id="size" value="Medium" />
								</div>
							</div>
						</div>

						<div className="row mb-3">
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Height</span>
									</div>
									<input type="text" className="form-control" placeholder="Height" id="height" value="4'8" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Weight</span>
									</div>
									<input type="number" className="form-control" placeholder="Weight" id="weight" value="140" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Hair</span>
									</div>
									<input type="text" className="form-control" placeholder="Hair" id="hair" value="Blonde" />
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3 mb-1">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text bg-primary text-white">Eyes</span>
									</div>
									<input type="text" className="form-control" placeholder="Eyes" id="eyes" value="Blue" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>;
}

export default info;