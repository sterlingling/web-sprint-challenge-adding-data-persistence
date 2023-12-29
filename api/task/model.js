// build your `Task` model here
const db = require('../../data/dbConfig');

function createTask(taskData) {
    return db('tasks').insert(taskData).returning('*');
}
function getAllTasks() {
    return db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select(
            'tasks.task_id',
            'tasks.task_description',
            'tasks.task_notes',
            'tasks.task_completed',
            'projects.project_name',
            'projects.project_description'
        );
}

module.exports = {
    createTask,
    getAllTasks
}