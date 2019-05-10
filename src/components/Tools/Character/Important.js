import React from 'react';
import { connect } from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
/*
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen, faUndoAlt } from '@fortawesome/pro-solid-svg-icons' //, faCampfire, faCampground //shortrest and long rest

import { calcProf, calcInit, calcPassive } from '../../../functions'
import * as actionTypes from '../../../store/actions'

import ImportantCss from './Important.module.css';

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
					<ProgressBar className={(damaged?(damaged > 80?ImportantCss.lowHealth:''):ImportantCss.fullHealth) + ' bg-danger' }>
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
						<FormControl type="number" value={props.character.hitdie} onChange={(e) => props.updateCharacter(e.target.value,'hitdie')} />
						<InputGroup.Append>
							<Button variant="primary" onClick={() => props.updateCharacter(props.character.level,'hitdie')}><FontAwesomeIcon icon={faUndoAlt} className="fa-fw" /></Button>
						</InputGroup.Append>
						{/* <InputGroup.Append>
							<ButtonGroup>
								<DropdownButton variant="secondary" as={ButtonGroup} title="">
									{props.character.hitdie.map((die, index) => {
										return <Dropdown.Item key={index} eventKey={index} className="font-weight-bold">d{die}</Dropdown.Item>;
									})}
								</DropdownButton>
							</ButtonGroup>
						</InputGroup.Append> */}

					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Prof</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl readOnly={props.character.profBonusLock?'readOnly':''} type="number" value={calcProf(props.character)} onChange={(e) => props.updateLockedCharacter(e.target.value,'profBonus')} />
						<InputGroup.Append>
							<Button variant={props.character.profBonusLock?'primary':'secondary text-white'} onClick={() => props.updateCharacter(!props.character.profBonusLock,'profBonusLock')}><FontAwesomeIcon icon={props.character.profBonusLock?faLock:faLockOpen} className="fa-fw" /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Init</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl readOnly={props.character.initLock?'readOnly':''} type="number" value={ calcInit(props.character, props.stats) } onChange={(e) => props.updateLockedCharacter(e.target.value,'init')} />
						<InputGroup.Append>
							<Button variant={props.character.initLock?'primary':'secondary text-white'} onClick={() => props.updateCharacter(!props.character.initLock,'initLock')}><FontAwesomeIcon icon={props.character.initLock?faLock:faLockOpen} className="fa-fw" /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Insight</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl readOnly={props.character.insightLock?'readOnly':''} type="number" value={ calcPassive('Insight', props.character, props.stats, props.skills) } onChange={(e) => props.updateLockedCharacter(e.target.value,'insight')} />
						<InputGroup.Append>
							<Button variant={props.character.insightLock?'primary':'secondary text-white'} onClick={() => props.updateCharacter(!props.character.insightLock,'insightLock')}><FontAwesomeIcon icon={props.character.insightLock?faLock:faLockOpen} className="fa-fw" /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text className=" bg-primary text-white">Percep.</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl readOnly={props.character.perceptionLock?'readOnly':''} type="number" value={ calcPassive('Perception', props.character, props.stats, props.skills) } onChange={(e) => props.updateLockedCharacter(e.target.value,'perception')} />
						<InputGroup.Append>
							<Button variant={props.character.perceptionLock?'primary':'secondary text-white'} onClick={() => props.updateCharacter(!props.character.perceptionLock,'perceptionLock')}><FontAwesomeIcon icon={props.character.perceptionLock?faLock:faLockOpen} className="fa-fw" /></Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>

				<Col xs={6} lg={3} className="mb-3">
					<InputGroup style={{height: '100%'}}>
						{
							props.character.fails.map((value,index) => {
								let newFails = [...props.character.fails];
								newFails[index] = !newFails[index];
								return <Button key={index} variant={value?'danger':'secondary'} className={ImportantCss.saveThrows} onClick={() => props.updateCharacter(newFails,'fails')}>{(index + 1)}</Button>
							})
						}

						<InputGroup.Text className={ImportantCss.saveThrows + ' bg-primary'}>&nbsp;</InputGroup.Text>
						
						{
							props.character.saves.map((value,index) => {
								let newSaves = [...props.character.saves];
								newSaves[index] = !newSaves[index];
								return <Button key={index} variant={value?'success':'secondary'} className={ImportantCss.saveThrows} onClick={() => props.updateCharacter(newSaves,'saves')}>{(index + 1)}</Button>
							})
						}
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
		updateLockedCharacter: (value, index) => dispatch({type: actionTypes.CHAR_LOCK_UPDATE, payload: {value, index}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(important);