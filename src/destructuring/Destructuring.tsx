import React, {FC} from "react";


export type MansType = {
	name: string,
	age: number,
	lesson: Array<{ title: string }>      //<LessonType>
	address: {
		street:{
			title:string
		}
	}
}

type ManComponentPropsType={
	title: string
	man: MansType
	car:string
}
export const ManComponent  = ({title, man, ...props}: ManComponentPropsType)=>{
	//const {title, man}= props
return (
	<div>
		<h1>{title}</h1>
		<hr/>
		<div>
			{man.name}
		</div>
		<div>
			{props.car}
		</div>
	</div>
)}