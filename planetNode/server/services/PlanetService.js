import { dbContext } from "../db/DbContext.js"



 class PlanetService{
   async createPlanets(body) {
       const planets = await dbContext.Planet.create(body)
       return planets
    }

}


export const planetService = new PlanetService()