import React, { Component } from 'react'

class Footer extends Component {
	render() {
		import('./Footer.scss');

		return (
			<footer className="py-5">
			  <div className="container">
				<div>
					<p>
						<a href="https://github.com/jonesrussell" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-github fa-3x" aria-hidden="true"></i>
						</a>
						&nbsp;
						&nbsp;
						<a href="https://www.linkedin.com/in/jonesrussell42" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
						</a>
						&nbsp;
						&nbsp;
						<a href="https://twitter.com/jonesrussell42" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
						</a>
					</p>
					<p className="m-0 year">
						<i className="fa fa-barcode" aria-hidden="true"></i>
						&nbsp;
						{new Date().getFullYear()}
					</p>
				</div>
			  </div>
			</footer>
		)
	}
}

export default Footer 
