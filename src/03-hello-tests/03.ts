import {student, StudentType} from "../02-hello-tests/02";


export const addSkill =(student:StudentType, skill: string) =>{
return (
	student.tehnologies.push({
		id: new Date().getTime(),
		title: skill

	})
)
	}
