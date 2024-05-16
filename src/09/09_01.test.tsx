import {increaseAge} from './09-mutability'


test("Increase Age", () => {
	const users =[
		{name: 'Bob', age: 29},
		{name: 'Job', age: 22}
	]

	const admin = users

	admin.push({name: 'Darren', age: 42})

	expect(users.length).toBe(3)
	expect(users[2].name).toBe('Darren')
	expect(users[2]).toEqual ({name: 'Darren', age: 42})


	// const user = {
	// 	name: 'Bob',
	// 	age: 29
	//
	// }
	//
	//
	// increaseAge(user)
	//
	// expect(user.age).toBe(30)
	//
	// const superman = user
	// superman.age = 1000
	// expect(user.age).toBe(1000)

})

test("Increase Age", () => {


	const user = {
		name: 'Bob',
		age: 29

	}


	increaseAge(user)

	expect(user.age).toBe(30)

	const superman = user
	superman.age = 1000
	expect(user.age).toBe(1000)

})
test("Increase Age", () => {

	const user ={name: 'Bob', age: 29}
	const user2 = {name: 'Job', age: 22}

const users =[user, user2, {name: 'Bob', age: 29}]


	expect(users.length).toBe(3)

})