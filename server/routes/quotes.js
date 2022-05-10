const express = require('express')

const db = require('../db/quotes')

const router = express.Router()

//GET api/v1/quotes
router.get('/getRandomQuoteBySubjectId', (req, res) => {
  const id = req.body.subjectId
  console.log(id);
  db.getQuotesBySubjectId(id)
  .then((data) => {
    res.json(data[getRandomIntInclusive(0, data.length)])
    return null
  })
  .catch((err) => {
    console.error(err)
    res
      .status(500)
      .json({ message: 'Something went wrong getting goal data by ID' })
  })
})


//random number helper function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

module.exports = router