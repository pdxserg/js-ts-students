type UserType = {
	name: string,
	age: number
}


export function increaseAge(el: UserType){
	el.age++
}