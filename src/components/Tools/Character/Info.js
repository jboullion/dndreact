import React from 'react';
import { connect } from 'react-redux'

 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import FormControl from 'react-bootstrap/FormControl';
 import InputGroup from 'react-bootstrap/InputGroup';
 import Card from 'react-bootstrap/Card';

// import { calcStatBonus } from '../../../functions'
import * as actionTypes from '../../../store/actions/actions'


const info = (props) => {
	return <div className="mb-4" id="character-info">

				<Card className="w-100">
					<Card.Body>

						<legend>Info</legend>
						
						<Row className="mb-3">
							<Col md={9} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Character Name</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.name } onChange={(e) => props.updateCharacter(e.target.value,'name')} />
								</InputGroup>
							</Col>
							<Col md={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Level</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="number" value={ props.character.level } onChange={(e) => props.updateCharacter(e.target.value,'level')} />
								</InputGroup>
							</Col>
						</Row>

						<Row className="mb-3">
							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Race</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.race } onChange={(e) => props.updateCharacter(e.target.value,'race')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Class</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.class } onChange={(e) => props.updateCharacter(e.target.value,'class')} />
								</InputGroup>
							</Col>
							
							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Sex</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.sex } onChange={(e) => props.updateCharacter(e.target.value,'sex')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Age</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.age } onChange={(e) => props.updateCharacter(e.target.value,'age')} />
								</InputGroup>
							</Col>

						</Row>

						<Row className="mb-3">

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Diety</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.diety } onChange={(e) => props.updateCharacter(e.target.value,'diety')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Background</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.background } onChange={(e) => props.updateCharacter(e.target.value,'background')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Alignment</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.alignment } onChange={(e) => props.updateCharacter(e.target.value,'alignment')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Size</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.size } onChange={(e) => props.updateCharacter(e.target.value,'size')} />
								</InputGroup>
							</Col>
						</Row>


						<Row className="mb-3">

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Height</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.height } onChange={(e) => props.updateCharacter(e.target.value,'height')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Weight</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.weight } onChange={(e) => props.updateCharacter(e.target.value,'weight')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Hair</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.hair } onChange={(e) => props.updateCharacter(e.target.value,'hair')} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Eyes</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" value={ props.character.eyes } onChange={(e) => props.updateCharacter(e.target.value,'eyes')} />
								</InputGroup>
							</Col>

						</Row>

					</Card.Body>
				</Card>
			</div>;
}


const mapStateToProps = state => {
	return {
		character: state.character
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateCharacter: (value, index) => dispatch({type: actionTypes.CHAR_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(info);