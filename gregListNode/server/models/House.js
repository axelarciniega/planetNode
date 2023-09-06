import { Schema } from "mongoose";

export const houseSchema = new Schema(
    {
        name: {type: String, required: true, minLength: 3, maxLength: 33},
        year: {type: Number, required: true, min: 1800, max: new Date().getFullYear() + 1},
        price: {type: Number, required: true, min: 100, max: 10000000},
        imgUrl: {type: String, required: true, maxLength: 1000, default: `https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`},
        description: {type: String, required: true, minLength: 5, maxLength: 200}
    }
)