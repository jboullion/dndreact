import React from 'react';

import RollResultCSS from './RollResult.module.css';

const damageResult = (props) => {

	// if(props.rollResult.adv && props.rollResult.advRoll > props.rollResult.roll){
	// 	roll = props.rollResult.advRoll;
	// }

	return <div className="d-flex justify-content-center align-items-center">
				<div className={RollResultCSS.total}>{displayResults(props.rollResult)} <strong>{props.rollResult.totalDamage}</strong> Damage</div>
			</div>;
}

export default React.memo(damageResult);


//Build our results string for display
function displayResults(rollResult){
	let resultString = '';
	let roll = rollResult;

	//Build a display string for the results
	if(roll.damageRolls){
		for(let r = 0; r < roll.damageRolls.length; r++){
			resultString += ''+roll.damageRolls[r];
			
			if( r === roll.damageRolls.length - 1 ){

				if(rollResult.bonusDamage > 0){
					resultString += ' + '+rollResult.bonusDamage;
				}

				resultString += ' = ';
			}else{
				resultString += ' + ';
			}
		}

	}else{
		
	}

	return resultString;

}