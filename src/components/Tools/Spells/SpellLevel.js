import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actionTypes from '../../../store/actions/actionTypes'

// import Container from 'react-bootstrap/Container';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBed, faLock, faLockOpen } from '@fortawesome/pro-solid-svg-icons' //, faCampfire, faCampground //shortrest and long rest // faEyeSlash, faDeaf conditions

//import Spell from './Spell';

// import { calcStatBonus } from '../../../functions'
// import * as actionTypes from '../../../store/actions/actionTypes'

// import CharacterCSS from './Character.module.css';


class SpellLevel extends Component {

	displaySpellSlots(){

		return (
			<div>
				<legend>Level {this.props.level}</legend>
				<label className="mt-2">Spell Slots</label>
				<InputGroup className="mb-4">
					<FormControl type="number" defaultValue={4}  />
					<InputGroup.Text> / </InputGroup.Text>
					<FormControl type="number" defaultValue={3}  />
					<InputGroup.Append>
						<Button variant="primary">Use</Button>
					</InputGroup.Append>
				</InputGroup>

				<ProgressBar>
					<ProgressBar variant="info" now={75} />
				</ProgressBar>
			</div>
		)
	}

	displaySpellLevels(level){
		// console.log('level');
		// console.log(level);
		
		// console.log('this.props.spells.spells');
		// console.log(this.props.spells.spells);
		// console.log(this.props.spells.spells[level]);
		// if(this.props.spells.spells){
		// 	if(this.props.spells.spells[level]){
		// 		return ( 
		// 			this.props.spells.spells[level].map(function(spell, index){
		// 				return <Spell key={index} spell={spell} level={level} index={index} />;
		// 			})
		// 		)
		// 	}
		// }
	}


	render() {
		let level = this.props.level;

		return (
			<div>
				{ level > 0?this.displaySpellSlots():'' }

				{ this.displaySpellLevels(level) }
			</div>
		)
	};
}

const mapStateToProps = state => {
	return {
		//character: state.character,
		//stats: state.stats.stats,
		spells: state.spells
	};
}


const mapDispatchToProps = dispatch => {
	return {
		//toggleItemModal: (index) => dispatch({type: actionTypes.MODAL_SPELLS, payload: {index}})
		//updateCharacter: (value, index) => dispatch({type: actionTypes.CHAR_UPDATE, payload: {value, index}}),
		//updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellLevel);