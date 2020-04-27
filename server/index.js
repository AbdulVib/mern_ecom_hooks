const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

//get models
const Users = require('./modal/Schema')


const app = express()

//mongo
mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(res => console.log(' connected'))
    .catch(err => console.log(err, ' error'))

//products
const productsList = require('./product.json')

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

////////////

app.get('/products', (req, res) => {
    res.json(productsList)
})

app.post('/addProduct', (req, res) => {
     //new object
     const { name, price, sku, description, mediaUrl, count } = req.body
     const newUser = new Users({
        name,
        price,
        sku,
        description,
        mediaUrl,
        count
      })
      newUser.save()
        .then(res => console.log(res))
        .catch(err => console.log(err, ' error'))
    //   console.log(req.body, ' user')

})

app.listen(5000)