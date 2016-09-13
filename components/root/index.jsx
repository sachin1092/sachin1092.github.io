import React from 'react';

import Left from 'left';
import Right from 'right';

import 'root/style.css';

export default ({ title, icon, gradient, direction }) => {
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
