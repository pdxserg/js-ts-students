import {CityType, GoverType} from "../02-hello-tests/02_02";


export const  demolishHousesOnTheStreet = (city: CityType, street: string) => {
 city.houses=city.houses.filter(ch => ch.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<GoverType>, number: number){

	return governmentBuildings.filter(g => g.staffCount > number)
}