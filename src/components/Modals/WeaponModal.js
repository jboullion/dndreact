import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const weaponModal = (props) => {

	return <Modal show={props.show} onHide={() => props.handleClose('weapon')} >
			<Modal.Header closeButton>
				<Modal.Title>Add | Edit Weapon</Modal.Title>
			</Modal.Header>
		
			<Modal.Body>
				<p>Modal body text goes here.</p>
			</Modal.Body>
		
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.handleClose('weapon')}>Close</Button>
				<Button variant="primary" onClick={() => props.handleClose('weapon')}>Save</Button>
			</Modal.Footer>
		</Modal>;
}

export default weaponModal;