import React from 'react';
import { connect } from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/pro-solid-svg-icons' //faLockAlt

import { getStatBonus, calcPassive } from '../../../functions'
import * as actionTypes from '../../../store/actions'

import Important from './Important.module.css';

const important = (props) => {

	const healthTotal = parseInt(props.character.maxHP) + parseInt(props.character.tempHP);
	const tempProgress = Math.ceil((props.character.tempHP / healthTotal) * 100);
	const hpProgress = Math.ceil((props.character.HP / healthTotal) * 100);
	const damaged = 100 - hpProgress - tempProgress;

	return <Row className="my-4">
				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-success text-white">HP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.HP} onChange={(e) => props.updateCharacter(e.target.value,'HP')} />
					</InputGroup>
					<ProgressBar className={(damaged?(damaged > 50?Important.lowHealth:''):Important.fullHealth) + ' bg-danger' }>
						<ProgressBar variant="success" now={hpProgress} key={1} />
						<ProgressBar variant="info" now={tempProgress} key={2} />
					</ProgressBar>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">AC</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.AC} onChange={(e) => props.updateCharacter(e.target.value,'AC')} />
					</InputGroup>
				</Col>


				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-info text-white">Temp HP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.tempHP} onChange={(e) => props.updateCharacter(e.target.value,'tempHP')} />
					</InputGroup>
				</Col>

				
				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Temp AC</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.tempAC} onChange={(e) => props.updateCharacter(e.target.value,'tempAC')} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Max HP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.maxHP} onChange={(e) => props.updateCharacter(e.target.value,'maxHP')} />
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Hit Die</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.level} readOnly />
						<InputGroup.Append>
							<ButtonGroup>
								<DropdownButton variant="secondary" as={ButtonGroup} title="">
									{props.character.hitdie.map((die, index) => {
										return <Dropdown.Item key={index} eventKey={index} className="font-weight-bold">d{die}</Dropdown.Item>;
									})}
								</DropdownButton>
							</ButtonGroup>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Prof</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.profBonus} onChange={(e) => props.updateCharacter(e.target.value,'profBonus')} />
						<InputGroup.Append>
							<Button variant="secondary text-white"><FontAwesomeIcon icon={faLock} /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Init</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={ props.character.init + getStatBonus('Dex',props.stats) } />
						<InputGroup.Append>
							<Button variant="secondary text-white"><FontAwesomeIcon icon={faLock} /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Insight</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={ calcPassive('Insight', props.character, props.stats, props.skills) } />
						<InputGroup.Append>
							<Button variant="secondary text-white"><FontAwesomeIcon icon={faLock} /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Percep.</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={ calcPassive('Perception', props.character, props.stats, props.skills) } />
						<InputGroup.Append>
							<Button variant="secondary text-white"><FontAwesomeIcon icon={faLock} /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup style={{height: '100%'}}>
						
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>1</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>2</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>3</Button>
	
						<InputGroup.Text className=" bg-primary text-white" style={{padding: 0, width: '14%'}}>&nbsp;</InputGroup.Text>
						
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>1</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>2</Button>
						<Button variant="secondary" style={{padding: 0, width: '14%'}}>3</Button>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3" id="xp">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className="bg-primary text-white">XP</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="number" value={props.character.XP} onChange={(e) => props.updateCharacter(e.target.value,'XP')} />
						{/* Figure out what the next level xp would be needed based on current xp <InputGroup.Append>
							<InputGroup.Text className=" bg-secondary text-white">/ 4000</InputGroup.Text>
						</InputGroup.Append> */}
					</InputGroup>
				</Col>

			</Row>;
}

const mapStateToProps = state => {
	return {
		character: state.char,
		stats: state.stats.stats,
		skills: state.skills.skills
	};
}


const mapDispatchToProps = dispatch => {
	return {
		updateCharacter: (value, index) => dispatch({type: actionTypes.CHAR_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(important);