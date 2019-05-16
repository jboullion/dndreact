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
import ProgressBar from 'react-bootstrap/ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/pro-solid-svg-icons' //, faCampfire, faCampground //shortrest and long rest // faEyeSlash, faDeaf conditions

import Spell from '../../../components/Tools/Spells/Spell';

import { calcStatBonus } from '../../../functions'
import * as actionTypes from '../../../store/actions/actionTypes'

// import CharacterCSS from './Character.module.css';


class Spells extends Component {
	
	render() {
		const spellAttack = this.props.character.profBonus+calcStatBonus(this.props.stats[3]);

		return (
			<Container>
				<Row className="w-100 my-2">
					<Col xs={8}>
						<div className="d-flex justify-content-center align-items-center">
							<div><small>Atk+</small> <br />{spellAttack} </div>
							<div><small>DC</small><br />{8+spellAttack} </div>
						</div>
					</Col>
					<Col xs={4}className="text-right">
						<Button variant="success"><FontAwesomeIcon icon={faBed} /> Rest</Button>
					</Col>
				</Row>

				 <Row>
					<Col>
						<legend className="mb-2">Spellbook</legend>
						<Tabs justify defaultActiveKey="0">
							<Tab eventKey="0" title="0" className="mt-2">
								<Button className="my-2">Add Spell</Button>

								<Spell className="card my-2" 
								title="Vicious Mocking" 
								somatic="VSM"
								desc="Some quick example text to build on the card title and make up the bulk of the card's content." />
							</Tab>
							<Tab eventKey="1" title="1" className="mt-2">
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

								<Button className="my-2">Add Spell</Button>

								<Spell className="card my-2" 
										title="Vicious Mocking" 
										somatic="VSM"
										desc="" />
							</Tab>
							<Tab eventKey="2" title="2" className="mt-2">
								Level 2
							</Tab>
							<Tab eventKey="3" title="3" className="mt-2">
								Level 3
							</Tab>
							<Tab eventKey="4" title="4" className="mt-2">
								Level 4
							</Tab>
							<Tab eventKey="5" title="5" className="mt-2">
								Level 5
							</Tab>
							<Tab eventKey="6" title="6" className="mt-2">
								Level 6
							</Tab>
							<Tab eventKey="7" title="7" className="mt-2">
								Level 7
							</Tab>
							<Tab eventKey="8" title="8" className="mt-2">
								Level 8
							</Tab>
							<Tab eventKey="9" title="9" className="mt-2">
								Level 9
							</Tab>
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