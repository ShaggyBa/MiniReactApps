import './index.scss';
import { useState } from 'react';

function App() {
	let [currentNumber, setCurrentNumber] = useState(0)

	return (
		<div className="App">
			<div>
				<h2>Счетчик:</h2>
				<h1>{currentNumber}</h1>
				<button className="minus" onClick={() => setCurrentNumber(currentNumber -= 1)}>- Минус</button>
				<button className="plus" onClick={() => setCurrentNumber(currentNumber += 1)}>Плюс +</button>
			</div>
		</div>
	);
}

export default App;
