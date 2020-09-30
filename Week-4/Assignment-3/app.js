// Basic setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mysql = require('mysql')
const config = require('./config.js')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')

// Database connection setup
const db = mysql.createConnection(config)

db.connect((error) => {
  if (error) {
    return console.error('error: ' + error.message)
  }
  console.log('Connected to the MySQL server.')
})

// Home page
app.get('/', (req, res) => {
  res.render('home')
})

// Route for new users to sign up
app.post('/signup', (req, res) => {
  // Query to check if email already exists in db.
  const checkUser = "SELECT email FROM `user` WHERE `email` = '" + req.body.email + "'"

  // Query to insert email and password if email does not exist in db.
  const insertUser =
    "INSERT INTO `user` (`email`,`password`) VALUES ('" + req.body.email + "', '" + req.body.password + "')"
  let message = ''

  db.query(checkUser, (error, result) => {
    if (error) throw error
    console.log(result.length)

    // If email exists in db, result.length will be 1
    if (result.length > 0) {
      message = 'Email already exist, please try another email.'
      return res.render('home', { message })
    } else {
      // If email does not exist in db, result.length will be 0
      db.query(insertUser)
      console.log('user created')
      return res.render('member')
    }
  })
})

// Route for existing users to sign in
app.post('/signin', (req, res) => {
  // Query to check if the input email and password both matches the data in db.
  const isUserValid =
    "SELECT email, password FROM `user` WHERE `email` = '" +
    req.body.email +
    "' AND `password` = '" +
    req.body.password +
    "'"
  let message = ''

  db.query(isUserValid, (error, result) => {
    if (error) throw error
    console.log(result.length)

    // If there is no match, the result.length will be 0
    if (result.length === 0) {
      message = 'Wrong email or password, please check again.'
      return res.render('home', { message })
    } else {
      return res.render('member')
    }
  })
})

app.listen(port, () => {
  console.log(`App currently listen on http://localhost:${port}`)
})
