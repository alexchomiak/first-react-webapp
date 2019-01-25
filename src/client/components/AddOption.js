import React from 'react'
export default class AddOption extends React.Component {
	constructor(props) {
		super(props)

		//component state
		this.state = {

		}

		//css styling for component container div
		this.containerStyle = {
			background: 'purple',
			margin: '0rem 6rem',
			padding:'1rem .1rem',
			whiteSpace: 'nowrap',
			borderRight: '1px groove white',
			borderLeft: '1px groove white',
			borderBottom: '1px groove white'

		}

		this.textBoxStyle = {
			width: '75%',
			lineHeight: '80%',
			margin: '0 1% 0 4%',
			padding: '.5rem 0',
			fontSize: '15px'
		}
		
		this.addOption = this.addOption.bind(this)
	}

	addOption(e){
		e.preventDefault()
		if(e.target.option.value === "") return
		let option = {
			key: this.props.ops.length + 1,
			title: e.target.option.value
		}

		this.props.addOption(option)
		
		e.target.option.value = '';
	}
	
	render() {
		return (
			
	
		<form onSubmit={this.addOption}>
			<div style={this.containerStyle}>
				
					<input style={this.textBoxStyle} name="option" type="text" placeholder="Add an option..." />
				
				
					<button style={{width: '15%', overflow: 'hidden', height:'35px', margin :"0 4% 0 1%"}} name="form-button"> Add Option </button>


			</div>
		</form>
						)
	}
}



