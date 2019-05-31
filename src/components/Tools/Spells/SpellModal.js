import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../../../store/actions/actionTypes'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import DDInput from '../DDInput';
import DDSelect from '../DDSelect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'

class SpellModal extends Component {
	constructor(props, context) {
		super(props, context);

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
				level: {
					type: 'select',
					label: 'Level',
					key: 'level',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 1
					},
					valid: false,
					touched: false,
					message: '',
					options: [ 
						{
							name: 'Cantrip',
							value: 0
						},
						{
							name: '1',
							value: 1
						},
						{
							name: '2',
							value: 2
						},
						{
							name: '3',
							value: 3
						},
						{
							name: '4',
							value: 4
						},
						{
							name: '5',
							value: 5
						},
						{
							name: '6',
							value: 6
						},
						{
							name: '7',
							value: 7
						},
						{
							name: '8',
							value: 8
						},
						{
							name: '9',
							value: 9
						}
					]
				},
				castingTime: {
					type: 'number',
					label: 'Casting Time',
					key: 'cTime',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 9
					},
					valid: false,
					touched: false,
					message: ''
				},
				castingType: {
					type: 'select',
					label: '',
					key: 'cType',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 9
					},
					valid: false,
					touched: false,
					message: '',
					options: [ 
						{
							name: 'Action',
							value: 'Action'
						},
						{
							name: 'Bonus Action',
							value: 'Bonus Action'
						},
						{
							name: 'Hour',
							value: 'Hour'
						},
						{
							name: 'Minute',
							value: 'Minute'
						},
						{
							name: 'No Action',
							value: 'No Action'
						},
						{
							name: 'Reaction',
							value: 'Reaction'
						}
					]
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
					type: 'select',
					label: 'Dice Value',
					key: 'diceValue',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 2
					},
					valid: false,
					touched: false,
					message: '',
					options: [ 
						{
							name: 'd4',
							value: 4
						},
						{
							name: 'd6',
							value: 6
						},
						{
							name: 'd8',
							value: 8
						},
						{
							name: 'd10',
							value: 10
						},
						{
							name: 'd12',
							value: 12
						},
						{
							name: 'd20',
							value: 20
						},
						// {
						// 	name: 'd100',
						// 	value: 100
						// },
					]
				},
				bonusDamage: {
					type: 'number',
					label: 'Bonus Damange',
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
			},
			formIsValid: false,
			loading: false,
			error: '',
			success:''
		}

	}


	// Handle our form submission to create an item on the server
	updateSpell = (event) => {
		// event.preventDefault();
		// this.props.saveSpell();
		// this.props.handleClose('item')
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
						onChange={this.props.updateSpell}
						options={formElement.state.options}
						value={this.props.spells.currentSpell?this.props.spells.currentSpell[formElement.state.key]:''} />
			}else{
				return <DDInput 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateSpell}
						value={this.props.spells.currentSpell?this.props.spells.currentSpell[formElement.state.key]:''} />
			}

		});


		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose()} >

				<Modal.Header closeButton>
					<Modal.Title>{ this.props.spells.currentSpellIndex === -1?'New':'Edit'} Spell</Modal.Title>
				</Modal.Header>

				<Form onSubmit={(e) => this.updateSpell(e)}>
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
						{ this.props.spells.currentSpellIndex === -1?null:<Button variant="danger" onClick={() => this.props.deleteSpell()}>Delete</Button>}
						<Button variant="secondary" onClick={() => this.props.handleClose()}>Close</Button>
						<Button variant="success" type="submit">Save</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	};

}


const mapStateToProps = state => {
	return {
		spells: state.spells,
		// stats: state.stats.stats,
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateSpell: (key, value) => dispatch({type: actionTypes.SPELLS_SPELL, payload: {key, value}}),
		saveSpell: (key, value) => dispatch({type: actionTypes.SPELLS_SAVE_SPELL, payload: {key, value}}),
		deleteSpell: (key, value) => dispatch({type: actionTypes.SPELLS_DELETE_SPELL, payload: {key, value}})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellModal);