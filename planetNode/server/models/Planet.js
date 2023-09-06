import mongoose from "mongoose";
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
    name:{type:String, required: true, minLength:2, maxLength: 31},
    biome: {type:String, required: true},
    atmosphere: {type: Boolean, default: true},
    GalaxyId: {type: Schema.Types.ObjectId, ref: 'Galaxy', required: true}
},
    { toJSON: { virtuals: true } }
)


PlanetSchema.virtual('galaxy',{
    localField: 'GalaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true

})