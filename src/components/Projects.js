import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import $ from 'jquery';
import './Projects.scss';
import Lightbox from "react-image-lightbox";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			data: [],
			isOpen: false,
			images: []
		};
	};

	componentDidMount() {
		let _this = this;

		//let host = 'http://live-menagerie-jones.pantheonsite.io';
		let host = 'http://menagerie-jones.com';
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
					_this.setState({ data: data });
					_this.state.data.map(function(bar) {
						return bar;
					});
			});
	}

	render() {
		let _this = this;
		let isOpen = this.state.isOpen;
		let images = [];

		return (
			<div id="page-projects">
				<h1>{this.state.title}</h1>
				<hr/>

				<div id="projects-page-body">
					{this.state.body}
				</div>

				{
					this.state.data.map(function(project)
					{
						let badge = (project.field_proof_of_concept[0].value) ? <Badge>Proof of concept</Badge> : '';
						let body = <div dangerouslySetInnerHTML={{__html: project.body[0].value}} />;
						images.push(project.field_image[0].url);
//						console.log(project.field_image[0].url);
//						console.log('i-1: ', i-1);
						let imagesLength = images.length;

						return (
							<div className="row" key={project.nid[0].value}>
								<div className="col-md-7" style={{ overflow: 'hidden' }}>
									<img src={project.field_image[0].url} alt={project.field_image[0].alt} onClick={ function() {
										console.log('imagesLength: ', imagesLength);
										_this.setState({ photoIndex: imagesLength - 1, isOpen: true })
									}}/>
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

			{console.log('this.state.photoIndex', this.state.photoIndex)}
				{isOpen && (
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
