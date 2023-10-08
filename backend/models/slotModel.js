const { Schema, model}= require('..connection');

const slotschema = new Schema({
    floor: Number ,
    slot: Number,
    vehicle: String,
    name: String,
    time: Date
});

module.exports=model('parkings', slotschema);