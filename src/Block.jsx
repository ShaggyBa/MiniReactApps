import React, { useState } from 'react';
import data from './data';

const rates = ['RUB', 'USD', 'EUR', 'GBP'];
// const _data = Object.keys(data)


export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {
	// const [maxRates, setMaxRates] = useState(4)

	// const [rates, setRates] = useState(getRates(maxRates))

	// function getRates(maxRates) {
	// 	const rates = []
	// 	for (let i = 0; i < maxRates; i++) {
	// 		rates.push(_data[i])
	// 	}
	// 	return rates
	// }

	// const onChangeMaxRates = () => {
	// 	setMaxRates(_data.length)
	// 	setRates(getRates(maxRates))
	// }

	return (

		<div className="block">
			<ul className="currencies">

				{rates.map((cur) => (
					<li
						onClick={() => onChangeCurrency(cur)}
						className={currency === cur ? 'active' : ''}
						key={cur}>
						{cur}
					</li>
				))}
				<li
				// onClick={onChangeMaxRates}
				>
					<svg height="50px" viewBox="0 0 50 50" width="50px">
						<rect fill="none" height="50" width="50" />
						<polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
					</svg>
				</li>
			</ul>
			<input
				onChange={(e) => onChangeValue(Number(e.target.value))}
				value={value}
				type="number"
				placeholder={0}
				maxLength={8}
			/>
		</div>
	)
};
