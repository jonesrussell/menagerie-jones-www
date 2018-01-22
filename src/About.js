import React, { Component } from 'react'
import $ from 'jquery'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
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
				<hr/>
				<div className="main-body">
					{this.state.body}
				</div>
				<CardGroup>
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
    			</CardGroup>
				<div className="row">
					<div className="col portrait-col">
						<div className="portrait">
							<img src="images/russell-jones.png" alt="Russell Jones" />
						</div>
					</div>
					<div className="col">
						Foo
					</div>
				</div>
			</div>
		)
	}
}

export default About 
