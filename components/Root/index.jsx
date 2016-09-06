import React, { Component } from 'react';
import AnimatedText from 'animatedtext';

const texts = ["I am Sachin", "I am awesome", "Very awesome"];

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
        return (
        	<div>
        		<div><AnimatedText ease={"sineIn"} type={"string"} value={texts[this.state.textIndex]} speed={1000}/></div>
        		<span>Hello World!!</span>
        	</div>
        )
    }
}
