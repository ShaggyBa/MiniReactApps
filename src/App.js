import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [search, setSearch] = useState("")
	const [invites, setInvites] = useState([])
	const [sendInvites, setSendInvites] = useState(false)

	const onClickInvite = (id) => {
		if (invites.includes(id))
			setInvites(prev => prev.filter(_id => _id !== id))
		else
			setInvites(prev => [...prev, id])
	}

	const onSuccess = () => {
		if (invites.length === 0)
			return false

		setSendInvites(!sendInvites)
	}

	React.useEffect(() => {
		if (loading) {
			fetch("https://reqres.in/api/users")

				.then(res => res.json())
				.then(json => {
					setUsers(json.data)
				})
				.catch(er => console.error(er))
				.finally(
					() => setLoading(false)
				)
		}
	}, [])


	return (
		<div className="App">
			{sendInvites
				? <Success count={invites.length} />
				: <Users
					items={users}
					isLoading={loading}

					search={search}
					setSearch={setSearch}

					invites={invites}
					onClickInvite={onClickInvite}

					onSuccess={onSuccess}
				/>
			}
		</div>
	);
}

export default App;
