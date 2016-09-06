import React from 'react';

import Left from 'left';
import Right from 'right';

export default ({ title, icon, gradient, direction }) => {
	let root = {
		display: 'flex',
		flexDirection: 'row',
	};
	let left = {
		display: 'flex',
		flexDirection: 'column',
		flex: '0 1 33.3333%'
	};
	let right = {
		display: 'flex',
		flex: '0 1 66.6666%'
	};
	return (
		<div style={root}>
			<div style={left}>
				<Left />	
			</div>
			<div style={right}>
				<Right />
			</div>
		</div>
	)
}
