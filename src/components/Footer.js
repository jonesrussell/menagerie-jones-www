import React, { Component } from 'react'

class Footer extends Component {
	render() {
		import('./Footer.scss');

		return (
			<footer className="py-5">
			  <div className="container">
				<p className="m-0 text-center text-white">&dagger; {new Date().getFullYear()}</p>
			  </div>
			</footer>
		)
	}
}

export default Footer 
