import React from 'react'
import { Link } from 'react-router-dom'

// The Nav creates links that can be used to navigate
// between routes.
const Nav = () => (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">Menagerie Jones</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
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
