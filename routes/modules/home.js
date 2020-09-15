// 引入 Express 和 Express路由器
const express = require('express')
const router = express.Router()

// 定義首頁路由
router.get('/', (req, res) => {
  res.send('Hello World')
})

// 匯出模組
module.exports = router