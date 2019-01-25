// REACT COMPONENT FILE
// Filename: app.js
// Date component created: Tue Jan 22 23:08:39 CST 2019
// React component: app
// React version: 6.6.0
// Developer: Alex Chomiak
// Computer: 2018 Macbook Pro
import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options.js'
import AddOption from './AddOption.js'
import OptionModal from './OptionModal.js'

export default class Indecision extends React.Component {
	constructor(props) {
		super(props)
		
		//component state
		this.state = {
			options : [],
			decision: ""
		}

		this.addOption = this.addOption.bind(this)
		this.removeAll = this.removeAll.bind(this)
		this.makeDecision = this.makeDecision.bind(this)
		this.handleRemove = this.handleRemove.bind(this)

		//css styling for component container div
		this.containerStyle = {
			
		}
		
	}
	
	closeModal = () => {
		this.setState(() => ({decision: ""}))	
	}

	componentDidMount() {
		console.log('loading data')
		if(localStorage.getItem('options')) {
			this.setState((prevState) => {
				return {
					options: JSON.parse(localStorage.getItem('options'))
				}
			})
		}
	}

	componentDidUpdate(prevProps,prevState) {
		console.log('saving data')
		if(prevState.options.length != this.state.options.length)
		{
			localStorage.setItem('options',JSON.stringify(this.state.options))
		}
	}
	
	componentWillUnmount() {
		console.log('unmounted')
	}

	addOption(option) {
		console.log("added option ", option)
		
		for(let i = 0; i < this.state.options.length; i++) if(this.state.options[i].title === option.title) return
		
		this.setState({options: [...this.state.options, option]})
	}
	
	removeAll() {
		this.setState({options: []})
	}
	
	makeDecision(){
		let index = Math.floor(Math.random() * this.state.options.length)
		this.setState( (prevState) => ({decision: this.state.options[index].title}))
	}
	
	handleRemove(id) {
		this.setState((prevState) => {
			return {
				options: prevState.options.filter((option) => option.key !== id) 
			}
		})
	}

	render() {
		return (
			<div style={this.containerStyle}>
				<OptionModal close={this.closeModal} decision={this.state.decision}/>		

				<Header title = "Indecision" subtitle="May the divine power of the Computer solve your all your life's problems"/>

				<div className="container">
					<Action makeDecision={this.makeDecision} optionsSize={this.state.options.length}/>
					<div className="widget">
						<Options handleRemove={this.handleRemove} removeAll={this.removeAll} options={this.state.options}/>
						<AddOption addOption={this.addOption} ops={this.state.options}/>
					</div>
				</div>
			</div>
		)
	}
}














