import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import ProgressBar from 'react-bootstrap/ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faLock, faLockOpen } from '@fortawesome/pro-solid-svg-icons' //, faCampfire, faCampground //shortrest and long rest // faEyeSlash, faDeaf conditions

import SpellLevel from './SpellLevel';

import { calcStatBonus } from '../../../functions'
import * as actionTypes from '../../../store/actions/actionTypes'

// import CharacterCSS from './Character.module.css';


class Spells extends Component {

	displaySpells(){
		let SpellLevels = [];

		for(let i = 0; i < 10; i++){
			SpellLevels.push(<Tab key={i} eventKey={i} title={i} className="mt-2">
								<SpellLevel key={i} level={i} />
							</Tab>);
		}

		return SpellLevels;
	}

	render() {
		const spellAttack = this.props.character.profBonus+calcStatBonus(this.props.stats[3]);

		return (
			<Container>
				<Row className="w-100 my-2">
					<Col xs={6} md={4}>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text className=" bg-primary text-white">Atk+</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl readOnly={this.props.character.spellAtkLock?'readOnly':''} type="number" value={this.props.character.spellAtkLock?spellAttack:this.props.character.spellAtk} onChange={(e) => this.props.updateLockedCharacter(e.target.value,'spellAtk')} />
							<InputGroup.Append>
								<Button variant={this.props.character.spellAtkLock?'primary':'secondary text-white'} onClick={() => this.props.updateCharacter(!this.props.character.spellAtkLock,'spellAtkLock')}><FontAwesomeIcon icon={this.props.character.spellAtkLock?faLock:faLockOpen} className="fa-fw" /></Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
					<Col xs={6} md={4}>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text className=" bg-primary text-white">DC</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl type="number" defaultValue={spellAttack+8} readOnly />
						</InputGroup>
					</Col>
					<Col xs={4}className="text-right">
						<Button variant="success"><FontAwesomeIcon icon={faBed} /> Rest</Button>
					</Col>
				</Row>

				 <Row>
					<Col>
						<legend className="mb-2">Spellbook</legend>
						<Tabs justify defaultActiveKey="0">
							{ this.displaySpells() }
						</Tabs>
					</Col>
				</Row>
			</Container>
		)
	};
}

const mapStateToProps = state => {
	return {
		character: state.character,
		stats: state.stats.stats,
		skills: state.skills.skills
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateCharacter: (value, index) => dispatch({type: actionTypes.CHAR_UPDATE, payload: {value, index}}),
		updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells);