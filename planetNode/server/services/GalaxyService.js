import { dbContext } from "../db/DbContext.js"



class GalaxyService{
    
    
    
     async createGalaxy(body) {
       const newGalaxy = await dbContext.Galaxy.create(body)
       return newGalaxy
    }

    async getGalaxies(query) {
        const galaxies = await dbContext.Galaxy.find(query)
     }



}


export const galaxyService = new GalaxyService()