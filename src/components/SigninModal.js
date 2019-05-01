import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const signinModal = (props) => {

	return <Modal show={props.show} onHide={props.toggleSignin} >
			<Modal.Header closeButton>
				<Modal.Title>Sign In</Modal.Title>
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

export default signinModal;