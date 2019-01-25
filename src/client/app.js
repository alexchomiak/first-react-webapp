import React from 'react'
import ReactDOM from 'react-dom'
import Indecision from './components/indecision.js'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

/*
const template = (<div>
	<p> Hello World!</p>
</div> 
)
ReactDOM.render(template,document.getElementById('app'))
*/

ReactDOM.render(<Indecision />,document.getElementById("app"))
console.log("app is running!")
