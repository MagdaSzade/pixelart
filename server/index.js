const express = require('express');
const cors = require('cors');
const db = require('./db');
const artRouter = require("./routes/art");

const app = express();

const apiPort = process.env.PORT || 9090;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World from backend !')
});

app.use('/api/art', artRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));