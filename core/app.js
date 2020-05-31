const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const models = require('./models');


class Application {
    constructor () {
        this.expressApp = express();
        this.manager = new models.TaskManager();
        this.attachRoutes();
    }

    attachRoutes () {
        let app = this.expressApp;
        let jsonParser = bodyParser.json();

        app.use(cors())

        app.get('/tasks', this.allSearchHandler.bind(this));
        app.post('/add', jsonParser, this.createTaskHandler.bind(this));
        app.post('/edit', jsonParser, this.editTaskHandler.bind(this));
        app.post('/delete', jsonParser, this.deleteTaskHandler.bind(this));
    }

    createTaskHandler (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');

        if (!req.body) {
            res.status(400).json({});
        } else {

            console.log(req.body)

            let task = this.manager.createTask(req.body);
            let response = {
                task: task.toJson()
            };

            res.json(response);
        }
    }

    editTaskHandler (req, res) {

        if (!req.body) {
            res.status(400).json({});
        } else {

            console.log(req.body)

            let task = this.manager.editTask(req.body);
            let response = {
                task: task
            };

            res.json(response);
        }
    }

    deleteTaskHandler (req, res) {

            this.manager.deleteTask(req.body.id);

            let response = {
                name: ' задача удалена '
            }

            res.json(response);
    }

    allSearchHandler (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        let tasks = this.manager.getAll();

        let response = {
            tasks
        };


        res.json(response);
    }
}


// Экспортируем наш класс наружу
module.exports = Application;