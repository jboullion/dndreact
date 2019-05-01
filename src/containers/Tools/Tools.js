import React, { Component } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import ToolsCSS from './Tools.module.css';

import Roll from './Roll/Roll';


class Tools extends Component {
	render() {
		return (
				<div id="Tools">
					<Tabs justify defaultActiveKey="roll">
						<Tab eventKey="character" title="Character">
							<h2>Tab Character</h2>
						</Tab>
						<Tab eventKey="spells" title="Spells">
							<h2>Tab Spells</h2>
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

/*
<Nav.Item>
	<Nav.Link eventKey="link-2">Initiative</Nav.Link>
</Nav.Item>
<Nav.Item>
	<Nav.Link eventKey="link-2">Players</Nav.Link>
</Nav.Item>
*/

export default Tools;