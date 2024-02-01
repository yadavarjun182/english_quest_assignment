
const mongoose = require("mongoose")


const userformSchema = mongoose.Schema({
  no_of_chapters: { type: Number },
  author: { type: String },
  cover_photo: { type: String },
  book_name: { type: String },
  category: { type: String },
  release_year: { type: String },
  createdAt: { type: Date, default: Date.now }
})

const userformModel = mongoose.model("userform", userformSchema)

module.exports = { userformModel }