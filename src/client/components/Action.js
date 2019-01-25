import React from 'react'
export default function Action(props){

		return (
			<div style={containerStyle}>
				<button style={btnStyle} disabled={props.optionsSize === 0} name="make-decision" onClick={props.makeDecision}>
					{(props.optionsSize > 0) ? "Click to make a decision!!!" : "..."}
				</button> 			
			</div>
		)
	
}
	//css styling for component container div
		const containerStyle = {
			margin: '0rem 6rem'
		}
	
	const btnStyle = {
		display:'block',
		textAlign: 'center',
		padding: '1.5rem 0',
		border: '1px groove white',
		fontSize: '20px',
		backgroundColor: 'purple',
		color: 'white',
		display:'inline-block',
		width: "100%",
		margin: '0'
		}
		

