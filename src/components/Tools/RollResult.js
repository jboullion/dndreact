import React from 'react';

import RollResultCSS from './RollResult.module.css';

const rollResult = (props) => {
	let roll = props.rollResult.roll;

	if(props.rollResult.adv && props.rollResult.advRoll > props.rollResult.roll){
		roll = props.rollResult.advRoll;
	}

	return <div className="d-flex justify-content-center align-items-center ">
				{props.rollResult.adv?<div className={RollResultCSS.total}><small>Adv</small> <br />{props.rollResult.advRoll} <span>/</span></div>:''}
				<div className={RollResultCSS.total}><small>Roll</small> <br />{props.rollResult.roll} <span>+</span></div>
				<div className={RollResultCSS.total}><small>Bonus</small><br />{props.rollResult.bonus} <span>+</span></div>
				<div className={RollResultCSS.total}><small>Prof</small><br />{props.rollResult.prof*props.profBonus} <span>=</span></div>
				<div className={RollResultCSS.total}><small>Total</small><br /><strong>{roll + props.rollResult.bonus + (props.rollResult.prof*props.profBonus)}</strong></div>
			</div>;
}

export default React.memo(rollResult);