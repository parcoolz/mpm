const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let MovieUnit = new Schema({
  movie_name: {
    type: String
  },
  movie_summary: {
    type: String
  },
  movie_image: {
    type: String
  }
  
},{
    collection: 'movieunits'
});

module.exports = mongoose.model('MovieUnit', MovieUnit);