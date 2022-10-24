import {GovermentBuildingsType, HousesType} from "../02/02";

export const addMoneyToBudget = (buildings: GovermentBuildingsType, budget: number) => {
    buildings.budget += budget;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const toFireStaff = (staff: GovermentBuildingsType, firedStaff: number) => {
    staff.staffCount -= firedStaff
}

export const toHireStaff = (staff: GovermentBuildingsType, newStaff: number) => {
    staff.staffCount += newStaff
}