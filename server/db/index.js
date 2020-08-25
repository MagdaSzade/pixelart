const mongoose = require('mongoose');
const config = require('config');

mongoose
    .connect(config.get("db"), { useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;