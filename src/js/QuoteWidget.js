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
		<div className="quote-widget-container">
			<div className="header tagline">
				Reliable delivery across the UK
			</div>
			<div className="quote-widget">
				<div className="postcode-and-weight-input-container">
					<label>
						From
						<input 
							className="postcode-input"
							value={deliveryAddress} 
							onChange={e => setDeliveryAddress(e.target.value)}
							placeholder="Postcode" 
						/>
					</label>
					<label>
						To
						<input
							className="postcode-input"
							value={recipientAddress} 
							onChange={e => setRecipientAddress(e.target.value)}
							placeholder="Postcode" 
						/>
					</label>
					<label>
						Weight
						<input 
							className="weight-and-size-input"
							value={weight} 
							onChange={e => setWeight(e.target.value)} 
						/>
						kg
					</label>
				</div>
				<div className="weight-and-size-input-container">
					<label>
						Length
						<input
							className="weight-and-size-input"
							value={length} 
							onChange={e => setLength(e.target.value)} 
						/>
						cm
					</label>
					<label>
						Width
						<input
							className="weight-and-size-input"
							value={width} 
							onChange={e => setWidth(e.target.value)} 
						/>
						cm
					</label>
					<label>
						Height
						<input
							className="weight-and-size-input"
							value={height} 
							onChange={e => setHeight(e.target.value)} 
						/>
						cm
					</label>
				</div>
				<div className="quote-button-container">
					<button className="quote-button" onClick={calculateQuote}>
						Get Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuoteWidget;