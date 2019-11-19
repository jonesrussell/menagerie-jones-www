import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Menu extends Component {
	constructor(props) {
		super(props);

		let path = props.location.pathname;
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			active: {
				about: path.includes('about'),
				projects: path.includes('projects'),
				contact: false
			}
		};
  	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		import('./Menu.scss');

		return (
				<Navbar color="faded" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container">
					  <NavbarToggler onClick={this.toggle} />
					  <Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
						  <NavItem>
							<NavLink href="/">Home</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink active={this.state.active.about} href="/about">About</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink active={this.state.active.projects} href="/projects">Projects</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink active={this.state.active.contact} href="#contact-form"><i className="fa fa-address-card-o" aria-hidden="true"></i></NavLink>
						  </NavItem>
						</Nav>
					  </Collapse>
				  </div>
				</Navbar>
		);
	}
}

export default Menu
