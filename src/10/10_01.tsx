import exp from "node:constants";

export type UserType={
	name:string
	hair: number
	address:{title:string}
}
export type Userlaptop = UserType &{
	laptop:{title:string}
}

export function moveUser(user:Userlaptop, city:string){
	const copy={...user,  address:{...user.address, title:city}}
	return copy
}