const express = require('express')
const app = express()

app.get('/', (req, res) => {
      res.send('Homepage')
})

app.listen(8000, err => {
	if(err) throw err

		console.log('App is running....')
})