import React, { Component } from 'react';
import AnimatedText from 'animatedtext';
import SVGLoader from 'svgloader';
// import facebook from 'right/facebook.svg';
// import android from 'right/android.svg';
// import git from 'right/git.svg';
// import linkedin from 'right/linkedin.svg';
// import mail from 'right/mail.svg';

import 'right/style.css'

export default class extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
		// this.changeInterval = setInterval(() => {
		// 	let index = this.state.textIndex;
		// 	index = (index + 1) % texts.length;
		// 	this.setState({
		// 		textIndex: index
		// 	});
		// }, 2000);     
	}

	componentWillUnmount() {
		// clearInterval(this.changeInterval);     
	}

	render() {

		const root_style = {
			textAlign: 'center',
			fontFamily: 'Lato',
			fontSize: '1.5em',
			overflow: 'scroll'
		}

		const colored = {
			color: '#87cefa',
			fontStyle: 'italic',
			borderBottom: '1px dotted #87cefa',
			textDecoration: 'none'
		}

		const dotted_line = {
			borderBottom: '1px dotted #fff',
			margin: '1px 50px 1px 50px'
		}

		return (
			<div style={root_style}>
				<ul className="contact">
					<li>
						<a id="pfacebook" target="blank" href="https://www.facebook.com/sachin.shinde2">
							<SVGLoader value={"facebook"}/>
						</a>
					</li>
					<li>
						<a id="pandroid" target="blank"
						href="http://play.google.com/store/apps/developer?id=sachin+shinde">
							<SVGLoader value={"android"}/>
						</a>
					</li>
					<li>
						<a id="pgit" target="blank" href="https://github.com/sachin1092/">
							<SVGLoader value={"git"}/>
						</a>
					</li>
					<li>
						<a id="plinkedin" target="blank" href="http://in.linkedin.com/in/sachin1092">
							<SVGLoader value={"linkedin"}/>
						</a>
					</li>
					<li>
						<a id="pmail" target="blank" href="mailto:me@sachinshinde.com">
							<SVGLoader value={"mail"}/>
						</a>
					</li>
				</ul>


				<div style={dotted_line}/>
			</div>
		)
	}
}
