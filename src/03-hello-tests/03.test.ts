import {StudentType} from "../02-hello-tests/02";
import {addSkill, doesStudentLiveInCity, makeStudentInaktiv} from "./03";

let student: StudentType
beforeEach(() => {

	student = {
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
		tehnologies: [
			{id: 1, title: "HTMl"},
			{id: 2, title: "css"},
			{id: 3, title: "react"},
		]
	}

})

test.skip("new tech should be added to student", () => {
	expect(student.tehnologies.length).toBe(3)

	addSkill(student, "JS")

	expect(student.tehnologies[3].title).toBe("JS")


})
test.skip("student should be not active", () => {
	expect(student.isActive).toBe(true)

	makeStudentInaktiv(student)

	expect(student.isActive).toBe(false)
})
test("does student live in Minsk", () => {

	let result1 = doesStudentLiveInCity(student, "Moscow")
	let result2 = doesStudentLiveInCity(student, "Minsk")


	expect(result1).toBe(false)
	expect(result2).toBe(true)

})