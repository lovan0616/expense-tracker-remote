// 引入 Express 和 Express路由器
const express = require('express')
const router = express.Router()

// 引入 records model & category model
const Record = require('../../models/record')
const Category = require('../../models/category')

//定義路由
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const {name, date, category, amount} = req.body
  Category.findOne({ name: `${category}` }) // 從Category中撈出name相符的該筆資料
  .lean()
  .then(category => category.icon) // 回傳該筆資料的icon值
  .then(icon => Record.create({ name, date, category, amount, icon})) // 接著運用
  .then(() => {res.redirect('/')})
  .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
  .lean()
  .then(record => res.render('edit',{record}))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const {name, date, category, amount} = req.body
  Category.findOne({ name: `${category}` })
  .then(category => category.icon)
  .then(icon =>
    Record.findById(id)
    .then(record => { 
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      record.icon = icon 
      return record.save()}))
  .then(() => {res.redirect('/')})
  .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
  .then(record => record.remove())
  .then(() => {res.redirect('/')})
  .catch(error => console.log(error))
})

//匯出模組
module.exports = router