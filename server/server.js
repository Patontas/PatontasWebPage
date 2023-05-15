require('dotenv').config();
require('./config/connectDB');
const express = require('express');
const routes = require('./routes/router.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//PayPal API
app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb ');
});

//Routes
app.use('/api', routes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
    console.log(`Server Running on  http://localhost:${port}`)
);
