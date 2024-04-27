import {GoverType, HousesType} from "../02-hello-tests/02_02";


// export  const steerName = governmentBuildings.map()=>{
//
// }
export const getStreetsTitlesOfGovernmentBuildings = (
	buildings: Array<GoverType>) =>{
	return buildings.map(a => a.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>)=>{
	return houses.map(h=> h.address.street.title)
}

export const createMessage= (houses: Array<HousesType>) =>{
	return houses.map(h => `Hello guys from${h.address.street.title}`)
}