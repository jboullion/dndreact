import React, { Component } from 'react';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'

import axios from '../../axiosConfig';

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
						isEmail: true
					},
					valid: false,
					touched: false
				},
				password: {
					type: 'password',
					label: 'Password',
					value: "",
					validation: {
						required: true,
						minLength: 6
					},
					valid: false,
					touched: false
				}
			},
			loading: false
		}
	}	

	inputChangedHandler = (event, inputIdentifier) => {

		const updatedForm = {
			...this.state.signinform
		}

		const updatedFormElement = {
			...updatedForm[inputIdentifier]
		}
		
		updatedFormElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedFormElement;

		this.setState({signinform: updatedForm});
	}

	createAccount = (event) => {
		event.preventDefault();

		this.setState({loading: true});

		const formData = {};

		for(let formIdentifier in this.state.signinform){
			formData[formIdentifier] = this.state.signinform[formIdentifier].value;
		}

		
		axios.post('user/create-account.php', formData)
		  .then(function (response) {
			if(response.error){
				console.log(response.error);
			}else if(response.success){
				//User account was created!
			}else{
				console.log('AccountModal: Unkown Error');
			}
		  })
		  .catch(function (error) {
			console.log(error);
		  });
		
	} 

	render() {
		const formElementsArray = [];
		for(let key in this.state.signinform){
			formElementsArray.push({
				id: key,
				config: this.state.signinform[key]
			})
		}

		const form = formElementsArray.map(formElement => (
			<Form.Group key={formElement.id}>
				<Form.Label>{formElement.config.label}</Form.Label>
				<Form.Control type={formElement.config.type} placeholder={formElement.config.placeholder} value={formElement.config.value} onChange={(e) => this.inputChangedHandler(e, formElement.id)} />
			</Form.Group>
		));

		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose('account')} >
			
				<Modal.Header closeButton>
					<Modal.Title>Create Account</Modal.Title>
				</Modal.Header>
				
				<Form onSubmit={(e) => this.createAccount(e)}>
					<Modal.Body>
						{ form }
					</Modal.Body>
			
					<Modal.Footer>
						{this.state.loading?<FontAwesomeIcon icon={faSpinner} spin />:''}
						<Button variant="secondary" onClick={() => this.props.handleClose('account')}>Close</Button>
						<Button variant="primary" type="submit">Create Account</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	};

}

export default AccountModal;