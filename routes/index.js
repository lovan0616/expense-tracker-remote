// 引入 Express 與 Express路由器
const express = require('express')
const router = express.Router()

// 引入home模組
const home = require('./modules/home')
router.use('/', home)

// 引入records模組
const records = require('./modules/records')
router.use('/records', records)

// 匯出路由器
module.exports = router