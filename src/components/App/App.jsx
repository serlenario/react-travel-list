import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import PackingList from '../PackingList/PackingList';
import Stats from '../Stats/Stats';
import { useState } from 'react';
import './App.css';

function App() {
	const [items, setItems] = useState([]);

	function handleItems(item) {
		setItems(items => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems(items =>
			items.filter(item => {
				return item.id !== id;
			})
		);
	}

	function handleToggleItem(id) {
		setItems(items =>
			items.map(item => {
				return item.id === id ? { ...item, packed: !item.packed } : item;
			})
		);
	}

	function handleClearList() {
		const confirmed = window.confirm(
			'Are you sure you want to delete all items?'
		);

		if (confirmed) setItems([]);
	}

	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
