const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const apiRoute = require('./routes/private/api');
const authRoute = require('./routes/public/auth')
const app = express();

app.use(bodyParser.json());
app.use('/api', apiRoute);
app.use('/public/user', authRoute);

app.get('/', function (req, res) {
   // res.send('<h1>Hello from server</h1>');
   res.send({value:'Hello from server'});
});

app.listen(process.env.PORT || 3000, () => {
    console.info(`Server running on localhost: ${process.env.PORT}`);
})
