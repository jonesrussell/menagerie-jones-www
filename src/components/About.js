import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
		};
	};

	componentDidMount() {
		//fetch('http://live-menagerie-jones.pantheonsite.io/node/1?_format=json')
		fetch('http://192.168.0.116/node/1?_format=json')
			.then(results => {
				return results.json();
			})
			.then(data => {
				let title = data.title[0].value;
				let body = <div dangerouslySetInnerHTML={{__html: data.body[0].value}} />;
				this.setState({ title: title, body: body });
			});
	}

	render() {
		return (
			<div id="page-about">
				<h1>{this.state.title}</h1>
				<hr/>
				<div className="main-body">
					{this.state.body}
				</div>
			</div>
		)
	}
}

export default About 
