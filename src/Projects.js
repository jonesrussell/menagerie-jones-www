import React, { Component } from 'react'
//import $ from 'jquery'

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: '',
		};
	};

	componentDidMount() {
		fetch('http://menagerie-jones.com/projects?_format=json')
			.then(results => {
				return results.json();
			})
				.then(data => {
					console.log(data);
/*				let title = data.title[0].value;
				let body = $(data.body[0].value).html();
				this.setState({ title: title, body: body });*/
			});
	}

	render() {
		return (
			<div id="page-projects">
				<h1>{this.state.title}</h1>
				<hr/>
				{this.state.body}
				<div className="row">
					<div className="col-md-7" style={{ overflow: 'hidden' }}><img src="http://placehold.it/700x300" alt="alt text"/></div>
					<div className="col-md-5">
						<h3>Project One</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
						<button className="btn btn-primary">Details</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects 
