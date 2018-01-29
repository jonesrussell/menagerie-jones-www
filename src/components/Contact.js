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
		this.disableForm = this.disableForm.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
 
		this.setState({
			[name]: value
		});
 		let valid = value.length > 0;
		(valid) ? target.classList.add('is-valid') : target.classList.remove('is-valid');
		(!valid) ? target.classList.add('is-invalid') : target.classList.remove('is-invalid');

	}

	submitForm() {
		console.log('bar');
		console.log(this.state.message.length);
		if (this.state.name.length === 0
			|| this.state.email.length === 0
			|| this.state.message.length === 0) {
			console.log('foo');
			return false;
		}

		let payload = {
			"contact_form":[{"target_id":"feedback"}],
			"name":[{"value": this.state.name}],
			"mail":[{"value": this.state.email}],
			"subject":[{"value": this.state.subject}],
			"message":[{"value": this.state.message}]
		};

		let data = JSON.stringify(payload);
		let _this = this;

//		let host = 'http://192.168.0.116';
		let host = 'http://live-menagerie-jones.pantheonsite.io';
		fetch(host + '/entity/contact_message?_format=json',
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
				_this.disableForm();
				return res.json();
			})
//			.then(function(data){ console.log( JSON.stringify( data ) ) });
	}

	disableForm() {
	 	
	}

	render() {
		import('./Contact.scss');
		let name = this.state.name;
		let email = this.state.email;
		let message = this.state.message;
		let sent = this.state.sent;
		let disableInput = sent ? 'disabled' : '';

		return (
			<div id="contact-form" className="contact-form-container">
				<div className="contact-form">
					<h1>Contact</h1>
					<hr />
					<p>Get in touch.</p>

					<Form>
						<FormGroup tag="fieldset">
							<FormGroup>
								<Label for="contact-name">Name</Label>
								<Input type="text" name="name" id="contact-name" placeholder="Name" value={name} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
							<FormGroup>
								<Label for="contact-email">Email</Label>
								<Input type="email" name="email" id="contact-email" placeholder="Email" value={email} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
							<FormGroup>
								<Label for="contact-message">Your message</Label>
								<Input type="textarea" name="message" id="contact-message" placeholder="Your message..." value={message} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
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
