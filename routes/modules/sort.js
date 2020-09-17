const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  const category = req.query.sortedBy
  console.log(category)

  Record.find({category})
    .lean()
    .then(records => res.render('index', {records}))
})


module.exports = router