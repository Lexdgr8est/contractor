    const express = require('express');
    const cors  = require('cors');
    const bodyParser = require('body-parser');
    require('dotenv').config();


    const app = express();
    const port = process.env.PORT || 5000;

    const usersRouter = require('./routes/users');
    const notificationsRouter = require('./routes/notifications');
    const activeJobsRouter = require('./routes/activeJobs');

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', '*')

        if(req.method === 'OPTIONS'){
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
            res.status(200).json({});
        }
        next();
    });

    app.use('/users', usersRouter);
    app.use('/notifications', notificationsRouter);
    app.use('/activeJobs', activeJobsRouter);


    app.use(cors());
    app.use(express.json());

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });