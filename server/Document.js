const { Schema, model } = require("mongoose")
//creating database schema setting id of type string and data of type object to use quill object
const Document = new Schema({
  _id: String,
  data: Object,
})

module.exports = model("Document", Document)
