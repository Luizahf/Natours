const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// 1) Middlewares
app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log("Hellooo middleware!");
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Routes
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

// 4) Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`App runing on port ${port}...`);
});


