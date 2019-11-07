// Shelve this for now
// Decided that it'd actually make more sense to just ask for a postcode initially
// Less hassle to get quote => customer more likely to stick around
import React from 'react';

import {keys} from './PRIVATE';

const SuggestionList = ({suggestions}) => {
	if(!suggestions || !suggestions.length) {
		return null;
	}

	return (
		<div style={{position: 'relative'}}>
			<ul className="suggestion-list">
				{suggestions.map(suggestion => 
					<li className="suggestion-item" key={suggestion.Id}>
						{suggestion.Text}
					</li>
				)}
			</ul>
		</div>
	);
}

// Fetches postcode data from outside API as user enters postcode
const AddressAutoComplete = ({value, setValue, label}) => {
	// Suggested addresses as retrieved from addressy API
	const [suggestions, setSuggestions] = useState();

	useEffect(() => {
		// No point in fetching if user has not begun to type
		if(!value) {
			return;
		}

		let unmounted = false;
		fetch(`https://api.addressy.com/Capture/Interactive/Find/v1.1/json3ex.ws?Key=${keys.addressy}&Text=${value}`)
		.then(res => res.json())
		.then(addresses => {
			if(unmounted) {
				console.warn("input changed before fetch resolved");
				return;
			}

			setSuggestions(addresses.Items);
		});
		// TODO: is there going to be a problem with this being an arrow function?
		// We'll see
		return () => unmounted = true;
	}, [value]);

	return (
		<div className="input-address-autocomplete">
			<input 
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder={label} 
			/>
			<SuggestionList suggestions={suggestions} />
		</div>
	);
};

export default AddressAutoComplete;
