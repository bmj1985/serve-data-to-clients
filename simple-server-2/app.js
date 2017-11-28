const express = require('express')
const cors = require('cors')
const instructors = require('./data/instructors')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
