const express = require('express');
const routes = express.Router();
const lesson1Controller = require('../controllers/lesson1');

//LocalHost:3000/
routes.get('/', lesson1Controller.jesseRoute);
routes.get('/jazlynn', lesson1Controller.jazlynnRoute);
routes.get('/evelynn', lesson1Controller.evelynnRoute);

module.exports = routes;
