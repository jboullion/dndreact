import React, { Component } from 'react';

//We keep these components in our components folder since they are Pure / functional / stateless components
import Important from '../../../components/Tools/Character/Important';
import Info from '../../../components/Tools/Character/Info';
import Stats from '../../../components/Tools/Character/Stats';
import Skills from '../../../components/Tools/Character/Skills';
import Equipment from '../../../components/Tools/Character/Equipment';
import Inventory from '../../../components/Tools/Character/Inventory';


import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

/*
<?php require_once $BASE_DIR.'templates/tools/character/save.php'; ?>
<?php require_once $BASE_DIR.'templates/tools/character/important.php'; ?>

<?php require_once $BASE_DIR.'templates/tools/character/menu.php'; ?>

<div class="tab-content">
	<?php require_once $BASE_DIR.'templates/tools/character/info.php'; ?>
	<?php require_once $BASE_DIR.'templates/tools/character/stats.php'; ?>
	<?php require_once $BASE_DIR.'templates/tools/character/skills.php'; ?>
	<?php require_once $BASE_DIR.'templates/tools/character/equipment.php'; ?>
	<?php require_once $BASE_DIR.'templates/tools/character/inventory.php'; ?>
</div>
*/

class Character extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {

		}
	}


	render() {
		return (
			<Container id="Character">
				<Important />
				
				<Tabs justify defaultActiveKey="info">
					<Tab eventKey="info" title="info">
						<Info />
					</Tab>
					<Tab eventKey="stats" title="stats">
						<Stats />
					</Tab>
					<Tab eventKey="skills" title="skills">
						<Skills />
					</Tab>
					<Tab eventKey="equipment" title="equipment">
						<Equipment />
					</Tab>
					<Tab eventKey="inventory" title="inventory">
						<Inventory />
					</Tab>
				</Tabs>
			</Container>
		)
	};
}

export default Character;