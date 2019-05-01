import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const accountModal = (props) => {

	return <Modal show={props.show} onHide={props.toggleAccount} >
			<Modal.Header closeButton>
				<Modal.Title>Create Account</Modal.Title>
			</Modal.Header>
		
			<Modal.Body>
				<p>Modal body text goes here.</p>
			</Modal.Body>
		
			<Modal.Footer>
				<Button variant="secondary">Close</Button>
				<Button variant="primary">Save changes</Button>
			</Modal.Footer>
		</Modal>;
}

export default accountModal;