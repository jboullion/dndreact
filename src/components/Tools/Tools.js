import React, { Component } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import ToolsCSS from './Tools.module.css';

import Roll from './Roll/Roll';
import Character from './Character/Character';
import Spells from './Spells/Spells';


class Tools extends Component {
	render() {
		return (
				<div id="Tools">
					<Tabs justify defaultActiveKey="spells">
						<Tab eventKey="character" title="Character">
							<Character />
						</Tab>
						<Tab eventKey="spells" title="Spells">
							<Spells />
						</Tab>
						<Tab eventKey="roll" title="Roll">
							<Roll />
						</Tab>
						<Tab eventKey="initiative" title="Initiative">
							<h2>Tab Initiative</h2>
						</Tab>
					</Tabs>
				</div>
		)
	};
}


export default Tools;