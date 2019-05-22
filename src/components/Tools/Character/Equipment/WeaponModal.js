import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../../../../store/actions/actionTypes'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import DDInput from '../../DDInput';
import DDSelect from '../../DDSelect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'

class WeaponModal extends Component {
	constructor(props, context) {
		super(props, context);
		
		//const weaponAttr = ['name','stat','hit','numDice','diceValue','bonus','type']
		
		this.state = {
			form: {
				name: {
					type: 'text',
					label: 'Name',
					placeholder: '',
					key: 'name',
					validation: {
						required: true,
						maxLength: 100
					},
					valid: false,
					touched: false,
					message: ''
				},
				stat: {
					type: 'select',
					label: 'Stat',
					key: 'stat',
					validation: {
						required: true,
						minLength: 1,
						maxLength: 1
					},
					valid: false,
					touched: false,
					message: '',
					options: props.stats
				},
				hit: {
					type: 'number',
					label: 'Bonus to Hit',
					key: 'hit',
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
					key: 'numDice',
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
					key: 'diceValue',
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
					key: 'bonus',
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
					key: 'type',
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
	


	// // Handle input element update and check validation
	// inputChangedHandler = (event, inputIdentifier) => {

	// 	console.log('Input Changed Handler');

	// 	const updatedForm = {
	// 		...this.state.form
	// 	}

	// 	const updatedFormElement = {
	// 		...updatedForm[inputIdentifier]
	// 	}
		
	// 	updatedFormElement.value = event.target.value;
	// 	const validResult = checkValidity(updatedFormElement);
	// 	updatedFormElement.valid = validResult.valid;
	// 	updatedFormElement.message = validResult.message;
	// 	updatedFormElement.touched = true;

	// 	updatedForm[inputIdentifier] = updatedFormElement;

	// 	let formIsValid = true;
	// 	for(let inputIdentifier in updatedForm){
	// 		formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
	// 	}


	// 	this.setState({form: updatedForm, formIsValid:formIsValid});
	// }


	// Handle our form submission to create an weapon on the server
	updateWeapon = (event) => {
		event.preventDefault();
		this.props.saveWeapon();
		this.props.handleClose('weapon')
	}


	render() {
		const formElementsArray = [];
		for(let key in this.state.form){
			formElementsArray.push({
				id: key,
				state: this.state.form[key]
			})
		}

		
		const form = formElementsArray.map(formElement => {
			
			if(formElement.state.type === 'select'){
				let options = formElement.state.options.map(function(stat, index){
					return {
						name: stat.name,
						value: index,
					  } 
				});


				return <DDSelect 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateWeapon}
						options={options}
						value={this.props.equipment.currentWeapon?this.props.equipment.currentWeapon[formElement.state.key]:''} />
			}else{
				return <DDInput 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateWeapon}
						value={this.props.equipment.currentWeapon?this.props.equipment.currentWeapon[formElement.state.key]:''} />
			}
			
		});


		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose('weapon')} >
			
				<Modal.Header closeButton>
					<Modal.Title>{ this.props.equipment.currentWeaponIndex === -1?'New':'Edit'} Weapon</Modal.Title>
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
						{ this.props.equipment.currentWeaponIndex === -1?null:<Button variant="danger" onClick={() => this.props.deleteWeapon()}>Delete</Button>}
						<Button variant="secondary" onClick={() => this.props.handleClose('weapon')}>Close</Button>
						<Button variant="success" type="submit">Save</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	};

}

const mapStateToProps = state => {
	return {
		equipment: state.equipment,
		stats: state.stats.stats,
		// skills: state.skills.skills
	};
}


const mapDispatchToProps = dispatch => {
	return {

		updateWeapon: (key, value) => dispatch({type: actionTypes.EQUIP_WEAPON, payload: {key, value}}),
		saveWeapon: (key, value) => dispatch({type: actionTypes.EQUIP_SAVE_WEAPON, payload: {key, value}}),
		deleteWeapon: (key, value) => dispatch({type: actionTypes.EQUIP_DELETE_WEAPON, payload: {key, value}}),
		// updateCharacter: (value, index) => dispatch({type: actionTypes.CHAR_UPDATE, payload: {value, index}}),
		// updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WeaponModal);