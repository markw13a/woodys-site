import React, {useState} from 'react';

// Fetches postcode data from outside API as user enters postcode
const AddressInputWithAutoComplete = ({address, setAddress, label}) => {
	return (
		<input 
			value={address}
			onChange={e => setAddress(e.target.value)}
			defaultValue={label} 
		/>
	);
};

const QuoteWidget = () => {
	const [weight, setWeight] = useState();
	const [length, setLength] = useState();
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();

	// TODO: request pricing information and work in to this
	const calculateQuote = () => 15;

	return (
		<div className="quote-widget">
			<div className="weight-and-size-inputs">
				<label>
					<input value={weight} onChange={e => setWeight(e.target.value)} />
					kg
				</label>
				<label>
					<input value={length} onChange={e => setLength(e.target.value)} />
					cm
				</label>
				<label>
					<input value={width} onChange={e => setWidth(e.target.value)} />
					cm
				</label>
				<label>
					<input value={height} onChange={e => setHeight(e.target.value)} />
					cm
				</label>
			</div>
			<button className="quote-button" onClick={calculateQuote}>Quote</button>
		</div>
	);
};

export default QuoteWidget;