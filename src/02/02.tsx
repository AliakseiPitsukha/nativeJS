export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovermentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovermentBuildingsType[]
    citizensNumber: number
}