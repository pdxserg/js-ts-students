


type UsersType ={
	[kei:string]: {id:number, name: string}
}


export const users: UsersType = {
	'101': {id: 101, name: 'Dimych'},
	'1212': {id: 1212, name: 'Bob'},
	'344': {id: 344, name: 'Valera'},
	'1': {id: 1, name: 'Katy'},
}

let user ={id:242, name: 'Igor'}
users[user.id] = user
delete users[user.id]
export const usersArray = [
	{id: 101, name: 'Dimych'},
	{id: 1212, name: 'Bob'},
	{id: 344, name: 'Valera'},
	{id: 1, name: 'Katy'},
]
console.log(users)