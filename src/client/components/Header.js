import React from 'react'
export default class Header extends React.Component {
	constructor(props) {
		super(props)

		//component state
		this.state = {
			
		}

		//css styling for component container div
		this.containerStyle = {
			textAlign: 'center',
			background: 'purple',
			color: 'white',
			margin: '1rem 6rem',
			border: '1px groove white'
		}

	}
	
	render() {
		return (
			<div style={this.containerStyle}>
				<h1> {this.props.title} </h1>	
				<h3> {this.props.subtitle}</h3>
			</div>
		)
	}
}



