import React, { Component } from 'react'
import $ from 'jquery'

class About extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: '',
		};
	};

	componentDidMount() {
		fetch('http://menagerie-jones.com/node/1?_format=json')
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
			<div id="page-about">
				<h1>{this.state.title}</h1>
				{this.state.body}
			</div>
		)
	}
}

export default About 
