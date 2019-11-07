import React, {useEffect, useState} from 'react';

const QuoteWidget = () => {
	const [weight, setWeight] = useState();
	const [length, setLength] = useState();
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();
	const [deliveryAddress, setDeliveryAddress] = useState();
	const [recipientAddress, setRecipientAddress] = useState();

	// TODO: request pricing information and work in to this
	const calculateQuote = () => 15;

	return (
		<div className="quote-widget">
			<div className="postcode-inputs">
				<InputWithAddressLookUp 
					value={deliveryAddress} 
					setValue={setDeliveryAddress} 
					label="Deliver to postcode" 
				/>
				<InputWithAddressLookUp 
					value={recipientAddress} 
					setValue={setRecipientAddress} 
					label="Collect from postcode" 
				/>
			</div>
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