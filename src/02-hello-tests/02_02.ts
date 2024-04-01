export type CityType ={
	title: string
	houses: Array<HousesType>
	governmentBuildings:Array<GoverType>
	citizensNumber: number
}
type HousesType={
	buildedAt: number
	repaired: boolean
	address: AddrType
}
export type AddrType ={
	number?: number
	street: StreetType
}
type  StreetType={
	title: string
}

type GoverType ={
	type: "HOSPITAL" | "FIRE-STATION"
	budget: number
	staffCount: number
	address: Array<AddrType>
}

