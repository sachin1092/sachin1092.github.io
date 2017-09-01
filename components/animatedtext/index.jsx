import React, {Component} from 'react';
import PropTypes from 'prop-types';
import eases from 'eases';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'animatedtext/style.css';

export default class extends React.Component {
	
	//props: AnimatedTextProps;
	/**
	ease expected values:
		["backInOut","backIn","backOut","bounceInOut","bounceIn","bounceOut",
		"circInOut","circIn","circOut","cubicInOut","cubicIn","cubicOut",
		"elasticInOut","elasticIn","elasticOut","expoInOut","expoIn",
		"expoOut","linear","quadInOut","quadIn","quadOut","quartInOut",
		"quartIn","quartOut","quintInOut","quintIn","quintOut","sineInOut",
		"sineIn","sineOut"]
	**/
	static propTypes = {
		value: PropTypes.any.isRequired,
		speed: PropTypes.number,
		ease: PropTypes.oneOf(Object.keys(eases)),
		type: PropTypes.string,
		locale: PropTypes.string
	}

	timeout: null;
	startAnimationTime: null;

	static defaultProps = {
		speed: 500,
		ease: 'quintInOut',
		type: 'string',
		locale: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			previousValue: 0,
			displayValue: this.props.value,
			key: true
		};
	}	

	componentWillReceiveProps(nextProps) {

		const oldValue = this.props.type == 'int' ? parseInt(this.props.value, 10) : this.props.value;
		const newValue = nextProps.type == 'int' ? parseInt(nextProps.value, 10) : nextProps.value;

		if (newValue == oldValue) return; 

		if (this.props.type == 'string') {
			this.setState({
				key: !this.state.key,
				displayValue: undefined
			});
		}
		setTimeout(() => {
			this.setState({
				previousValue: this.state.displayValue
			});
			this.startAnimationTime = (new Date()).getTime();
			this.updateText();
		}, 400);
		
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.displayValue !== this.state.displayValue;  
	}

	updateText = () => {
		const value = this.props.type == 'int' ? 
						parseInt(this.props.value, 10) : 
						this.props.value;

		let currentDisplayValue;

		const elapsedTime = ((new Date()).getTime() - this.startAnimationTime);
		const progress = eases[this.props.ease](elapsedTime / this.props.speed);

		if (this.props.type == 'int') {
			currentDisplayValue = Math.round((value - this.state.previousValue) * progress + this.state.previousValue);
		} else {
			if (value.indexOf(this.state.previousValue) != 0)
				this.state.previousValue = value[0].toString();
			currentDisplayValue = value.slice(0, Math.round((value.length - this.state.previousValue.length) * progress + this.state.previousValue.length));
		}

		this.setState({
			displayValue: currentDisplayValue
		});

		if (elapsedTime < this.props.speed) {
			this.timeout = setTimeout(this.updateText, 15);
		} else {
			this.setState({
				previousValue: value
			});
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	render() {
		let { displayValue } = this.state;
		let { ease, locale, ...other } = this.props;

		return (
			
			<ReactCSSTransitionGroup transitionName="anim" transitionLeaveTimeout={500} transitionEnter={false} transitionLeave={true}>
	          	<span { ...other } key={this.state.key}>{ locale.length ? displayValue.toLocaleString(locale) : displayValue }</span>
        	</ReactCSSTransitionGroup>

			);
	}
}
