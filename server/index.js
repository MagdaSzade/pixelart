const express = require('express');
const db = require('./db');
const userRouter = require("./routes/users");
const app = express();

const apiPort = process.env.PORT || 9090;

//app.use(bodyParser.json());
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World from backend !')
});

app.use('/api/user', userRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));