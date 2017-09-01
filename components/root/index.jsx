import React from 'react';

import Left from 'left';
import Right from 'right';

import 'root/style.css';

export default class extends React.Component {
	render() {
		return (
			<div id="root">
				<div id="left">
					<Left />	
				</div>
				<div id="right">
					<Right />
				</div>
			</div>
		)
	}
}
