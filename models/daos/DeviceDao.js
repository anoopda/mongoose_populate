var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var objectId = Schema.ObjectId;

var storySchema = Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : String
})

var Story  = mongoose.model('Story', storySchema);
module.exports = Story 




