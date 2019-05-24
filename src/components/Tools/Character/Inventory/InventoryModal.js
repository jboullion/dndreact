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

class InventoryModal extends Component {
	constructor(props, context) {
		super(props, context);
		
		//const itemAttr = ['name','stat','hit','numDice','diceValue','bonus','type']
		
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
				hit: {
					type: 'number',
					label: 'Count',
					key: 'count',
					validation: {
						required: true,
						minLength: 1,
						maxLength: 9
					},
					valid: false,
					touched: false,
					message: ''
				},
				numDice: {
					type: 'number',
					label: 'Cost',
					key: 'cost',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 9
					},
					valid: false,
					touched: false,
					message: '',
					append: 'gp'
				},
				bonusDamage: {
					type: 'number',
					label: 'Weight',
					key: 'weight',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 9
					},
					valid: false,
					touched: false,
					message: '',
					append: 'lbs'
				},
			},
			formIsValid: false,
			loading: false,
			error: '',
			success:''
		}

	}


	// Handle our form submission to create an item on the server
	updateItem = (event) => {
		event.preventDefault();
		this.props.saveItem();
		this.props.handleClose('item')
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

				return <DDSelect 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateItem}
						options={formElement.state.options}
						value={this.props.inventory.currentItem?this.props.inventory.currentItem[formElement.state.key]:''} />
			}else{
				return <DDInput 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateItem}
						value={this.props.inventory.currentItem?this.props.inventory.currentItem[formElement.state.key]:''} />
			}

		});


		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose('item')} >
			
				<Modal.Header closeButton>
					<Modal.Title>{ this.props.inventory.currentItemIndex === -1?'New':'Edit'} Item</Modal.Title>
				</Modal.Header>
				
				<Form onSubmit={(e) => this.updateItem(e)}>
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
						{ this.props.inventory.currentItemIndex === -1?null:<Button variant="danger" onClick={() => this.props.deleteItem()}>Delete</Button>}
						<Button variant="secondary" onClick={() => this.props.handleClose('item')}>Close</Button>
						<Button variant="success" type="submit">Save</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	};

}

const mapStateToProps = state => {
	return {
		inventory: state.inventory,
		// equipment: state.equipment,
		// stats: state.stats.stats,
		// // skills: state.skills.skills
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateItem: (key, value) => dispatch({type: actionTypes.INVENTORY_ITEMS, payload: {key, value}}),
		saveItem: (key, value) => dispatch({type: actionTypes.INVENTORY_SAVE_ITEMS, payload: {key, value}}),
		deleteItem: (key, value) => dispatch({type: actionTypes.INVENTORY_DELETE_ITEMS, payload: {key, value}})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryModal);