import exp from "node:constants";

export type UserType={
	name:string
	hair: number
	address:{title:string}
}
export type Userlaptop = UserType &{
	laptop:{title:string}
}
export type UserBookType=UserType&Userlaptop& {
	books:Array<string>
}
export type ComponyType={
	companies:Array<{id:number, name: string}>
}
export function moveUser(user:Userlaptop, city:string){
	return {...user,  address:{...user.address, title:city}}
}

export const addNew=(us:UserBookType,book:string, )=>{
	return{...us, address:{...us.address},
		books: [...us.books, book] }
}
export const addNew2=(us:UserBookType,book:string,change:string)=>{
	return{...us, address:{...us.address},
		books: us.books.map((b)=> b===change ? b=book : b) }
}
export const removeJs=(us:UserBookType,book:string)=>{
	return{...us, address:{...us.address},
		books:us.books.filter(b=> b !==book )  }
}

export const ComponyT=(us:UserBookType& ComponyType,comp:string)=>{
	const newComp= {id:1, name:comp}
	return{...us, address:{...us.address},
		companies: [{...us.companies[0]},{...us.companies[1]},newComp]}
}