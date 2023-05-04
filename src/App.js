import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';
import data from './data';

function App() {
	const rates = data

	const [fromCurrency, setFromCurrency] = useState("RUB")
	const [toCurrency, setToCurrency] = useState("USD")

	const [fromValue, setFromValue] = useState(rates[toCurrency])
	const [toValue, setToValue] = useState(1)


	const onChangeFromValue = (value) => {
		if (value >= 0) {
			const result = rates[toCurrency] / rates[fromCurrency] * value
			setFromValue(value)
			setToValue(result)

		}
	}

	const onChangeToValue = (value) => {
		if (value >= 0) {
			const result = rates[fromCurrency] / rates[toCurrency] * value
			setToValue(value)
			setFromValue(result)

		}
	}

	useEffect(() => {
		onChangeFromValue(fromValue)
	}, [fromCurrency, fromValue])

	useEffect(() => {
		onChangeToValue(toValue)
	}, [toCurrency, toValue])

	return (
		<div className="App">
			<Block value={fromValue}
				currency={fromCurrency}
				onChangeCurrency={setFromCurrency}
				onChangeValue={onChangeFromValue} />
			<Block value={toValue}
				currency={toCurrency}
				onChangeCurrency={setToCurrency}
				onChangeValue={onChangeToValue}
			/>
		</div>
	);
}

export default App;
