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

class ArmorModal extends Component {
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
				type: {
					type: 'text',
					label: 'Type',
					key: 'type',
					validation: {
						required: true,
						maxLength: 100
					},
					valid: false,
					touched: false,
					message: ''
				},
				prof: {
					type: 'faCheck',
					label: 'Prof.',
					key: 'prof',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: ''
				},
				ac: {
					type: 'number',
					label: 'AC',
					key: 'ac',
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
	
	// Handle our form submission to create an weapon on the server
	updateArmor = (event) => {
		event.preventDefault();
		this.props.saveArmor();
		this.props.handleClose('armor')
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
						onChange={this.props.updateArmor}
						options={options}
						value={this.props.equipment.currentArmor?this.props.equipment.currentArmor[formElement.state.key]:''} />
			}else{
				return <DDInput 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateArmor}
						value={this.props.equipment.currentArmor?this.props.equipment.currentArmor[formElement.state.key]:''} />
			}

		});


		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose('armor')} >
			
				<Modal.Header closeButton>
					<Modal.Title>{ this.props.equipment.currentArmorIndex === -1?'New':'Edit'} Armor</Modal.Title>
				</Modal.Header>
				
				<Form onSubmit={(e) => this.updateArmor(e)}>
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
						{ this.props.equipment.currentArmorIndex === -1?null:<Button variant="danger" onClick={() => this.props.deleteArmor()}>Delete</Button>}
						<Button variant="secondary" onClick={() => this.props.handleClose('armor')}>Close</Button>
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
		updateArmor: (key, value) => dispatch({type: actionTypes.EQUIP_ARMOR, payload: {key, value}}),
		saveArmor: (key, value) => dispatch({type: actionTypes.EQUIP_SAVE_ARMOR, payload: {key, value}}),
		deleteArmor: (key, value) => dispatch({type: actionTypes.EQUIP_DELETE_ARMOR, payload: {key, value}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmorModal);