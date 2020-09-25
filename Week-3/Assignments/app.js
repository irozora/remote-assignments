// Basic setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('view engine', 'pug')
app.use(express.static('public'))

// Assignment 1: First Web Server
app.get('/', (req, res) => {
  res.render('index')
})

// Assignment 2: Build Backend API for Front-End
app.get('/getData', (req, res) => {
  // assign the value of req.query.number to the variable number.
  const { number } = req.query

  // create an empty object named data
  const data = {}

  // the number variable will only have a string value if the user has typed something
  if (number) {
    // use parseInt method to convert data.number and assign to data.convert
    data.convert = parseInt(number)

    // if isNaN(data.convert) is true OR if data.convert equals to 0, send another message, otherwise do the math
    if (isNaN(data.convert) || data.convert <= 0) {
      data.message = 'Wrong Parameter'
    } else {
      data.message = ((data.convert + 1) * data.convert) / 2
    }
  }

  res.render('getData', data)
})

// Assignment 4: HTTP Cookie
app.get('/myName', (req, res) => {
  // if the user has typed a name, the name value will be stored in req.cookies, assign the value to name.
  const { name } = req.cookies
  // render the name on myName.pug
  res.render('myName', { name })
})

app.get('/trackName', (req, res) => {
  // if the user has typed a name, the value will be stored in req.query, assign the value to name.
  const { name } = req.query

  // if the user tries to reach /trackName without giving a name, redirect to /myName
  if (!name) {
    res.redirect('/myName')
  }

  // assigned the name value to name via res.cookie method
  res.cookie('name', name)
  // render the name on myName.pug
  res.render('myName', { name })
})

app.listen(port, () => {
  console.log(`App currently listen on http://localhost:${port}`)
})
