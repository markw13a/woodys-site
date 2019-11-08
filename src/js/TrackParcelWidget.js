import React, {useState} from 'react';

const TrackParcelWidget = () => {
	const [trackingNumber, setTrackingNumber] = useState();

	return (
		<div className="track-parcel-widget">
			<label className="input-container">
				Track your parcel:
				<input 
					value={trackingNumber}
					onChange={e => setTrackingNumber(e.target.value)}
				/>
				{
					trackingNumber
					&& (
						<button> Go </button>
					)
				}
			</label>
		</div>
	);
}

export default TrackParcelWidget;