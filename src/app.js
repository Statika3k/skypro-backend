const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users');
const loggerOne = require('./middlewares/loggerOne');
const loggerTwo = require('./middlewares/loggerTwo');

dotenv.config();

const { PORT = 3000, API_URL = 'http://localhost' } = process.env;

const app = express();

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.post('/', (request, response) => {
    esponse.status(200);
    response.send("Hello from POST");
})

app.use(cors());
app.use(loggerOne);
app.use(loggerTwo);
app.use(bodyParser.json());

app.use(userRouter);

app.listen(PORT, () => {
    console.log('Ссылка на сервер: ${API_URL}:${PORT}');
});

