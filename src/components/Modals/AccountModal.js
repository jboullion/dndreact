import React, { Component } from 'react';
import axios from '../../axiosConfig';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'

import { elementIsValid, checkValidity } from '../../functions'

class AccountModal extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			signinform: {
				email: {
					type: 'email',
					label: 'Email',
					placeholder: 'Email Address',
					value: "",
					validation: {
						required: true,
						isEmail: true,
						maxLength: 100
					},
					valid: false,
					touched: false,
					message: ''
				},
				password: {
					type: 'password',
					label: 'Password',
					value: "",
					validation: {
						required: true,
						minLength: 6,
						maxLength: 100
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
			...this.state.signinform
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


		this.setState({signinform: updatedForm, formIsValid:formIsValid});
	}


	// Handle our form submission to create an account on the server
	createAccount = (event) => {
		event.preventDefault();

		this.setState({loading: true});

		const formData = {};

		for(let formIdentifier in this.state.signinform){
			formData[formIdentifier] = this.state.signinform[formIdentifier].value;
		}

		const accountModal = this;

		axios.post('user/create-account.php', formData)
		  .then(function (response) {
			if(response.data.error){
				accountModal.setState({error: response.data.error, success: ''});
			}else if(response.data.success){
				//User account was created!
				accountModal.setState({error: '',success: 'Account created!'});
			}else{
				//console.log('AccountModal: Unkown Error');
				accountModal.setState({error: 'Unkown Error: Unable to create account at this time.', success: ''});
			}
			accountModal.setState({loading: false});
		  })
		  .catch(function (error) {
			//console.log(error);
		  });

	} 


	render() {
		const formElementsArray = [];
		for(let key in this.state.signinform){
			formElementsArray.push({
				id: key,
				state: this.state.signinform[key]
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
			<Modal show={this.props.show} onHide={() => this.props.handleClose('account')} >
			
				<Modal.Header closeButton>
					<Modal.Title>Create Account</Modal.Title>
				</Modal.Header>
				
				<Form onSubmit={(e) => this.createAccount(e)}>
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
						<Button variant="secondary" onClick={() => this.props.handleClose('account')}>Close</Button>
						<Button variant="primary" type="submit" disabled={!this.state.formIsValid}>Create Account</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	};

}

export default AccountModal;