// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model')

router.post('/', async (req, res) => {
    try {
      const [task] = await Task.createTask(req.body);
  
      // Convert task_completed to boolean
      const responseTask = {
        ...task,
        task_completed: Boolean(task.task_completed),
      };
  
      res.json(responseTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const tasks = await Task.getAllTasks();
  
      // Convert task_completed to boolean for each task
      const responseTasks = tasks.map(task => ({
        ...task,
        task_completed: Boolean(task.task_completed),
      }));
  
      res.json(responseTasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;