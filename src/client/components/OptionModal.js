import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => {
		return (
			<Modal 
				isOpen={!!props.decision}
				contentLabel={"Selected Option"}
				onRequestClose={props.close}
				closeTimeoutMS={300}
				className="modal"
				>
				<div className="modal__title">
					<p style={{padding: "0px"}}>The Computer has spoken...</p>
				</div>
				<div className="modal__body">
				<p> {props.decision} </p>
				<button className="button button--modal" onClick={props.close}> I Shall Comply </button>
				</div>

			</Modal>
		)
}
export default OptionModal
