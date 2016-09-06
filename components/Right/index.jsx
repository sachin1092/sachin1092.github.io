import React, { Component } from 'react';
import AnimatedText from 'animatedtext';
import { loadSVG, MODULE } from 'svg_loader';
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
		console.log(loadSVG(MODULE.FACEBOOK));
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
		// console.log(require(facebook));
		const img_style = {
			borderRadius: '50% 50% 50% 50%',
			width: '250px',
			height: '250px',
			border: '2px solid #87cefa',
			marginTop: '4%',
			marginBottom: '4%'
		}

		const root_style = {
			backgroundColor: '#EEEEEE',
			width: '100%',
			height: '100%',
			textAlign: 'center',
			fontFamily: 'Lato',
			fontSize: '1.5em'
		}

		const colored = {
			color: '#87cefa',
			fontStyle: 'italic',
			borderBottom: '1px dotted #87cefa',
			textDecoration: 'none'
		}

		return (
			<div style={root_style}>
				<ul className="contact">
					<li>
						<a id="pfacebook" target="blank" href="https://www.facebook.com/sachin.shinde2">
						<img src={facebook} />
						</a>
					</li>
					<li>
						<a id="pandroid" target="blank"
						href="http://play.google.com/store/apps/developer?id=sachin+shinde">
						<img id="android" src={android} />
						</a>
					</li>
				</ul>
			</div>
		)
	}
}
