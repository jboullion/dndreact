import React from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const die = (props) => {
	return <Col md={6} lg={4} >
			<div className="roll-wrapper">
				<Form.Group>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text className="bg-primary text-white">d{props.die.value}</InputGroup.Text>
							<InputGroup.Text className="bg-primary text-white"><FontAwesomeIcon icon={props.die.component} /></InputGroup.Text>
						</InputGroup.Prepend>
						<input type="number" maxLength="2" className="dice-num form-control" value={props.die.num} onChange={(event) => props.updateDieNumber(event, props.die.value)} />
						<InputGroup.Append>
							<Button variant="primary" onClick={() => props.rollDice(props.die)}>Roll</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form.Group>
			</div>
		</Col>;
}

export default React.memo(die);