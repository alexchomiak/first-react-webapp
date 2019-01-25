import React from 'react'
export default class Option extends React.Component {
	constructor(props) {
		super(props)

	//css styling for component container div
		this.containerStyle = {
			display: 'flex',
			background: '#545454',
			padding: '.5rem .5rem .5rem 1rem',
			margin: '0',
			borderBottom: '1px groove white',
			borderRight: '1px groove white',
			borderLeft:'3px solid white'
		}
		
		this.btnStyle={
			margin: '15px 5px',
			border: 'none',
			backgroundColor: 'white',
			color: 'dark-grey'
		}

		this.handleRemove = this.handleRemove.bind(this)
	}
	
	handleRemove() {
		this.props.handleRemove(this.props.num)
	}

	render() {
		return (
			<div className="option">
				<p > {this.props.num}. {this.props.option} </p>
				<button onClick={this.handleRemove} className="button button--delete" > X </button>
			</div>
		)
	}
}


