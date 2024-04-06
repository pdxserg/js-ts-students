import {helloStudent, ManType} from "./05_01";



let people:Array<ManType> =[]

beforeEach(()=>{
	 people = [
		{name: "Andrey Ivanov", age:33},
		{name: "Alexandr Petrov", age:24},
		{name: "Dmitry Sidorov", age:18},
	]
})
test("greeting students", ()=>{


	expect(helloStudent.length).toBe(3)
	expect(helloStudent[2].firstName).toBe("Dmitry welkom!")
})
