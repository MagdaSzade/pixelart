const express = require('express');
const { info, error, add } = require('winston');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const compression = require('compression');

const errors =require('./middleware/errors');

const artRouter = require("./routes/art");
const userRouter = require("./routes/users");
const helmet = require('helmet');
const logger = require('./logger');

const app = express();

add(logger);

const apiPort = process.env.PORT || 9090;

db.on('error', error.bind('MongoDB connection error'));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/api/users', userRouter);
app.use('/api/art', artRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
});

app.use(errors);

app.listen(apiPort, () => info(`Server running on port ${apiPort}`));