export type CityType ={

	title: string
	houses: Array<HousesType>
	governmentBuildings:Array<GoverType>
	citizensNumber: number
}
export type HousesType={
	id: number
	buildedAt: number
	repaired: boolean
	address: AddressType
}
export type AddressType ={
	number?: number
	street: StreetType
}
export type  StreetType={
	title: string
}

export type GoverType ={
	type: "HOSPITAL" | "FIRE-STATION"
	budget: number
	staffCount: number
	address: AddressType
}

