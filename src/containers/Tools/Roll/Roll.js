import React, { Component } from 'react';

import Dice from './Dice';

import { playerDiceRoll, getRandomInt, numericSort } from '../../../functions'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { faDiceD4,faDiceD6,faDiceD8,faDiceD10,faDiceD12,faDiceD20 } from '@fortawesome/pro-solid-svg-icons'

import RollCSS from './Roll.module.css';

class Roll extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			overallTotal: 0,
			recentTotal: 0,
			recentResults: [],
			dice: [ 
				{ value: 20, num: 1, component: faDiceD20 },
				{ value: 12, num: 1, component: faDiceD12 },
				{ value: 10, num: 1, component: faDiceD10 },
				{ value: 8, num: 1, component: faDiceD8 },
				{ value: 6, num: 1, component: faDiceD6 },
				{ value: 4, num: 1, component: faDiceD4	}
			]
		}
	}


	//Reset our dice totals
	clearOverallTotal = () => {
		this.setState({ overallTotal: 0, recentTotal: 0, recentResults: [] });
	}


	//Update the number of dice to roll.
	updateDieNumber = (event, value) => {
		//prevent numbers greater than 999. Lol who rolls 999 dice?...it's fun!
		if(event.target.value > 999) return;

		const dieIndex = this.state.dice.findIndex(d => {
			return d.value === value;
		});

		//get a copy of the die we want to update
		const die = {
			...this.state.dice[dieIndex]
		};

		//update our die with the value of our input
		die.num = event.target.value;

		//copy our state dice
		const dice = [...this.state.dice];

		//update the dice array in the value of the changed dice with the new updated die object
		dice[dieIndex] = die;

		this.setState({dice: dice});
	}


	//Roll the dice!
	rollDice = (die) => {
		let total = 0;
		let results = [];

		//Get our results
		for(let d = 0; d < die.num; d++){
			let result = playerDiceRoll(die.value);
			total += result;
			results.push(result);
		}

		//Sort our results in Descending order
		results = results.sort(numericSort).reverse();

		this.setState({overallTotal: (this.state.overallTotal + total), recentTotal: total, recentResults: results});

	}

	//Build our results string for display
	displayResults = () => {
		let resultString = '';

		//Build a display string for the results
		if(this.state.recentResults.length){
			for(let r = 0; r < this.state.recentResults.length; r++){
				resultString += ''+this.state.recentResults[r];
				
				if( r === this.state.recentResults.length - 1 ){
					resultString += ' = ';
				}else{
					resultString += ' + ';
				}
			}

			return resultString;
		}

	}

	render() {
		return (
			<Container id="Roll">
				<Row className="mb-3">
					<Col xs={6}>
						<legend>Total: <span id="overall-total">{this.state.overallTotal}</span></legend>
					</Col>
					<Col xs={6} className="text-right">
						<Button variant="danger" id="clear-roll" onClick={this.clearOverallTotal}>Clear</Button>
					</Col>
				</Row>

				<Row>
					<Col className={RollCSS.results}>
						{this.displayResults()} <strong className={RollCSS.total}>{this.state.recentTotal}</strong>
					</Col>
				</Row>

				<Row>
					{this.state.dice.map(die => {
						return <Dice key={die.value} die={die} rollDice={this.rollDice} updateDieNumber={this.updateDieNumber}/>
					})}
				</Row>

			</Container>
		)
	};
}

export default Roll;