const router = require('express').Router()
const Project = require('./model')

router.post('/', async (req, res) => {
    try {
        const [project] = await Project.createProject(req.body);
        // Convert the project_completed to a boolean before sending the response
        const responseProject = { ...project, project_completed: Boolean(project.project_completed) };
        res.json(responseProject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/', async (req, res) => {
    try {
        const projects = await Project.getProjects();

        // Convert project_completed values to booleans before sending the response
        const responseProjects = projects.map(project => ({
            ...project,
            project_completed: Boolean(project.project_completed),
        }));

        res.json(responseProjects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;