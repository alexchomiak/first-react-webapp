import React from 'react'
export default class Header extends React.Component {
	constructor(props) {
		super(props)

		//component state
		this.state = {
			
		}

	}
	
	render() {
		return (
			<div className="header">
				<div className="container">
				<h1 className="header__title">  {this.props.title} </h1>	
				<h3 className="header__subtitle"> {this.props.subtitle}</h3>
				</div>
			</div>
		)
	}
}



