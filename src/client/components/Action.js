import React from 'react'
export default function Action(props){

		return (
			<div>
				<button className="big-button" disabled={props.optionsSize === 0} name="make-decision" onClick={props.makeDecision}>
					{(props.optionsSize > 0) ? "Click to make a decision!!!" : "..."}
				</button> 			
			</div>
		)
	
}
	
	
		

