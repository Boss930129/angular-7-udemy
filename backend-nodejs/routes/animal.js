'use strict'

var express = require('express');
var AnimalController = require('../controllers/animal');

var api = express.Router();
var middleware_auth = require('../middlewares/autenticate');

var multipart = require('connect-multiparty');
var middleware_upload = multipart( { uploadDir: AnimalController.ANIMAL_CONSTANTS.upload_animal });

api.get('/test-controller-animal', middleware_auth.ensureAuth, AnimalController.testAnimal);
api.get('/animals', AnimalController.getAnimals);
api.get('/animal/:id', AnimalController.getAnimalById);
api.post('/animal', middleware_auth.ensureAuth, AnimalController.saveAnimal);
api.put('/animal/:id', middleware_auth.ensureAuth, AnimalController.updateAnimal);

module.exports = api;