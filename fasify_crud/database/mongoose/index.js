const mongoose = require('mongoose');
const config = require('./config');
const {url, options} = config;

mongoose.connect(url, options);
const {connection} = mongoose;
connection.on('error', (error) => {
    console.log(error);
})