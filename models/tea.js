const mongoose = require("mongoose"); // import mongoose

// create schema
const TeaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  keywords: String,
  origin: String,
  brew_time: Number,
  temperature: Number,
  comments: [{ text: String, date: { type: String, default: new Date() } }],
});

const Tea = mongoose.model("Tea", TeaSchema); // convert to model named Tea
module.exports = Tea; // export model for controller
