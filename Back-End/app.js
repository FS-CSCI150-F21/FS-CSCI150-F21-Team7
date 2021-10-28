// These are the created variables
const express = require('express');
const path = require('path');
const app = express();
//const port = process.env.PORT || 3000;
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


// path the index
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

// endpoint for the login
router.post('/login', (req, res) => {
    console.log(req.body)
    res.send('POST request to the homepage')
})

// tells express to use the router
app.use('/', router);

// tells app to listen on port
/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/