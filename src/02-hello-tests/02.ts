
type StudentType ={
	id: number
	name: string
	age: number
	isActive: boolean
	address: AddressType
	tehnologies: Array<TehnoType>
}
type AddressType = {
	street: string
	city: CityTipe
}
type CityTipe ={
	contry:string
	cityTitle: string
}
type TehnoType= {
	id: number
	title: string
}

const  student: StudentType = {
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

console.log(student.name)
console.log(student.address.street)
console.log(student.address.city.cityTitle)
console.log(student.tehnologies[2].title)