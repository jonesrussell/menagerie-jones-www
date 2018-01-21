import React from 'react'
import { Button } from 'reactstrap'

const Home = () => (
	<div id="page-home" style={{ textAlign: 'center' }}>
		<h1>Hi, my name is <strong>Russell Jones</strong>.</h1>
		<h2>I'm a web developer / i.t. manager.</h2>
		<p>
			<Button outline color="secondary" tag="a" href="/about">More about me</Button>
		</p>
	</div>
)

export default Home

