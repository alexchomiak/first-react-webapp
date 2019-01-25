import React from 'react'
import Option from './Option.js'
export default class Options extends React.Component {
	constructor(props) {
		super(props)

		//component state
		this.state = {
			
		}

		//css styling for component container div
		this.containerStyle = {	
			color: 'white',
			background: "#38383a",
			margin: '1rem 6rem 0rem 6rem'
		}
		
		this.buttonContainer = {
			display:'flex',
			padding: '.1rem .5rem',
			border: '1px groove white'
		}

		this.btnStyle = {
			margin: '.5rem .1rem'
		}
	}

	
	render() {
		return (
			<div >
				<div className="widget-header">
				<p style={{flexGrow: 10}}> {this.props.options.length > 0 ? "Your options..." : "..."} </p>
				<button className="button button--link" disabled={this.props.options.length === 0} onClick={this.props.removeAll}> Remove All </button>

				</div>
				
				{this.props.options.length > 0 ? this.props.options.map((option) => <Option handleRemove={this.props.handleRemove} key={option.key} num={option.key} option={option.title}/>) :
					<p className="widget__message"> Enter an option below to get started! </p>
				}
				
			</div>
		)
	}
}



