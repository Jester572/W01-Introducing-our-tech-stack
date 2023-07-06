const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'https://cse341-lesson-1-e5z6.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpoinsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpoinsFiles, doc);

module.exports = { doc };
