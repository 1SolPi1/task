import api from './index';

export default {
    getAllTasks() {
        return api.get('/tasks');
    },
    getOneTasks(data) {
        return api.get('/task', data);
    },
    addTask(data) {
        return api.post('/add', data);
    },

    editTask(data) {
        return api.post('/edit', data);
    }
};
