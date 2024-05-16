import {moveUser, Userlaptop, UserType} from "./10_01";
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