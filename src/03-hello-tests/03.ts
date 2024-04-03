import {StudentType} from "../02-hello-tests/02";
import { GoverType} from "../02-hello-tests/02_02";


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
	return g.budget += budget;

}
