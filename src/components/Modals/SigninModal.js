import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const signinModal = (props) => {

	return <Modal show={props.show} onHide={() => props.handleClose('signin')} >
			<Modal.Header closeButton>
				<Modal.Title>Sign In</Modal.Title>
			</Modal.Header>
		
			<Modal.Body>
				<p>Modal body text goes here.</p>
			</Modal.Body>
		
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.handleClose('signin')}>Close</Button>
				<Button variant="primary" onClick={() => props.handleClose('signin')}>Sign In</Button>
			</Modal.Footer>
		</Modal>;

}

export default signinModal;