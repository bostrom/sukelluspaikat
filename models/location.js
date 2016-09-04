// define model =================
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  pos: {
    type: [Number], // [<long>,<lat>]
    index: '2d'
  }
});

module.exports = mongoose.model('Location', LocationSchema);
