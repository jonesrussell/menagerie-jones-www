import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//name: { value: '', valid: null },
			//email: { value: '', valid: null },
			//message: { value: '', valid: null },
			name: '',
			nameIsValid: null,
			email: '',
			emailValid: null,
			message: '',
			messageValid: null,	
			subject: 'Menagerie Jones', // @TODO set this in env
			sent: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.isEmpty = this.isEmpty.bind(this);
		this.isEmail = this.isEmail.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.disableForm = this.disableForm.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
 
		console.log(target.name);
		this.setState({
			[target.name]: value 
		});

		let valid = !this.isEmpty(value);
		if (target.name === 'email') {
			valid = this.isEmail(value);
		}
		let cl = target.classList;
		(valid) ? cl.add('is-valid') : cl.remove('is-valid');
		(!valid) ? cl.add('is-invalid') : cl.remove('is-invalid');
	}
	
	isEmpty(value) {
 		return value.length === 0;
	}

	isEmail(value) {
		return /(.+)@(.+){2,}\.(.+){2,}/.test(value);	
	}

	submitForm() {
//		this.state.submitted = true;

		let name = this.state.name;
		let email = this.state.email;
		let subject = this.state.subject;	// hidden form field
		let message = this.state.message;

		if (this.isEmpty(name) 
			|| this.isEmpty(email)
			|| this.isEmpty(message)) {
//			if (this.isEmpty(name)) { this.state.nameIsValid = false; }
			return false;
		}

		let payload = {
			"contact_form":[{"target_id":"feedback"}],
			"name":[{"value": name}],
			"mail":[{"value": email}],
			"subject":[{"value": subject}],
			"message":[{"value": message}]
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
				_this.disableForm();
				return res.json();
			})
//			.then(function(data){ console.log( JSON.stringify( data ) ) });
	}

	disableForm() {
	 	
	}

	render() {
		let name = this.state.name;
		let email = this.state.email;
		let message = this.state.message;
		let sent = this.state.sent;
		let disableInput = sent ? 'disabled' : '';
		let nameValid = {};
		if (this.state.submitted) {
			console.log('submitted');
			if (this.state.nameIsValid) {
				nameValid = { valid: true }
			} else {
				nameValid = { valid: false }
			}
		}

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
								<Input {...nameValid} type="text" name="name" id="contact-name" placeholder="Name" value={this.state.name} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
							<FormGroup>
								<Label for="contact-email">Email</Label>
								<Input type="email" name="email" id="contact-email" placeholder="Email" value={this.state.email} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
							<FormGroup>
								<Label for="contact-message">Your message</Label>
								<Input type="textarea" name="message" id="contact-message" placeholder="Your message..." value={this.state.message} onChange={this.handleChange} disabled={disableInput} />
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
