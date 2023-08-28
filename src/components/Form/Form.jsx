import { useState } from 'react';
import './Form.css';

function Form({ onAddItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = { description, quantity, packed: false, id: Date.now() };

		setDescription('');
		setQuantity(1);

		onAddItems(newItem);
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={e => {
					setQuantity(+e.target.value);
				}}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map(value => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='Item...'
				value={description}
				onChange={e => {
					setDescription(e.target.value);
				}}
			/>
			<button>Add</button>
		</form>
	);
}

export default Form;
