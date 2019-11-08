import React from 'react';
import './style.css';

import QuoteWidget from './js/QuoteWidget';

const App = () => {
	return (
		<div className="App">
			<div className="Page">
				<a href="/">
					<img src="/logo.png" className="logo" alt="logo" />
				</a>
				<QuoteWidget />
			</div>
		</div>
	);
};

export default App;
