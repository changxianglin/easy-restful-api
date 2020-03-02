const express = require('express')
const mongoose = require('mongoose')
const app = express()


// Database
mongoose.connect('mongodb://lin:1xianglin@ds259620.mlab.com:59620/nodeandexpress', { useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => {console.log('Conected to database....')})
  .catch(err => console.error(err))


// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Controllers
const UserControl = require('./constrollers/UserControl')


// Routes
app.post('/api/user/create', UserControl.create)
app.post('/api/user/update', UserControl.update)
app.get('/api/user/retrieve', UserControl.retrieve)
app.delete('/api/user/delete', UserControl.delete)


// Start Server
app.listen(3000, () => console.log('Server has started on port 3000...'))