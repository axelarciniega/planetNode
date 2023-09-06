import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetController extends BaseController{
    constructor(){
        super('api/planets')
        this.router
            .post('', this.createPlanets)
    }
    
    
    
    async createPlanets(response, request, next) {
        try {
            const body = request.body
            const newPlanet = await planetService.createPlanets(body)
            response.send(newPlanet)
        } catch (error) {
            next(error)
        }
    }




}