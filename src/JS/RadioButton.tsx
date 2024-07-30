import styled from '@emotion/styled';
import React, {ChangeEvent, useState} from 'react';

function RadioDropdown() {
	const [selectedOption, setSelectedOption] = useState('1');

	const handleSelectChange = (e:ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(e.target.value);
	};

	const handleRadioChange = (e:ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(e.target.value);
	};

	return (
		<div>
			<select value={selectedOption} onChange={handleSelectChange}>
				<option value="1">Dropdown 1</option>
				<option value="2">Dropdown 2</option>
				<option value="3">Dropdown 3</option>
			</select>

			<div>
				<label>
					<input
						type="radio"
						value="1"
						name="dropdown"
						checked={selectedOption === '1'}
						onChange={handleRadioChange}
					/>
					Dropdown 1
				</label>
				<label>
					<input
						type="radio"
						value="2"
						name="dropdown"
						checked={selectedOption === '2'}
						onChange={handleRadioChange}
					/>
					Dropdown 2
				</label>
				<label>
					<input
						type="radio"
						value="3"
						name="dropdown"
						checked={selectedOption === '3'}
						onChange={handleRadioChange}
					/>
					Dropdown 3
				</label>
			</div>
		</div>
	);
}

const Label = styled.label`

`
const Input = styled.input`
    background-color: #f15d4f;

`

// Usage example
function RadioDropdownApp() {
	return <RadioDropdown/>;
}

export default RadioDropdownApp;
