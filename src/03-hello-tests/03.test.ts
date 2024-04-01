import {StudentType} from "../02-hello-tests/02";
import {addSkill} from "./03";

let student: StudentType
beforeEach(() =>{

	student ={
		id: 1,
		name: "Sergey",
		age: 40,
		isActive: true,
		address: {
			street: "Circle",
			city: {
				contry: "Belarus",
				cityTitle: "Minsk"
			}
		},
		tehnologies:[
			{id: 1, title : "HTMl"},
			{id: 2, title : "css"},
			{id: 3, title : "react"},
		]
	}

})

test("new tech should be added to student ", () => {
	const res = addSkill(student, "JS")
} )