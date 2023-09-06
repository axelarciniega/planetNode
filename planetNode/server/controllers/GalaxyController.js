import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";




export class GalaxyController extends BaseController{
    constructor(){
        super('api/galaxies')
        this.router
            .post('', this.createGalaxies)
            .get('', this.getGalaxies)
    }
   
    async createGalaxies(request, response, next) {
        try {
            const body = request.body
            const newGalaxy = await galaxyService.createGalaxy(body)
            response.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }


    async getGalaxies(request, response, next) {
        try {
            const query = request.query
            const galaxies = await galaxyService.getGalaxies(query)
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }





}