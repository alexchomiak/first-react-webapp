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

    state = {
        error: false
    }

	addOption(e){
		e.preventDefault()
		if(e.target.option.value === "") {
            console.log('err')
            this.setState(() => ({error: true}))
            return;
        }

        this.setState(() => ({error: false}))

		let option = {
			key: this.props.ops.length + 1,
			title: e.target.option.value
		}

		this.props.addOption(option)
		
		e.target.option.value = '';
	}
	
	render() {
		return ( <div className="widget-footer">
			
            {this.state.error && <p className="add-option--error"> Please enter an option to be added! </p>}
		<form className="add-option" onSubmit={this.addOption}>

                    
					<input className="add-option__input" name="option" type="text" placeholder="Add an option..." />
				
				
					<button className="button" name="form-button"> Add Option </button>
		</form>
		</div>)
	}
}



