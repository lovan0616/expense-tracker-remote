// 引入 Express 與 Express路由器
const express = require('express')
const router = express.Router()

// 引入home模組
const home = require('./modules/home')
router.use('/', home)

// 引入records模組
const records = require('./modules/records')
router.use('/records', records)

// 引入sort模組
const sort = require('./modules/sort')
router.use('/sort', sort)

// 引入search模組
const search = require('./modules/search')
router.use('/search', search)

// 匯出路由器
module.exports = router