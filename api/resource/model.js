// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResources() {
    const resources = await db('resources')
    return resources
}

function createResource(resourceData) {
    return db('resources').insert(resourceData).returning('*')
}

module.exports = {
    getResources,
    createResource
}