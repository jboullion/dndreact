import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes'

// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const spell = (props) => {
	return <Card className="my-2 touch-row" onClick={() => props.toggleSpellModal(props.level,props.index)}>
				<Card.Body>
					<h4 className="card-title">{props.spell.name}</h4>
					<h6 className="card-subtitle mb-2 text-muted">{props.spell.vsm}</h6>
					<p className="card-text">{props.spell.desc}</p>
				</Card.Body>
			</Card>;
}

const mapStateToProps = state => {
	return {
		//character: state.character,
		//stats: state.stats.stats,
		// spells: state.spells
	};
}


const mapDispatchToProps = dispatch => {
	return {
		toggleSpellModal: (level, index) => dispatch({type: actionTypes.MODAL_SPELLS, payload: {index, level}}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(spell);
//export default React.memo(spell);