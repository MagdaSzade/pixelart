const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const artRouter = require("./routes/art");


const app = express();

const apiPort = process.env.PORT || 9090;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/art', artRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));