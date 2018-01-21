import React from 'react'
import { Button } from 'reactstrap'

const Home = () => (
	<div id="page-home">
		<h1>Hi, my name is Russell Jones</h1>
		<h2>I am a Software Developer / IT Manager.</h2>
		<p>
			<Button outline color="secondary" tag="a" href="/portfolio">See what I do.</Button>
		</p>
	</div>
)

export default Home

