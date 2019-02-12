import React, { Component } from 'react';


class CrimesList extends Component {



render() {

const crimesComposed= this.props.crimes.map((item, index)=>{
	return (
		<li key={index}>
			<h3>{item.description}</h3>
			<h6>Case Number: {item.case_number}</h6>
			<h6>Date: {item.date}</h6>
			<button onClick={this.props.removeCrime.bind(null, index)}>Remove</button>
		</li>
	)
})
	return (
		<ul>
			{crimesComposed}
		</ul>)
}
}


export default CrimesList;