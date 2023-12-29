// build your `Project` model here
const db = require('../../data/dbConfig');

function createProject(projectData) {
    return db('projects').insert(projectData).returning('*');
}

async function getProjects(){
    const projects = await db('projects');
    return projects
}

module.exports = {
    createProject,
    getProjects
}