import {GoverType} from "../02-hello-tests/02_02";

export type ManType = {
	name: string
	age: number
}
const people = [
	{name: "Andrey Ivanov", age:33},
	{name: "Alexandr Petrov", age:24},
	{name: "Dmitry Sidorov", age:18},
]

const dimychTransformator =(man:ManType ) => {
return {
	stack: ["css, html", "react", "js"],
	firstName: man.name.split(" ")[0],
	lastName: man.name.split(" ")[1]
}
}

let d1 = dimychTransformator (people[0])
let d2 = dimychTransformator (people[1])
let d3 = dimychTransformator (people[2])

let devs1 = [
//	d1, d2, d3
	dimychTransformator (people[0]),
	dimychTransformator (people[1]),
	dimychTransformator (people[2]),
]
let devs2 = people.map(dimychTransformator)

let devs3 = people.map(man =>
	({stack: ["css, html", "react", "js"],
		firstName: man.name.split(" ")[0],
		lastName: man.name.split(" ")[1]
	})
)


export let helloStudent = people.map((man) =>
		`${man.name.split(" ")[0]} welkom!`
)
export const gretingPeople = (p:Array<ManType>)=>{
	return people.map(man => `${man.name.split(" ")[0]} welkom!`
		)
}