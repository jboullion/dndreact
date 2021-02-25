import React, { Component } from 'react';

//We keep these components in our components folder since they are Pure / functional / stateless components
import Important from './Important';
import Info from './Info';
import Stats from './Stats';
import Skills from './Skills';
import Equipment from './Equipment';
import Inventory from './Inventory';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CharacterCSS from './Character.module.css';


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


	render() {
		return (
			<Container id="Character">
				<Important />
				
				<Tabs justify defaultActiveKey="info" className={CharacterCSS.tabs}>
					<Tab eventKey="info" title="Info" className="mt-2">
						<Info />
					</Tab>
					<Tab eventKey="stats" title="Stats" className="mt-2">
						<Stats />
					</Tab>
					<Tab eventKey="skills" title="Skills" className="mt-2">
						<Skills />
					</Tab>
					<Tab eventKey="equipment" title="Equipment" className="mt-2">
						<Equipment />
					</Tab>
					<Tab eventKey="inventory" title="Inventory" className="mt-2">
						<Inventory />
					</Tab>
				</Tabs>
			</Container>
		)
	};
}

export default Character;