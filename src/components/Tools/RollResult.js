import React from 'react';

import RollResultCSS from './RollResult.module.css';

const rollResult = (props) => {

	return <div className="d-flex justify-content-center align-items-center">
				<div className={RollResultCSS.total}><small>Roll</small> <br />{props.rollResult.roll} <span>+</span></div>
				<div className={RollResultCSS.total}><small>Bonus</small><br />{props.rollResult.bonus} <span>+</span></div>
				<div className={RollResultCSS.total}><small>Prof</small><br />{props.rollResult.prof?props.profBonus:0} <span>=</span></div>
				<div className={RollResultCSS.total}><small>Total</small><br /><strong>{props.rollResult.roll + props.rollResult.bonus + (props.rollResult.prof?props.profBonus:0)}</strong></div>
			</div>;
}

export default rollResult;