import {addNew, addNew2, ComponyT, ComponyType, moveUser, removeJs, UserBookType, Userlaptop, UserType} from "./10_01";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

function barber(u:UserType,power: number){
  const copy= {...u,address:{...u.address}}
	copy.hair= u.hair /power
	return copy
}
test('some test',()=>{
	let user: UserType={
		name: 'bob',
		hair:32,
		address:{
			title:'Minsk'
		}
	}
	const newUser =barber(user, 2)

	expect(user.hair).toBe(32)
	expect(newUser.hair).toBe(16)
})
test('some test1',()=>{
	let user: Userlaptop={
		name: 'bob',
		hair:32,
		address:{title:'Minsk'},
		laptop:{title:'Asus'}
	}
	const movedUser=moveUser(user, "Kiev")

	expect(user).not.toBe(movedUser)
	expect(user.address).not.toBe(movedUser.address)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(movedUser.address.title).toBe('Kiev')

})
test('update book',()=>{
	let user: UserBookType={
		name: 'bob',
		hair:32,
		address:{title:'Minsk'},
		laptop:{title:'Asus'},
		books:['css','js','react']
	}
	const copyUser=addNew(user, "ts")

	expect(user).not.toBe(copyUser)
	expect(user.address).not.toBe(copyUser.address)
	expect(user.laptop).toBe(copyUser.laptop)
	expect(user.books).not.toBe(copyUser.books)
	expect(copyUser.books.length).toBe(4)
	expect(copyUser.books[3]).toBe('ts')

})
test('update book2',()=>{
	let user: UserBookType={
		name: 'bob',
		hair:32,
		address:{title:'Minsk'},
		laptop:{title:'Asus'},
		books:['css','js','react']
	}
	const copyUser=addNew2(user, "ts", "js")

	expect(user).not.toBe(copyUser)
	expect(user.address).not.toBe(copyUser.address)
	expect(user.laptop).toBe(copyUser.laptop)
	expect(user.books).not.toBe(copyUser.books)
	expect(copyUser.books.length).toBe(3)
	expect(copyUser.books[1]).toBe('ts')

})
test('remove js',()=>{
	let user: UserBookType={
		name: 'bob',
		hair:32,
		address:{title:'Minsk'},
		laptop:{title:'Asus'},
		books:['css','js','react']
	}
	const copyUser=removeJs(user,  "js")

	expect(user).not.toBe(copyUser)
	expect(user.address).not.toBe(copyUser.address)
	expect(user.laptop).toBe(copyUser.laptop)
	expect(user.books).not.toBe(copyUser.books)
	expect(copyUser.books.length).toBe(2)
	expect(copyUser.books[1]).toBe('react')

})
test('ComponyT',()=>{
	let user: UserBookType & ComponyType={
		name: 'bob',
		hair:32,
		address:{title:'Minsk'},
		laptop:{title:'Asus'},
		books:['css','js','react'],
		companies:[
			{id:1, name: 'Amazon'},
			{id:2, name: 'Googl'},
		]
	}
	const copyUser=ComponyT(user,  "HH")

	expect(user).not.toBe(copyUser)
	expect(user.address).not.toBe(copyUser.address)
	expect(user.laptop).toBe(copyUser.laptop)
	expect(user.companies).not.toBe(copyUser.companies)
	expect(copyUser.companies.length).toBe(3)
	expect(copyUser.companies[2].name).toBe('HH')

})