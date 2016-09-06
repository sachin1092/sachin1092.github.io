import React, { Component } from 'react';
import AnimatedText from 'animatedtext';
import image from 'root/me.jpg'

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
			marginBottom: '4%',
			textAlign: 'center'
		}

		const root_style = {
			backgroundColor: '#EEEEEE',
			width: '100%',
			height: '100%',
			padding: '10px',
			fontFamily: 'Lato',
			fontSize: '5vw'
		}

		const colored = {
			color: '#87cefa',
			fontStyle: 'italic',
			borderBottom: '1px dotted #87cefa',
			textDecoration: 'none'
		}

        return (
        	<div style={root_style}>
        		<img src={image} style={img_style}/>
        		<h2>Hi there!</h2><div>I am Sachin</div>
        		<div>I am a <AnimatedText style={colored} ease={"sineIn"} type={"string"} value={texts[this.state.textIndex]} speed={1000}/></div>
        	</div>
        )
    }
}
