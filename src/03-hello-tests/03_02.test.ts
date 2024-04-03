import {CityType} from "../02-hello-tests/02_02";
import {addMoneyToBudget} from "./03";


let city: CityType;

beforeEach(() => {
	city = {
		title: "New York",
		houses: [
			{buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
			{buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
			{buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}
		],

		governmentBuildings: [
			{
				type: "HOSPITAL",
				budget: 200000,
				staffCount: 200,
				address: {number: 100, street: {title: "Central Str"}}
			},

			{
				type: "FIRE-STATION",
				budget: 500000,
				staffCount: 1000,
				address: {number: 100, street: {title: "South Str"}}
			},

		],
		citizensNumber: 1000000
	}
})


test("Budget should be changed for HOSPITAL", () => {
	addMoneyToBudget(city.governmentBuildings[0], 10000);

	expect(city.governmentBuildings[0].budget).toBe(300000)

})