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
			validName: '',
			validEmail: '',
			validMessage: '',
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
 		let valid = value.length > 0;
		if (name === 'email') {
			console.log('email');
			if (!this.isEmail(value)) {
				valid = false;
			}
		}
		(valid) ? target.classList.add('is-valid') : target.classList.remove('is-valid');
		(!valid) ? target.classList.add('is-invalid') : target.classList.remove('is-invalid');

	}

	isEmpty(value) {
 		return value.length === 0;
	}

	isEmail(value) {
		return /(.+)@(.+){2,}\.(.+){2,}/.test(value);	
	}

	validateForm() {
		if (this.isEmpty(this.state.name)) {
			this.setState({validName: 'is-invalid'});
		} else {
			this.setState({validName: 'is-valid'});
		}

		if (this.isEmpty(this.state.email)) {
			this.setState({validEmail: 'is-invalid'});
		} else {
			this.setState({validEmail: 'is-valid'});
		}

		if (this.isEmpty(this.state.message)) {
			this.setState({validMessage: 'is-invalid'});
		} else {
			this.setState({validMessage: 'is-valid'});
		}

		if (this.isEmpty(this.state.name)
			|| this.isEmpty(this.state.email)
			|| this.isEmpty(this.state.message)) {
				return false;
		}

		return true;
	}

	submitForm() {
		if (!this.validateForm()) return false;

		let payload = {
			"contact_form":[{"target_id":"feedback"}],
			"name":[{"value": this.state.name}],
			"mail":[{"value": this.state.email}],
			"subject":[{"value": this.state.subject}],
			"message":[{"value": this.state.message}]
		};

		let data = JSON.stringify(payload);
		let _this = this;

		fetch(process.env.REACT_APP_API_URL + '/entity/contact_message?_format=json',
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
								<Label for="contact-name" hidden>Name</Label>
								<Input className={this.state.validName} type="text" name="name" id="contact-name" placeholder="Name" value={name} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
							<FormGroup>
								<Label for="contact-email" hidden>Email</Label>
								<Input className={this.state.validEmail} type="email" name="email" id="contact-email" placeholder="Email" value={email} onChange={this.handleChange} disabled={disableInput} />
							</FormGroup>
							<FormGroup>
								<Label for="contact-message" hidden>Your message</Label>
								<Input className={this.state.validMessage} type="textarea" name="message" id="contact-message" placeholder="Your message..." value={message} onChange={this.handleChange} disabled={disableInput} />
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
