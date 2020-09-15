// 載入 mongoose
const mongoose = require('mongoose')

// 建構子 Schema
const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

// 輸出 recordSchema
module.exports = mongoose.model('Category', categorySchema)