const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const idiomSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  definitions: []
})

const Idiom = mongoose.model('Idiom', idiomSchema);

module.exports = Idiom