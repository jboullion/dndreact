import React from 'react';

// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const spell = (props) => {
	return <Card className="my-2">
				<Card.Body>
					<h4 className="card-title">{props.title}</h4>
					<h6 className="card-subtitle mb-2 text-muted">{props.somatic}</h6>
					<p className="card-text">{props.desc}</p>
				</Card.Body>
			</Card>;
}

export default React.memo(spell);