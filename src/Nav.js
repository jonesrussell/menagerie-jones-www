import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">Menagerie Jones</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
				<li className="nav-item"><Link className='nav-link' to='/about'>About</Link></li>
				<li className="nav-item"><Link className='nav-link' to='/portfolio'>Portfolio</Link></li>
			</ul>
		</div>
      </div>
    </nav>

)

export default Nav 
