// 引入 Express 與 Express路由器
const express = require('express')
const router = express.Router()

// 引入home模組
const home = require('./modules/home')
router.use('/', home)

// 匯出路由器
module.exports = router