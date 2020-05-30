class TaskManager {
    constructor () {

        this.tasks = {};

        this._nextTaskId = 0;
    }

    createTask (data) {

        let task = new Task(this._nextTaskId++, data);

        this.tasks[task.id] = task;
        return task;
    }

    getById (id) {
        return this.tasks[id];
    }

    getAll () {
        return this.tasks;
    }
}


class Task {
    constructor (id, data) {
        this.id = id;

        this.name = data.name;
        this.date = Date.now();
        this.category = data.category;
        this.publish = data.publish;
        this.personal = data.personal;
    }

    toJson () {
        return {
            id: this.id,
            name: this.name,
            date: this.date,
            category: this.category,
            publish: this.publish,
            personal: this.personal
        };
    }
}

// Определим объекты, которые будут экспортироваться модулем как внешнее API:
module.exports = { TaskManager, Task };
