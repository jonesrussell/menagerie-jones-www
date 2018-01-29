import React, { Component } from 'react';

class Home extends Component { 
	constructor() {
		super();

		this.state = { 
			title: '',
			body: ''
		}
	}

	componentDidMount() {
		let host = 'http://live-menagerie-jones.pantheonsite.io';
		//let host = 'http://192.168.0.116';
		fetch(host + '/node/2?_format=json')
			.then(results => {
				return results.json();
			})
			.then(data => {
				// Add host to portrait image src, hacky
				let body = data.body[0].value.replace(/\/sites\//, host + '/sites/');
				this.setState({
					title: data.title[0].value,
					body: body 
				});
			});
	}

	render() { 
		import('./Home.scss');
		let body = <div dangerouslySetInnerHTML={{__html: this.state.body}} />;

		return (
			<div id="page-home" style={{ textAlign: 'center' }}>
				{body}
			</div>
		)
	}	
}

export default Home

