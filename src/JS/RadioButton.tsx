import React, {ChangeEvent, useState} from 'react';

function RadioDropdown() {
	const [selectedOption, setSelectedOption] = useState('1');

	const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(e.target.value);
	};

	return (
		<div>
			<div>
				<label>
					<input
						type="radio"
						value="1"
						name="dropdown"
						checked={selectedOption === '1'}
						onChange={handleChange}
					/>
					Dropdown 1
				</label>
				<label>
					<input
						type="radio"
						value="2"
						name="dropdown"
						checked={selectedOption === '2'}
						onChange={handleChange}
					/>
					Dropdown 2
				</label>
				<label>
					<input
						type="radio"
						value="3"
						name="dropdown"
						checked={selectedOption === '3'}
						onChange={handleChange}
					/>
					Dropdown 3
				</label>
			</div>

			{selectedOption === '1' && (
				<select>
					<option value="1">Option 1-1</option>
					<option value="2">Option 1-2</option>
					<option value="3">Option 1-3</option>
				</select>
			)}
			{selectedOption === '2' && (
				<select>
					<option value="1">Option 2-1</option>
					<option value="2">Option 2-2</option>
					<option value="3">Option 2-3</option>
				</select>
			)}
			{selectedOption === '3' && (
				<select>
					<option value="1">Option 3-1</option>
					<option value="2">Option 3-2</option>
					<option value="3">Option 3-3</option>
				</select>
			)}
		</div>
	);
}



// Usage example
function RadioDropdownApp() {
	return <RadioDropdown />;
}

export default RadioDropdownApp;
