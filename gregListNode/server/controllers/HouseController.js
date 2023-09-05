import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class HouseController extends BaseController{
    constructor(){
        super('api/houses')
        this.router

    }





    async createHouse(request, response, next){
        try {
             logger.log('creating house', request.body)
        const house = await houseService.createHouse(request.body)
        response.send(house)
        } catch (error) {
            next(error)
        }
       
    }
}