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

class GemModal extends Component {
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
				number: {
					type: 'number',
					label: 'Number',
					key: 'number',
					validation: {
						required: true,
						maxLength: 10
					},
					valid: false,
					touched: false,
					message: ''
				},
				value: {
					type: 'number',
					label: 'Value',
					key: 'value',
					validation: {
						required: true,
						minLength: 0,
						maxLength: 10
					},
					valid: false,
					touched: false,
					message: ''
				},
				money: {
					type: 'text',
					label: 'Rate',
					key: 'money',
					validation: {
						required: true,
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
	updateGems = (event) => {
		event.preventDefault();
		this.props.saveGems();
		this.props.handleClose('gems')
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
						onChange={this.props.updateGems}
						options={options}
						value={this.props.equipment.currentGem?this.props.equipment.currentGem[formElement.state.key]:''} />
			}else{
				return <DDInput 
						key={formElement.id} 
						formElement={formElement}
						onChange={this.props.updateGems}
						value={this.props.equipment.currentGem?this.props.equipment.currentGem[formElement.state.key]:''} />
			}

		});


		return (
			<Modal show={this.props.show} onHide={() => this.props.handleClose('gems')} >
			
				<Modal.Header closeButton>
					<Modal.Title>{ this.props.equipment.currentGemIndex === -1?'New':'Edit'} Gems</Modal.Title>
				</Modal.Header>
				
				<Form onSubmit={(e) => this.updateGems(e)}>
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
						{ this.props.equipment.currentGemIndex === -1?null:<Button variant="danger" onClick={() => this.props.deleteGems()}>Delete</Button>}
						<Button variant="secondary" onClick={() => this.props.handleClose('gems')}>Close</Button>
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
		updateGems: (key, value) => dispatch({type: actionTypes.EQUIP_GEMS, payload: {key, value}}),
		saveGems: (key, value) => dispatch({type: actionTypes.EQUIP_SAVE_GEMS, payload: {key, value}}),
		deleteGems: (key, value) => dispatch({type: actionTypes.EQUIP_DELETE_GEMS, payload: {key, value}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GemModal);