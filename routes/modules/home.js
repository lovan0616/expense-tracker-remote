// 引入 Express 和 Express路由器
const express = require('express')
const router = express.Router()

// 引入record model
const Record = require('../../models/record')
const Category = require('../../models/category')

// 定義首頁路由
router.get('/', (req, res) => {
  Record.find()
  .lean()
  .then(records => res.render('index', {records}))
})


// 匯出模組
module.exports = router