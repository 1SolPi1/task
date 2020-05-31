const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const models = require('./models');

const apps = require('express')();
const server = require('http').Server(apps);
const io = require('socket.io')(server);

server.listen(80);

const manager = new models.TaskManager();

io.on('connection', (socket) => {

    socket.on('getAll', (data) => {
        let tasks = manager.getAll();

        socket.emit('task', tasks);
    });

    socket.on('create', (data) => {

        manager.createTask(data);

        let tasks = manager.getAll();

        socket.emit('task', tasks);
    });

    socket.on('edit', (data) => {

        manager.editTask(data);

        let tasks = manager.getAll();

        socket.emit('task', tasks);
    });

    socket.on('delete', (data) => {

        manager.deleteTask(data.id);

        let tasks = manager.getAll();

        socket.emit('task', tasks);
    });

});

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