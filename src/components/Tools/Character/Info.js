import React from 'react';

 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import FormControl from 'react-bootstrap/FormControl';
 import InputGroup from 'react-bootstrap/InputGroup';
 import Card from 'react-bootstrap/Card';


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
									<FormControl type="text" defaultValue={'Kilde'} />
								</InputGroup>
							</Col>
							<Col md={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Level</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="number" defaultValue={3} />
								</InputGroup>
							</Col>
						</Row>

						<Row className="mb-3">
							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Race</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Dwarf'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Class</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Cleric'} />
								</InputGroup>
							</Col>
							
							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Sex</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Male'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Age</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Age'} />
								</InputGroup>
							</Col>

						</Row>

						<Row className="mb-3">

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Diety</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Diety'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Background</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Clan Crafter'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Alignment</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Lawful Good'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Size</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Medium'} />
								</InputGroup>
							</Col>
						</Row>


						<Row className="mb-3">

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Height</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'4\'8"'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Weight</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'140'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Hair</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Blonde'} />
								</InputGroup>
							</Col>

							<Col sm={6} lg={3} className="mb-1">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text className=" bg-primary text-white">Eyes</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" defaultValue={'Blue'} />
								</InputGroup>
							</Col>

						</Row>

					</Card.Body>
				</Card>
			</div>;
}

export default info;