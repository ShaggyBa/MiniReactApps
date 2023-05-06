import React, { useEffect, useState } from 'react';
import './index.scss';
import { Collection } from './Collection';



const link = new URL('https://6453d4bce9ac46cedf30f211.mockapi.io/photos')


const categories = [
	{ "name": "Все" },
	{ "name": "Море" },
	{ "name": "Горы" },
	{ "name": "Архитектура" },
	{ "name": "Города" }
]

const pages = [1, 2, 3]

function App() {
	const [collections, setCollections] = useState([])

	const [isLoading, setIsLoading] = useState(true)

	const [searchValue, setSearchValue] = useState("")

	const [category, setCategory] = useState(0)

	const [page, setPage] = useState(1)

	useEffect(() => {
		setIsLoading(true)
		link.searchParams.set('page', page)
		link.searchParams.set('limit', 3)

		fetch(link.href)
			.then(res => res.json())
			.then(json => {
				setCollections(json)
			})
			.catch(err => {
				console.error(err)
			})
			.finally(() => setIsLoading(false))
	}, [category, page])

	const getCollections = isLoading
		? <h2>Идет загрузка ...</h2>
		: collections
			.filter(collection => collection.name.toLowerCase().includes(searchValue.toLowerCase()))
			.map((collection, index) => {
				return < Collection
					key={index}
					name={collection.name}
					images={collection.photos}
				/>

			})


	return (

		<div className="App">
			<h1>Моя коллекция фотографий</h1>
			<div className="top">
				<ul className="tags">
					{categories
						.map(((obj, index) => <li
							onClick={() => {
								setCategory(index)
								link.searchParams.set('category', index)
								if (index === 0)
									link.searchParams.delete('category')
							}}
							className={category === index ? 'active' : ''} key={index}>{obj.name}
						</li>))}
				</ul>
				<input
					className="search-input"
					placeholder="Поиск по названию"
					onInput={(e) => setSearchValue(e.target.value)}
				/>
			</div>
			<div className="content">
				{getCollections}
			</div>
			<ul className="pagination">
				{pages.map(el => <li
					key={el}
					className={page === el ? 'active' : ''}
					onClick={() => setPage(el)
					}
				>{el}</li>)}
			</ul>
		</div>
	);
}

export default App;
