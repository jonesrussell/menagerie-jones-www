import React, { Component } from 'react'
import $ from 'jquery'

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: '',
		};
	};

	componentDidMount() {
		fetch('http://menagerie-jones.com/node/3?_format=json')
			.then(results => {
				return results.json();
			})
				.then(data => {
				let title = data.title[0].value;
				let body = $(data.body[0].value).html();
				this.setState({ title: title, body: body });
			});
	}

	render() {
		return (
			<div id="page-portfolio">
				<h1>{this.state.title}</h1>
				{this.state.body}
			</div>
		)
	}
}

export default Portfolio 
