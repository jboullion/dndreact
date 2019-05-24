import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { elementIsValid } from '../../functions' // checkValidity

const DDInput = (props) => {

	return <Form.Group>
		
			<Form.Label>{props.formElement.state.label}</Form.Label>
			<InputGroup className="mb-3">
				<Form.Control 
					className={elementIsValid(props.formElement.state)?'':'invalid'} 
					type={props.formElement.state.type} 
					placeholder={props.formElement.state.placeholder} 
					value={props.value} 
					onChange={(e) => props.onChange(props.formElement.state.key, e.target.value) } />
				{props.formElement.state.append?<InputGroup.Append>
													<InputGroup.Text className="bg-secondary text-white">{props.formElement.state.append}</InputGroup.Text>
												</InputGroup.Append>:null}
			</InputGroup>
			{elementIsValid(props.formElement.state)?'':<p className="invalid-text">{props.formElement.state.message}</p>}
		</Form.Group>;
}

export default React.memo(DDInput);

