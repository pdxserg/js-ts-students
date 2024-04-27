import React, {ChangeEvent, MouseEvent} from 'react';
import * as http2 from "http2";

export const User = () => {
 	const search = (e: MouseEvent<HTMLButtonElement>) =>{
	   // alert("you was deleted "+ e.currentTarget.name)

	}
	const onNameChage=(event: ChangeEvent<HTMLTextAreaElement>)=>{
		console.log("some changed " + event.currentTarget.value)
	}
	const onAgechsnge=(event: ChangeEvent<HTMLInputElement>)=>{
		console.log("some changed " + event.currentTarget.value + " name: "+event.currentTarget.name )
	}

	return (
		<div>
			<textarea name="area" onChange={onNameChage} >sss</textarea>
			<input name="1" onChange={onAgechsnge} type={"number"}/>
			<input name="2" onChange={onAgechsnge} type={"number"}/>
			<button name="deletessss" onClick={search} >search</button>

			</div>
	);
};

