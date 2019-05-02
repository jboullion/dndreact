import React, { Component } from 'react';

//We keep these components in our components folder since they are Pure / functional / stateless components
import Important from '../../../components/Tools/Character/Important';

import Container from 'react-bootstrap/Container';

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

			</Container>
		)
	};
}

export default Character;