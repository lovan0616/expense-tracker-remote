// 載入 mongoose
const mongoose = require('mongoose')

// 建構子 Schema
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  },
  icon:{
    type: String,
    required: true
  }
})

// 輸出 recordSchema
module.exports = mongoose.model('Record', recordSchema)