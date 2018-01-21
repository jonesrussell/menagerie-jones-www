import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

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
					  <NavbarBrand href="/">Menagerie Jones</NavbarBrand>
					  <NavbarToggler onClick={this.toggle} />
					  <Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
						  <NavItem>
							<NavLink href="/about">About</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink href="/portfolio">Portfolio</NavLink>
						  </NavItem>
						  <NavItem>
							<NavLink href="/contact">Contact</NavLink>
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
