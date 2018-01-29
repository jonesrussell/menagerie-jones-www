import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import $ from 'jquery';
import './Projects.scss';
import Lightbox from 'react-image-lightbox';

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			projects: [],
			isOpen: false,
			images: []
		};
	};

	componentDidMount() {
		let _this = this;

		let host = 'http://live-menagerie-jones.pantheonsite.io';
//		let host = 'http://192.168.0.116';
		fetch(host + '/node/3?_format=json')
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


		fetch(host + '/projects?_format=json')
			.then(results => {
				return results.json();
			})
				.then(data => {
					_this.setState({ projects: data });
					_this.state.projects.map(function(bar) {
						return bar;
					});
			});
	}

	showProject(project, images, projects) {
		let badge = (project.field_proof_of_concept[0].value) ? <Badge>Proof of concept</Badge> : '';
		let body = <div dangerouslySetInnerHTML={{__html: project.body[0].value}} />;
		images.push(project.field_image[0].url);
		let imagesLength = images.length;

		return (
			<div key={project.nid[0].value} id="projects">
				<div className="row project-container">
					<div className="col col-md-7" style={{ overflow: 'hidden' }}>
						<img src={project.field_image[0].url} alt={project.field_image[0].alt} onClick={ function() {
							projects.setState({ photoIndex: imagesLength - 1, isOpen: true })
						}}/>
					</div>
					<div className="col col-md-5">
						<h3>{project.title[0].value} {badge}</h3>
						<div>{body}</div>
						<strong className="source">Source: </strong> <a href={project.field_github[0].uri} target="_blank"><i className="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
					</div>
				</div>
				<hr/>
			</div>
		)
	}

	render() {
		let _this = this;
		let images = [];

		return (
			<div id="page-projects">
				<h1>{this.state.title}</h1>
				<hr/>
				<div id="projects-page-body">
					{this.state.body}
				</div>
				{ this.state.projects.map(function(project) { return ( _this.showProject(project, images, _this) ) }) } 
				{this.state.isOpen && (
				  <Lightbox
					mainSrc={images[this.state.photoIndex]}
					onCloseRequest={() => _this.setState({ isOpen: false })}
				  />
				)}
			</div>
		)
	}
}

export default Projects 
