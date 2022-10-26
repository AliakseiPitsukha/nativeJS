import {CityType, GovermentBuildingsType} from "../02/02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( (h) => h.address.street.title !== street)
}
export function getBuildingsWithStaffCountGreaterThen(buildings: GovermentBuildingsType[], minStaff: number) {
    return buildings.filter((b)=> b.staffCount > minStaff)
}