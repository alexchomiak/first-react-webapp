import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => {
		return (
			<Modal 
				isOpen={!!props.decision}
				contentLabel={"Selected Option"}
				onRequestClose={props.close}
				>
				<h1> The Computer has spoken...</h1>
				<p> {props.decision} </p>
				<button onClick={props.close}> Ooof </button>
			</Modal>
		)
}
export default OptionModal
