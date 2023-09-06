import mongoose from "mongoose"
const Schema = mongoose.Schema



export const GalaxySchema = new Schema({
    name: {type: String, required: true, minLength: 2, maxLength: 31},
    stars: {type: Number, required: true},
    emoji: {type: String, required: true}


})