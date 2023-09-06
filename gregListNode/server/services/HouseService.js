import { dbContext } from "../db/DbContext.js"

class HouseService{

    async getHouses(){
        const houses = await dbContext.House.find()
        return houses 
    }




    async createHouse(houseId) {
        const house = await dbContext.House.create(houseId)
        return house
    }
}



export const houseService = new HouseService()