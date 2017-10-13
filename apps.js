const express = require('express');
const stripe = require('stripe')('sk_test_N96GJiIj0AnuzDjCdqKVpNOC');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express()

// hadlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

// set Static Folder
app.use(express.static(`${__dirname}/public`))

// index route
app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server strated on port '+ port)
})