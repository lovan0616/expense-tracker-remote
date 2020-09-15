// 引入 Express 和 Express路由器
const express = require('express')
const router = express.Router()

//定義路由
router.get('/new', (req, res) => {
  res.send('This is page for new function')
})

//匯出模組
module.exports = router