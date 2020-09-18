// 引入 Express 和 Express路由器
const express = require('express')
const router = express.Router()

// 引入 records model
const Record = require('../../models/record')

//定義路由
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  let icon = "fas fa-home fa-3x"
  switch (category) {
    case "transportation":
      icon = "fas fa-shuttle-van fa-3x"
      break
    case "entertainment":
      icon = "fas fa-grin-beam fa-3x"
      break
    case "food":
      icon = "fas fa-utensils fa-3x"
      break
    case "others":
      icon = "fas fa-pen fa-3x"
      break
  }

  Record.create({ name, date, category, amount, icon })
    .then(() => { res.redirect('/') })
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
  let icon = "fas fa-home fa-3x"
  switch(category) {
    case "transportation":
      icon = "fas fa-shuttle-van fa-3x"
      break
    case "entertainment":
      icon = "fas fa-grin-beam fa-3x"
      break
    case "food":
      icon = "fas fa-utensils fa-3x"
      break
    case "others":
      icon = "fas fa-pen fa-3x"
      break
  }

  Record.findById(id)
  .then(record => {
    record.name = name
    record.date = date
    record.category = category
    record.amount = amount
    record.icon = icon
    return record.save()
  })
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