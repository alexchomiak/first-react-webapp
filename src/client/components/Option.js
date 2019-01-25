import React from 'react'
export default class Option extends React.Component {
	constructor(props) {
		super(props)

		this.handleRemove = this.handleRemove.bind(this)
	}
	
	handleRemove() {
		this.props.handleRemove(this.props.num)
	}

	render() {
		return (
			<div className="option">
				<p style={{paddingLeft:"10px"}}> {this.props.num}. {this.props.option} </p>
				<button onClick={this.handleRemove} className="button button--delete" > X </button>
			</div>
		)
	}
}


