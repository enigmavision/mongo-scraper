// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var headlineSchema = new Schema({

  headline: {
    type: String,
    required: true,
    unique: true
  },

  summary: {
    type: String,
    required: true
  },
  // date is just a string
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema
var headline = mongoose.model("headline", headlineSchema);

// Export the Headline model
module.exports = headline;