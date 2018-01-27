import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import $ from 'jquery';
import './Projects.scss';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: '',
			data: []
		};
	};

	componentDidMount() {
		let _this = this;

		fetch('http://live-menagerie-jones.pantheonsite.io/node/3?_format=json')
			.then(results => {
				return results.json();
			})
			.then(data => {
					let title = data.title[0].value;
					let body = '';

					if (typeof data.body[0] !== 'undefined') {
						body = $(data.body[0].value).html(); 
					}

					_this.setState({ title: title, body: body });
			});


		fetch('http://live-menagerie-jones.pantheonsite.io/projects?_format=json')
			.then(results => {
				return results.json();
			})
				.then(data => {
					_this.setState({ data: data });
					_this.state.data.map(function(bar) {
						return bar;
					});
			});
	}

	render() {
		return (
			<div id="page-projects">
				<h1>{this.state.title}</h1>
				<hr/>

				<div id="projects-page-body">
					{this.state.body}
				</div>

				{
					this.state.data.map(function(project) {
						let badge = '';
						console.log(project);
						if (project.field_proof_of_concept[0].value) badge = <Badge>Proof of concept</Badge>;
						let body = <div dangerouslySetInnerHTML={{__html: project.body[0].value}} />;

						return (
							<div className="row" key={project.nid[0].value}>
								<div className="col-md-7" style={{ overflow: 'hidden' }}>
									<img src={project.field_image[0].url} alt={project.field_image[0].alt}/>
								</div>
								<div className="col-md-5">
									<h3>{project.title[0].value} {badge}</h3>
									<div>{body}</div>
									<button className="btn btn-primary">Learn more</button>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Projects 
