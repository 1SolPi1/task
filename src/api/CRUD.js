import api from './index';

export default {
    getAllTasks() {
        return api.get('/tasks');
    },
    addTask(data) {
        return api.post('/add', data);
    },

    editTask(data) {
        return api.post('/edit', data);
    },

    deleteTask(data) {
        return api.post('/delete', data);
    }
};
