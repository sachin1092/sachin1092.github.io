import React, { Component } from 'react';
import AnimatedText from 'animatedtext';
import image from 'left/me.jpg'

const texts = ["Student", "Passionate Programmer", "Linux Lover", "Software Engineer", "Gamer"];

export default class extends Component {

	constructor() {
		super();
		this.state = {
			textIndex: 0
		};
	}

	componentDidMount() {
	 	this.changeInterval = setInterval(() => {
	 		let index = this.state.textIndex;
	 		index = (index + 1) % texts.length;
	 		this.setState({
	 			textIndex: index
	 		});
	 	}, 2000);     
	}

	componentWillUnmount() {
	 	clearInterval(this.changeInterval);     
	}

    render() {

    	const img_style = {
			borderRadius: '50% 50% 50% 50%',
			width: '250px',
			height: '250px',
			border: '2px solid #87cefa',
			marginTop: '4%',
			marginBottom: '4%'
		}

		const root_style = {
			textAlign: 'center',
			fontFamily: 'Lato',
			fontSize: '1.5em',
			color: '#fff'
		}

		const colored = {
			color: '#87cefa',
			fontStyle: 'italic',
			borderBottom: '1px dotted #87cefa',
			textDecoration: 'none',
			textAlign: 'left'
		}

        return (
        	<div style={root_style}>
        		<img src={image} style={img_style}/>
        		<h2>Hi there!</h2><div>I am Sachin</div>
        		<div>I am a...<br/><AnimatedText style={colored} ease={"sineIn"} type={"string"} value={texts[this.state.textIndex]} speed={600}/></div>
        	</div>
        )
    }
}
