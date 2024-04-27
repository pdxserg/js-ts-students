export type UsersType ={
	[key:string]: {id:number, name: string}
}


let  users: UsersType
beforeEach( ()=>{
	 users= {
		'101': {id: 101, name: 'Dimych'},
		'1212': {id: 1212, name: 'Bob'},
		'344': {id: 344, name: 'Valera'},
		'1': {id: 1, name: 'Katy'},
	}
})

test('should delete', ()=>{
	delete users['1']

	expect(users['1']).toBeUndefined()
})

test('should update name', ()=>{
	users['1'].name = 'Ekaterina'

	expect(users['1'].name).toBe('Ekaterina')
})

