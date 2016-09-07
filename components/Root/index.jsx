import React from 'react';

import Left from 'left';
import Right from 'right';

import 'root/style.css';

export default ({ title, icon, gradient, direction }) => {
	let root = {
		background: '#1f1f1f',
		display: 'flex',
		flexDirection: 'row',
		padding: '50px'
	};
	let left = {
		display: 'flex',
		flex: '0 1 33.3333%'
	};
	let right = {
		display: 'flex',
		flex: '0 1 66.6666%'
	};
	let sep = {
		borderLeft: '1px solid #fff'
	}
	return (
		<div id="root">
			<div id="left">
				<Left />	
			</div>
			<div style={sep}/>
			<div id="right">
				<Right />
			</div>
		</div>
	)
}
