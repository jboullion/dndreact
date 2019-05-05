import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';

/*
	<ToggleButtonGroup type="checkbox" >
		<ToggleButton variant="secondary" value={1}>1</ToggleButton>
		<ToggleButton variant="secondary" value={2}>2</ToggleButton>
		<ToggleButton variant="secondary" value={3}>3</ToggleButton>
	</ToggleButtonGroup>

	<InputGroup.Text className="bg-primary text-white">&nbsp;</InputGroup.Text>
	
	<ToggleButtonGroup type="checkbox">
		<ToggleButton variant="secondary" value={1}>1</ToggleButton>
		<ToggleButton variant="secondary" value={2}>2</ToggleButton>
		<ToggleButton variant="secondary" value={3}>3</ToggleButton>
	</ToggleButtonGroup>
*/

const important = (props) => {
	return <Row className="my-4">
				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-success text-white">HP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={20} />
					</InputGroup>
					<ProgressBar>
						<ProgressBar variant="success" now={80} key={1} />
						<ProgressBar variant="info" now={20} key={2} />
						<ProgressBar variant="danger" now={0} key={3} />
					</ProgressBar>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">AC</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={17} />
					</InputGroup>
				</Col>


				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-info text-white">Temp HP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={8} />
					</InputGroup>
				</Col>

				
				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Temp AC</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={17} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Max HP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={28} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Hit Die</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={3} />
						<InputGroup.Append>
							<ButtonGroup aria-label="Basic example">
								<DropdownButton as={ButtonGroup} title="Dice">
									<Dropdown.Item eventKey="1" className="font-weight-bold">d6</Dropdown.Item>
									<Dropdown.Item eventKey="2">d8</Dropdown.Item>
									<Dropdown.Item eventKey="3">d10</Dropdown.Item>
									<Dropdown.Item eventKey="4">d12</Dropdown.Item>
								</DropdownButton>
							</ButtonGroup>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Prof</InputGroup.Text>
							<InputGroup.Text className=" bg-success text-white">+</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={2} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Init</InputGroup.Text>
							<InputGroup.Text className=" bg-success text-white">+</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={3} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Insight</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={15} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Perception</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={16} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup style={{height: '100%'}}>
						
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>1</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>2</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>3</Button>
	
						<InputGroup.Text className=" bg-primary text-white" style={{padding: 0, width: '14%'}}>&nbsp;</InputGroup.Text>
						
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>1</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>2</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>3</Button>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3" id="xp">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className="bg-primary text-white">XP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" defaultValue={2000} />
						{/* Figure out what the next level xp would be needed based on current xp <InputGroup.Append>
							<InputGroup.Text className=" bg-secondary text-white">/ 4000</InputGroup.Text>
						</InputGroup.Append> */}
					</InputGroup>
				</Col>

			</Row>;
}

export default important;