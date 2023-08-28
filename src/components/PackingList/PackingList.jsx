import { useState } from 'react';
import Item from '../Item/Item';
import './PackingList.css';

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;

	if (sortBy === 'input') sortedItems = items;

	if (sortBy === 'description') {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
		console.log(sortedItems);
	}

	if (sortBy === 'packed') {
		sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
	}

	return (
		<div className='list'>
			<ul>
				{sortedItems.map(item => (
					<Item
						item={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>

			<div className='actions'>
				<select
					value={sortBy}
					onChange={e => {
						setSortBy(e.target.value);
					}}
				>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by input description</option>
					<option value='packed'>Sort by input packed</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
}

export default PackingList;
