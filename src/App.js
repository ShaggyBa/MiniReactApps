import { useState } from 'react';
import './index.scss';

const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
];

function Result(props) {
	console.log(props.correct)
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>Вы отгадали {`${props.correct}`} ответа из {`${questions.length}`}</h2>
			<button onClick={() => {
				props.setCurrentQuestion(0)
				props.setCorrect(0)
			}}>Попробовать снова</button>
		</div>
	);
}

function Game(props) {
	return (
		<>
			<div className="progress">
				<div style={{ width: `${Math.round(props.currentQuestion / questions.length * 100)}%` }} className="progress__inner"></div>
			</div>
			<h1>{questions[props.currentQuestion].title}</h1>
			<ul>
				{questions[props.currentQuestion].variants.map((variant, index) => <li
					key={variant}
					onClick={() => props.onClickVariant(index)}
				>{variant}</li>)}
			</ul>
		</>
	);
}

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0)

	const [correct, setCorrect] = useState(0)

	const onClickVariant = (index) => {
		setCurrentQuestion(currentQuestion + 1)
		if (questions[currentQuestion].correct === index) {
			setCorrect(correct + 1)
		}
	}

	return (
		<div className="App">
			{currentQuestion !== questions.length
				? <Game
					currentQuestion={currentQuestion}
					setCurrentQuestion={setCurrentQuestion}
					onClickVariant={onClickVariant} />
				: <Result
					correct={correct}
					setCurrentQuestion={setCurrentQuestion}
					setCorrect={setCorrect} />
			}

		</div >
	);
}

export default App;
