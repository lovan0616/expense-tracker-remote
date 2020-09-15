const Category = require('../category')
const categoryList = require('./category.json')

const db = require('../../config/mongoose')
db.once('open', () => {
  for (let i = 0; i < categoryList.results.length; i++) {
    Category.create({
      name: `${categoryList.results[i].name}`,
      icon: `${categoryList.results[i].icon}`
    })
  }
  console.log('category seed done')
})