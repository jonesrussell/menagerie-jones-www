import React, { Component } from 'react'
import $ from 'jquery'
import { Card, Button, CardTitle, CardText, CardDeck, CardBody, Progress } from 'reactstrap';
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
				let body = $(data.body[0].value).html();
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
				<div className="row">
					<div className="col col-md-5 portrait-col">
						<div className="portrait">
							<img src="images/russell-jones.png" alt="Russell Jones" />
						</div>
						<h4>Russell</h4>
						<p>Over 18 years of Experience in IT Management and Web Development.</p>
					</div>
					<div className="col col-md-7">
						<div className="skill-list">
							<div className="skill-list-item">
								<div className="skill">CSS</div>
						  		<Progress value="80">80%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">HTML</div>
						  		<Progress value="90">90%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">React</div>
						  		<Progress value="70">70%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">JavaScript</div>
						  		<Progress value="80">80%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">Angular</div>
						  		<Progress value="70">70%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">Node.js</div>
						  		<Progress value="50">50%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">Ruby/Rails</div>
						  		<Progress value="30">30%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">PHP</div>
						  		<Progress value="80">80%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">Drupal</div>
						  		<Progress value="90">90%</Progress>
							</div>
							<div className="skill-list-item">
								<div className="skill">Node.js</div>
						  		<Progress value="90">90%</Progress>
							</div>
						</div>
					</div>
				</div>
				<CardDeck>
				  <Card>
					<i className="fa fa-thumbs-up fa-5x" aria-hidden="true"></i>
					<CardBody>
					  <CardTitle>Positive thinking</CardTitle>
					  <CardText><q>Perpetual optimism is a force multiplier.</q> -Colin Powell</CardText>
					</CardBody>
				  </Card>
				  <Card>
					<i className="fa fa-commenting fa-5x" aria-hidden="true"></i>
					<CardBody>
					  <CardTitle>Effective communicator</CardTitle>
					  <CardText><q>The single biggest problem in communication is the illusion that it has taken place.</q> -George Bernard Shaw</CardText>
					</CardBody>
				  </Card>
				  <Card>
					<i className="fa fa-hourglass fa-5x" aria-hidden="true"></i>
					<CardBody>
					  <CardTitle>Resource management</CardTitle>
					  <CardText><q>Time management is really key for me.</q> -Marc Guggenheim</CardText>
					</CardBody>
				  </Card>
				  <Card>
					<i className="fa fa-graduation-cap fa-5x" aria-hidden="true"></i>
					<CardBody>
					  <CardTitle>Quick learner</CardTitle>
					  <CardText><q>I'm pretty instinctive. I'm a quick learner.</q> -Shannon Elizabeth</CardText>
					</CardBody>
				  </Card>
    			</CardDeck>

				<div className="projects-button">
					<Button color="primary" tag="a" href="/projects">Check out my projects</Button>
				</div>
			</div>
		)
	}
}

export default About 
