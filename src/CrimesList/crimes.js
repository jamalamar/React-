import React, { Component } from 'react';


class CrimesList extends Component {

render() {

const crimesComposed= this.props.crimes.map((item, index)=>{

	return (
		<li key={index}>
			<h5>{item.block}</h5>
			<h5>{item.case_number}</h5>
			<h5>{item.date}</h5>
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