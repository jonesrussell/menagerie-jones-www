import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Menu.scss';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
  	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="faded" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container">
					  <NavbarToggler onClick={this.toggle} />
					  <Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
						  <NavItem>
							<NavLink href="/">Home</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink href="/about">About</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink href="/projects">Projects</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink href="#contact-form">Contact</NavLink>
						  </NavItem>
						</Nav>
					  </Collapse>
				  </div>
				</Navbar>
			</div>
		);
	}
}

export default Menu 
