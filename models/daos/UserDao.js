var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var objectId = Schema.ObjectId;
var personSchema = Schema({
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var Person = mongoose.model('Person', personSchema);
module.exports = Person;





