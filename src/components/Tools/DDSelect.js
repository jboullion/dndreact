import React from 'react';

import Form from 'react-bootstrap/Form';

import { elementIsValid } from '../../functions'

const DDSelect = (props) => {

	return <Form.Group>
			<Form.Label>{props.formElement.state.label}</Form.Label>
			<Form.Control 
				as="select"
				className={elementIsValid(props.formElement.state)?'':'invalid'} 
				type={props.formElement.state.type}
				value={props.value} 
				onChange={(e) => props.onChange(props.formElement.state.key, e.target.value) } >
				{props.options.map(function(option){
					return <option key={option.value} value={option.value} >{option.name}</option>;
				})}
			</Form.Control>
			{elementIsValid(props.formElement.state)?'':<p className="invalid-text">{props.formElement.state.message}</p>}
		</Form.Group>;
}

export default React.memo(DDSelect);

