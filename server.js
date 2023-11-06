const express = require('express');
const session = require('express-session');
const passportLocal = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express()
const invoiceRouter = require('./routes/invoices.js')
const workorderRouter = require('./routes/workorder.js')
const quotationRouter = require('./routes/quotation.js')

app.set('view engine', 'ejs')

// every route created in the invoiceRouter, will be added to the end of /invoices
app.use('/invoices', invoiceRouter)
app.use('/workorder', workorderRouter)
app.use('/quotation', quotationRouter)

// going to a specific path 
app.get('/', (req, res) => {
    res.render('index') 
})


app.listen(8080)

