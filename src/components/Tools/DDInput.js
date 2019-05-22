import React from 'react';

import Form from 'react-bootstrap/Form';

import { elementIsValid } from '../../functions' // checkValidity

const DDInput = (props) => {

	return <Form.Group>
			<Form.Label>{props.formElement.state.label}</Form.Label>
			<Form.Control 
				className={elementIsValid(props.formElement.state)?'':'invalid'} 
				type={props.formElement.state.type} 
				placeholder={props.formElement.state.placeholder} 
				value={props.value} 
				onChange={(e) => props.onChange(props.formElement.state.key, e.target.value) } />
			{elementIsValid(props.formElement.state)?'':<p className="invalid-text">{props.formElement.state.message}</p>}
		</Form.Group>;
}

export default React.memo(DDInput);

