import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'

import { elementIsValid, checkValidity } from '../../../../functions'

class WeaponModal extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			form: {
				name: {
					type: 'text',
					label: 'Name',
					placeholder: '',
					value: "",
					validation: {
						required: true,
						maxLength: 100
					},
					valid: false,
					touched: false,
					message: ''
				},
				hit: {
					type: 'number',
					label: 'Bonus to Hit',
					value: 0,
					validation: {
						required: true,
						minLength: 1,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: ''
				},
				numDice: {
					type: 'number',
					label: '# Dice',
					value: 1,
					validation: {
						required: true,
						minLength: 0,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: ''
				},
				diceValue: {
					type: 'number',
					label: 'Dice Value',
					value: 6,
					validation: {
						required: true,
						minLength: 0,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: ''
				},
				bonusDamage: {
					type: 'number',
					label: 'Bomus Damange',
					value: 6,
					validation: {
						required: true,
						minLength: 0,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: ''
				},
				damageType: {
					type: 'text',
					label: 'Damange Type',
					value: '',
					validation: {
						required: false,
						minLength: 0,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: ''
				}

			},
			formIsValid: false,
			loading: false,
			error: '',
			success:''
		}
	}


	// Handle input element update and check validation
	inputChangedHandler = (event, inputIdentifier) => {

		const updatedForm = {
			...this.state.form
		}

		const updatedFormElement = {
			...updatedForm[inputIdentifier]
		}
		
		updatedFormElement.value = event.target.value;
		const validResult = checkValidity(updatedFormElement);
		updatedFormElement.valid = validResult.valid;
		updatedFormElement.message = validResult.message;
		updatedFormElement.touched = true;

		updatedForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for(let inputIdentifier in updatedForm){
			formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
		}


		this.setState({form: updatedForm, formIsValid:formIsValid});
	}


	// Handle our form submission to create an weapon on the server
	updateWeapon = (event) => {
		event.preventDefault();

	}


	render() {
		const formElementsArray = [];
		for(let key in this.state.form){
			formElementsArray.push({
				id: key,
				state: this.state.form[key]
			})
		}

		const form = formElementsArray.map(formElement => (
			<Form.Group key={formElement.id}>
				<Form.Label>{formElement.state.label}</Form.Label>
				<Form.Control className={elementIsValid(formElement.state)?'':'invalid'} type={formElement.state.type} placeholder={formElement.state.placeholder} value={formElement.state.value} onChange={(e) => this.inputChangedHandler(e, formElement.id)} />
				{elementIsValid(formElement.state)?'':<p className="invalid-text">{formElement.state.message}</p>}
			</Form.Group>
		));

		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose('weapon')} >
			
				<Modal.Header closeButton>
					<Modal.Title>Add Weapon</Modal.Title>
				</Modal.Header>
				
				<Form onSubmit={(e) => this.updateWeapon(e)}>
					<Modal.Body>
					{this.state.error !== ''?
						<Alert variant="danger">
						{this.state.error}
						</Alert>:''}
					{this.state.success !== ''?
						<Alert variant="success">
						{this.state.success}
						</Alert>:''}

						{ form }
					</Modal.Body>
			
					<Modal.Footer>
						{this.state.loading?<FontAwesomeIcon icon={faSpinner} spin />:''}
						<Button variant="secondary" onClick={() => this.props.handleClose('weapon')}>Close</Button>
						<Button variant="primary" type="submit" disabled={!this.state.formIsValid}>Create weapon</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	};

}

export default WeaponModal;