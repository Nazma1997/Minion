const {Schema, model} = require('mongoose');

const minionsDataSchema = new Schema({
 name: {type: String, required: true},
 age: {type: Number, required: true},
 color: {type: String, required: true}
     
})

const  MinionData = model('MinionData', minionsDataSchema);

module.exports = MinionData;
