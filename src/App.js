import React from 'react';
import './style.css';

import QuoteWidget from './components/QuoteWidget';

const App = () => {
	return (
		<div className="App">
			<a href="/">
				<img src="/logo.png" className="logo" alt="logo" />
			</a>
			<QuoteWidget />
		</div>
	);
};

export default App;
