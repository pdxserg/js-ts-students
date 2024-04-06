import {StudentType} from "../02-hello-tests/02";
import {CityType, GoverType, HousesType} from "../02-hello-tests/02_02";


export const addSkill =(st:StudentType, skill: string) =>{

	st.tehnologies.push({
		id: new Date().getTime(),
		title: skill

	})

	}
export const makeStudentInaktiv= (s:StudentType) =>{
	s.isActive= false
}

export  const doesStudentLiveInCity = (s: StudentType, cityName: string) => {
	return s.address.city.cityTitle === cityName
}

export const addMoneyToBudget= (g: GoverType, budget: number) =>{
	return g.budget+= budget;

}





// !!!!!!!!doesnt work properly
 export const repairHouse = (housesType1: HousesType) => {
	 housesType1.repaired = true
 }








export const toFireStaff = (g: GoverType, number: number) => {
g.staffCount -= number
}

export const toHireStaff = (g: GoverType, number: number) => {
g.staffCount += number
}



export function peopleGreetingn(props: CityType ){
	return `Hello ${props.title} and all ${props.citizensNumber} peoples`

}