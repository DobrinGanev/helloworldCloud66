const express = require('express')
const path = require('path')

// Constants
const PORT = 5000
const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build')

// App
const app = express()
app.use(express.static(CLIENT_BUILD_PATH))
app.get('/api', function (req, res) {
  res.send('Hello api!')
})
app.get('*', function (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'))
})
app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
