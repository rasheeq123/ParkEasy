const { Schema, model}= require('..connection');

const slotschema = new Schema({
    floor: Number ,
    slot: Number,
    vehicle_no : String,
    time: Date,
    // user_id: Number
});

module.exports=model('parkings', slotschema);