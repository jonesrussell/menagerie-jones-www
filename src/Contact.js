import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: 'Menagerie Jones',
			message: '',
			sent: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	submitForm() {
		let payload = {
			"contact_form":[{"target_id":"feedback"}],
			"name":[{"value": this.state.name}],
			"mail":[{"value": this.state.email}],
			"subject":[{"value": this.state.subject}],
			"message":[{"value": this.state.message}]
		};

		let data = JSON.stringify(payload);
		let _this = this;

		fetch('http://menagerie-jones.com/entity/contact_message?_format=json',
			{
				method: "POST",
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: data
			})
			.then(function(res){ 
				_this.setState({ sent: true });
				return res.json();
			})
//			.then(function(data){ console.log( JSON.stringify( data ) ) });
	}

	render() {
		let sent = this.state.sent;
		return (
			<div className="contact-form-container">
				<div className="contact-form">
					<h1>Contact</h1>
					<hr />
					<p>Get in touch.</p>

					<Form>
						<FormGroup>
							<Label for="contact-name">Name</Label>
							<Input type="text" name="name" id="contact-name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="contact-email">Email</Label>
							<Input type="email" name="email" id="contact-email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="contact-message">Your message</Label>
							<Input type="textarea" name="message" id="contact-message" placeholder="Your message..." value={this.state.message} onChange={this.handleChange}/>
						</FormGroup>
						<div>
							{
								sent ? (
									<div className="contact-form-sent">Message to Russell sent!</div>
								) : (
									<Button outline color="secondary" tag="a" onClick={this.submitForm}>Submit</Button>
								)
							}
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default Contact
